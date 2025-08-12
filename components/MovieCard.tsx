import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  overview,
  vote_average,
  release_date,
}: any) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://via.placeholder.com/150",
          }}
          className="w-full h-52 rounded-lg mb-2"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>{title}</Text>
        <View className="flex-row text-white items-center justify-start gap-x-1">
            <Image source={icons.star} className="size-4" />
            <Text className="text-xs font-bold uppercase">{Math.round(vote_average/2)}</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium nt-1">{release_date?.split("-")[0]}</Text>
          
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
