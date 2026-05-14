import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components fro homescreen
import WeatherCard from "../components/weatherCard";

export default function HomeScreen({ CONDITION, TEMP }) {
  return <WeatherCard condition={CONDITION} temperature={TEMP} />;
}

const styles = StyleSheet.create({});
