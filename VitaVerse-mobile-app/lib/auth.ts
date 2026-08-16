import {
  GoogleAuthProvider,
  signInWithCredential,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";

WebBrowser.maybeCompleteAuthSession();

// ─── Save user to Firestore on first login ────────────────────────
async function saveUserIfNew(user: User) {
  try {
    const ref  = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        uid:        user.uid,
        name:       user.displayName ?? "",
        email:      user.email ?? "",
        photoURL:   user.photoURL ?? "",
        role:       "patient",
        createdAt:  serverTimestamp(),
        lang:       "en",
        darkMode:   false,
        bloodGroup: "",
        height:     "",
        weight:     "",
      });
      console.log("✅ New user saved:", user.email);
    } else {
      console.log("👤 Returning user:", user.email);
    }
  } catch (e) {
    console.error("Firestore error:", e);
  }
}

// ─── HOOK: Google Sign-In ─────────────────────────────────────────
export function useGoogleSignIn(onSuccess?: () => void) {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState<string | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "653228569188-cbbj98odmm3ahu9pc9e5oo5b08heojpp.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type !== "success") {
      if (response?.type === "error") {
        setError(response.error?.message ?? "Sign-in failed");
        console.error("OAuth error:", response.error);
      }
      return;
    }

    setLoading(true);
    setError(null);

    // ── Fix: handle both id_token and access_token ──────────────
    const { id_token, access_token } = response.params;
    console.log("OAuth params:", Object.keys(response.params));

    let credential;
    if (id_token) {
      // Normal flow — use id_token
      credential = GoogleAuthProvider.credential(id_token);
    } else if (access_token) {
      // Web/Expo Go fallback — use access_token
      credential = GoogleAuthProvider.credential(null, access_token);
    } else {
      setError("No token received from Google");
      setLoading(false);
      return;
    }

    signInWithCredential(auth, credential)
      .then(async (result) => {
        await saveUserIfNew(result.user);
        onSuccess?.();
      })
      .catch((e) => {
        console.error("Firebase auth error:", e);
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [response]);

  return {
    signIn:  () => promptAsync(),
    loading: loading || !request,
    error,
  };
}

// ─── HOOK: Watch auth state ───────────────────────────────────────
export function useAuthUser() {
  const [user,    setUser]    = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  return { user, loading };
}

// ─── Sign out ─────────────────────────────────────────────────────
export async function signOut() {
  await firebaseSignOut(auth);
}