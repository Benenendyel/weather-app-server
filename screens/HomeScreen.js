import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components fro homescreen
import WeatherCard from "../components/weatherCard";

export default function HomeScreen({ weather }) {
  if (!weather) return <Text>Loading...</Text>;

  const getCondition = (main) => {
    if (main === "Clouds") return "Cloudy";
    if (main === "Clear") return "Clear";
    if (main === "Rain") return "Rainy";
    if (main === "Thunderstorm") return "Thunderstorm";
    return "Clear";
  };

  const condition = getCondition(weather.weather[0].main);
  console.log(weather);

  return <WeatherCard condition={condition} temperature={weather.main.temp} />;
}

const styles = StyleSheet.create({});
