import { Text, View } from "react-native";
import React from "react";

export default function HorizontalTileRender({ title }: { title: string }) {
  return (
    <View className="p-4 bg-[#ffffff] rounded-lg">
      <Text className="font-semibold text-xs">{title}</Text>
    </View>
  );
}
