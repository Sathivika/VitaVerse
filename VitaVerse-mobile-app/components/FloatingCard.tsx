import React from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type FloatingCardProps = {
  title: string;
  color: string;
};

export default function FloatingCard({ title, color }: FloatingCardProps) {

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <AnimatedPressable
      style={[
        {
          backgroundColor: color,
          padding: 25,
          borderRadius: 20,
          marginVertical: 12,

          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 20,
          elevation: 10
        },
        animatedStyle
      ]}
      onPressIn={() => {
        scale.value = withSpring(0.96);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        {title}   
      </Text>
    </AnimatedPressable>
  );
}