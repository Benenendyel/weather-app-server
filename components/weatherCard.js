import { StyleSheet, View, Text, Image } from "react-native";

export default function weatherCard({ condition, temperature }) {
  const backgrounds = {
    Cloudy: require("../assets/Images/Cloudy.png"),
    Clear: require("../assets/Images/Clear.png"),
    Rainy: require("../assets/Images/Rainy.png"),
    Thunderstorm: require("../assets/Images/Thunderstorm.png"),
  };

  return (
    <View style={styles.weatherCardContainer}>
      <Image source={backgrounds[condition]} style={styles.backgroundImage} />
      <View style={styles.weatherLabelContainer}>
        <Text style={styles.headerLabel}>CURRENT CONDITIONS</Text>
        <View style={styles.temperatureContainer}>
          <Text style={styles.weatherTemperature}>{temperature}</Text>
          <Text style={styles.temperatureSymbol}>°C</Text>
        </View>
        <View style={styles.weatherConditionContainer}>
          <Text style={styles.weatherConditionLabel}>{condition} Weather</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherCardContainer: {
    height: 337,
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },

  weatherLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  headerLabel: {
    color: "#4B3621",
    fontSize: 12,
    fontFamily: "Inter-Dynamic",
    fontWeight: 600,
  },

  temperatureContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  weatherTemperature: {
    color: "#5D6D3E",
    fontSize: 128,
    fontFamily: "Playfair-Medium",
    lineHeight: 128,
  },

  temperatureSymbol: {
    color: "#5D6D3E",
    fontSize: 40,
    fontFamily: "Inter-Dynamic",
    paddingBottom: 100,
  },

  weatherConditionContainer: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: "rgba(253, 252, 251, 0.5)",
    borderRadius: 8,
  },

  weatherConditionLabel: {
    color: "#5D6D3E",
    fontFamily: "Inter-Italic",
    fontWeight: 600,
  },
});
