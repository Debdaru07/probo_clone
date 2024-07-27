import { AppContext } from "@/context";
import React, { useContext, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";
import { SliderComponent } from "./Slider";
import ButtonSlider from "./ButtonSlider";
import SwipeButtonComponent from "./SwipeButtonComponent";

export const ModalView = () => {
  const { modalVisible, setModalVisible } = useContext(AppContext);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          className="flex-1 justify-end"
          style={styles.overlay}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalView} className="space-y-8">
            <View className="flex-row justify-between items-center">
              <Text className="font-semibold">
                Kolkata to win the match vs Mumbai?
              </Text>
              <Image
                source={require("../assets/images/tata-ipl-seeklogo.png")}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
            </View>
            <View className="my-4">
              <View className="shadow">
                <ButtonSlider />
              </View>
            </View>
            <View style={styles.content}>
              <View className="flex-row justify-between mb-2">
                <Text className="font-bold">Price</Text>
                <View className="space-y-1">
                  <Text className="font-bold text-right">₹ 5.3</Text>
                  <Text className="font-light text-xs">
                    132045 qty available
                  </Text>
                </View>
              </View>
              <View className="h-8 mb-4">
                <SliderComponent />
              </View>
              <View style={styles.divider} />

              <View className="flex-row justify-between p-2 pt-4">
                <View className="space-y-1.5">
                  <Text className="font-bold text-center">₹ 5.3</Text>
                  <Text className="text-center font-light text-xs">
                    You put
                  </Text>
                </View>
                <View className="space-y-1.5">
                  <Text className="text-[#009856] font-bold text-center">
                    ₹ 10
                  </Text>
                  <Text className="text-center font-light text-xs">
                    You get
                  </Text>
                </View>
              </View>
            </View>
            <SwipeButtonComponent />
            <View>
              <Text className="text-center font-light text-xs">
                Available Balance: 400.00
              </Text>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalView: {
    height: "55%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  divider: {
    height: 1,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#D0D5DD",
    marginLeft: 4,
    marginRight: 4,
  },
  content: {
    borderWidth: 1,
    borderColor: "#E6EAED",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
