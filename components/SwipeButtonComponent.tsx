import { View } from "react-native";
import React, { useContext } from "react";
import SwipeButton from "rn-swipe-button";
import { AppContext } from "@/context";

export default function SwipeButtonComponent() {
  const { selected } = useContext(AppContext);
  return (
    <View className="mt-6">
      <SwipeButton
        shouldResetAfterSuccess={true}
        title={selected === "yes" ? "Swipe for Yes" : "Swipe for No"}
        railBackgroundColor={selected === "yes" ? "#454CE8" : "#D92D21"}
        titleColor="#ffffff"
        titleFontSize={16}
        thumbIconBackgroundColor="#ffffff"
      />
    </View>
  );
}
