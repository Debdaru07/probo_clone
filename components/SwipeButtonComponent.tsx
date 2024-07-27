import { View } from "react-native";
import React, { useContext, useState } from "react";
import SwipeButton from "rn-swipe-button";
import { AppContext } from "@/context";

export default function SwipeButtonComponent() {
  const { selected } = useContext(AppContext);

  const defaultStatusMessage = null;
  const [swipeStatusMessage, setSwipeStatusMessage] = useState<string | null>(
    defaultStatusMessage
  );
  const [swipeStatus, setSwipeStatus] = useState<boolean>(false);
  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = (
    message: React.SetStateAction<string | null>
  ) => setSwipeStatusMessage(message);
  return (
    <View className="mt-6">
      <SwipeButton
        shouldResetAfterSuccess={true}
        title={
          swipeStatusMessage
            ? swipeStatusMessage
            : selected === "yes"
            ? "Swipe for Yes"
            : "Swipe for No"
        }
        railBackgroundColor={
          swipeStatus ? "#08C270" : selected === "yes" ? "#454CE8" : "#D92D21"
        }
        titleColor="#ffffff"
        titleFontSize={16}
        thumbIconBackgroundColor="#ffffff"
        onSwipeSuccess={() => {
          updateSwipeStatusMessage("Order Success");
          setSwipeStatus(true);
        }}
      />
    </View>
  );
}
