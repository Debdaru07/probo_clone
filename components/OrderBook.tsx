import { Pressable, Text, View } from "react-native";
import React from "react";
import User from "@/assets/svgs/User";
import { IconRender } from "./IconRender";

export default function OrderBook() {
  return (
    <View className="bg-[#ffffff] p-2.5 mt-6 rounded-lg space-y-4">
      <View className="flex-row space-x-2">
        <Pressable className="px-2 py-1 border-b rounded-lg">
          <Text className="font-medium">Activity</Text>
        </Pressable>
        <View className="px-2 py-1">
          <Text className="font-semibold">Order Book</Text>
        </View>
      </View>
      <View>
        <View className="flex-row space-x-4">
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Hella</Text>
          </View>

          <View className="flex-1 pt-4 space-y-4">
            <View className=" flex-row">
              <View className="bg-[#144CC6] w-3/4 rounded-lg rounded-r-none px-1">
                <Text>₹9</Text>
              </View>
              <View className="bg-[#000000] w-1/4 rounded-lg rounded-l-none">
                <Text></Text>
              </View>
            </View>
            <View>
              <Text className="text-center text-xs">a few seconds ago</Text>
            </View>
          </View>
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Robin</Text>
          </View>
        </View>

        <View className="flex-row space-x-4">
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Hella</Text>
          </View>

          <View className="flex-1 pt-4 space-y-4">
            <View className=" flex-row">
              <View className="bg-[#C2D0F2] w-2/4 rounded-lg rounded-r-none px-1">
                <Text className="text-[#144CC7]">₹5</Text>
              </View>
              <View className="bg-[#FBDDC2] w-2/4 rounded-lg rounded-l-none px-1.5">
                <Text className="text-[#EF8D32] text-right">₹5</Text>
              </View>
            </View>
            <View>
              <Text className="text-center text-xs">a few seconds ago</Text>
            </View>
          </View>
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Robin+</Text>
          </View>
        </View>

        <View className="flex-row space-x-4">
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Hella</Text>
          </View>

          <View className="flex-1 pt-4 space-y-4">
            <View className=" flex-row">
              <View className="bg-[#C2D0F2] w-1/5 rounded-lg rounded-r-none px-1">
                <Text className="text-[#144CC7]">₹2</Text>
              </View>
              <View className="bg-[#FBDDC2] w-4/5 rounded-lg rounded-l-none px-1.5">
                <Text className="text-[#EF8D32] text-right">₹8</Text>
              </View>
            </View>
            <View>
              <Text className="text-center text-xs">a few seconds ago</Text>
            </View>
          </View>
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Robin+</Text>
          </View>
        </View>

        <View className="flex-row space-x-4">
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Hella</Text>
          </View>

          <View className="flex-1 pt-4 space-y-4">
            <View className=" flex-row">
              <View className="bg-[#C2D0F2] w-2/6 rounded-lg rounded-r-none px-1">
                <Text className="text-[#144CC7]">₹4</Text>
              </View>
              <View className="bg-[#FBDDC2] w-4/6 rounded-lg rounded-l-none px-1.5">
                <Text className="text-[#EF8D32] text-right">₹6</Text>
              </View>
            </View>
            <View>
              <Text className="text-center text-xs">a few seconds ago</Text>
            </View>
          </View>
          <View>
            <View className="rounded-full bg-[#000000] p-2">
              <User />
            </View>
            <Text className="text-center text-xs font-semibold">Robin+</Text>
          </View>
        </View>
      </View>
      <Pressable className="flex-row items-center rounded-lg border-2 justify-center py-2 space-x-2">
        <Text className="font-semibold">Show all</Text>
        <IconRender name="arrow-forward-outline" className="my-auto" />
      </Pressable>
    </View>
  );
}
