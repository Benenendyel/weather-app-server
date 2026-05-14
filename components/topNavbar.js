import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function topNavBar() {
  return (
    <View style={styles.navigationBarContainer}>
      <View style={styles.leftSideNavigation}>
        <TouchableOpacity>
          <Image
            source={require("../assets/Images/burgerIcon.png")}
            style={styles.burgerIcon}
          ></Image>
        </TouchableOpacity>
      </View>

      <Text style={styles.placeWeatherName}>QUEZON CITY, PHILIPPINES</Text>
      <TouchableOpacity>
        <Image
          source={require("../assets/Images/searchIcon.png")}
          style={styles.searchIcon}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBarContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",

    paddingVertical: 20,
    paddingHorizontal: 20,

    zIndex: 10,
  },

  leftSideNavigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  placeWeatherName: {
    color: "#5D6D3E",
    fontSize: 16,
    fontWeight: "semibold",
    fontFamily: "Playfair-Bold",
    overflow: "hidden",
  },

  burgerIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
