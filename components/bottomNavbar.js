import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function bottomNavBar({ currentScreen, setCurrentScreen }) {
  return (
    <View style={styles.navigationBarContainer}>
      <TouchableOpacity
        style={[
          styles.navButton,
          currentScreen === "Home" && styles.navButtonActive,
        ]}
        activeOpacity={0.7}
        onPress={() => setCurrentScreen("Home")}
      >
        <Image
          style={[
            styles.navButtonIcon,
            currentScreen === "Home" && styles.activeIcon,
          ]}
          source={require("../assets/Images/sun.png")}
        />
        <Text
          style={[
            styles.buttonText,
            currentScreen === "Home" && styles.activeText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          currentScreen === "Outlook" && styles.navButtonActive,
        ]}
        activeOpacity={0.7}
        onPress={() => setCurrentScreen("Outlook")}
      >
        <Image
          style={[
            styles.navButtonIcon,
            currentScreen === "Outlook" && styles.activeIcon,
          ]}
          source={require("../assets/Images/calendar.png")}
        />
        <Text
          style={[
            styles.buttonText,
            currentScreen === "Outlook" && styles.activeText,
          ]}
        >
          Outlook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          currentScreen === "Saved" && styles.navButtonActive,
        ]}
        activeOpacity={0.7}
        onPress={() => setCurrentScreen("Saved")}
      >
        <Image
          style={[
            styles.navButtonIcon,
            currentScreen === "Saved" && styles.activeIcon,
          ]}
          source={require("../assets/Images/bookmark.png")}
        />
        <Text
          style={[
            styles.buttonText,
            currentScreen === "Saved" && styles.activeText,
          ]}
        >
          Saved
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          currentScreen === "Settings" && styles.navButtonActive,
        ]}
        activeOpacity={0.7}
        onPress={() => setCurrentScreen("Settings")}
      >
        <Image
          style={[
            styles.navButtonIcon,
            currentScreen === "Settings" && styles.activeIcon,
          ]}
          source={require("../assets/Images/gears.png")}
        />
        <Text
          style={[
            styles.buttonText,
            currentScreen === "Settings" && styles.activeText,
          ]}
        >
          Settings
        </Text>
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

    paddingVertical: 10,
    paddingHorizontal: 20,

    zIndex: 10,
  },

  navButton: {
    flex: 1,

    paddingHorizontal: 10,
    paddingVertical: 6,

    gap: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  navButtonIcon: {
    width: 20,
    height: 20,
  },

  buttonText: {
    color: "#4B3621",
    fontSize: 12,
    fontFamily: "Inter-Dynamic",
    fontWeight: 600,
  },

  navButtonActive: {
    backgroundColor: "#5D6D3E",
    borderRadius: 8,
  },

  activeIcon: {
    tintColor: "#fff",
  },

  activeText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Inter-Dynamic",
    fontWeight: 600,
  },
});
