import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder?: string;
  onPress: () => void;
}
const SearchBar = ({ placeholder, onPress }: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        value=""
        onChange={() => {}}
        className="flex-1 ml-2 text-white"
        placeholderTextColor={"#a8b5db"}
        placeholder={placeholder}
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
