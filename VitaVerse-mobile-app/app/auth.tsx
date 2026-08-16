import { useEffect, useState } from "react";
import {
  View, Text, TouchableOpacity, StyleSheet,
  TextInput, ActivityIndicator,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useGoogleSignIn } from "@/lib/auth";

export default function Auth() {
  const router = useRouter();
  const { role } = useLocalSearchParams();

  const [showOTP, setShowOTP] = useState(false);
  const [phone,   setPhone]   = useState("");
  const [otp,     setOtp]     = useState("");

  // ── Google sign-in from lib/auth.ts ──────────────────────────
  const { signIn, loading, error } = useGoogleSignIn();

  // ── Where to go after successful login ───────────────────────
  const handleLogin = () => {
    if (role === "doctor") {
      router.replace("/(Doctor_tabs)");
    } else {
      router.replace("/(Patient_tabs)");
    }
  };

  // ── OTP (mock) ────────────────────────────────────────────────
  const verifyOTP = () => {
    if (otp === "2005") {
      handleLogin();
    } else {
      alert("Invalid OTP. Use 2005 for demo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Continue as {role ?? "patient"}
      </Text>

      {/* ── Google Sign-In ── */}
      <TouchableOpacity
        style={[styles.googleBtn, loading && { opacity: 0.6 }]}
        onPress={signIn}          // ← uses useGoogleSignIn from lib/auth.ts
        disabled={loading}
      >
        {loading
          ? <ActivityIndicator color="#fff" />
          : <Text style={styles.btnText}>Sign in with Google</Text>
        }
      </TouchableOpacity>

      {/* error message if login fails */}
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      {/* ── Phone OTP ── */}
      <TouchableOpacity
        style={styles.phoneBtn}
        onPress={() => setShowOTP(true)}
      >
        <Text style={styles.btnText}>Sign in with Phone OTP</Text>
      </TouchableOpacity>

      {showOTP && (
        <View style={styles.otpContainer}>
          <TextInput
            placeholder="Enter Phone Number"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Enter OTP (demo: 2005)"
            style={styles.input}
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.googleBtn} onPress={verifyOTP}>
            <Text style={styles.btnText}>Verify & Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f7fb",
  },
  title:    { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  subtitle: { marginBottom: 40, color: "#5a6b85" },
  googleBtn: {
    backgroundColor: "#7a5aad",
    padding: 14, borderRadius: 10,
    width: 250, alignItems: "center", marginBottom: 15,
  },
  phoneBtn: {
    backgroundColor: "#10b981",
    padding: 14, borderRadius: 10,
    width: 250, alignItems: "center",
  },
  btnText:    { color: "white", fontWeight: "600" },
  errorText:  { color: "#e05c5c", marginTop: 10, fontSize: 13, textAlign: "center", paddingHorizontal: 20 },
  otpContainer: { marginTop: 20, alignItems: "center" },
  input: {
    backgroundColor: "white", width: 250,
    padding: 12, borderRadius: 8,
    marginBottom: 10, borderWidth: 1, borderColor: "#ddd",
  },
});