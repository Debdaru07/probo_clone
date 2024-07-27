import { Text, View } from "react-native";
import React, { Component } from "react";

export default function VerticleTileRender({ title }: { title: string }) {
  return (
    <View className="p-4 bg-[#ffffff] rounded-lg">
      <Text className="font-semibold text-xs">{title}</Text>
    </View>
  );
}
