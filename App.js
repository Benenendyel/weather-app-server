import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Screens
import HomeScreen from "./screens/HomeScreen";
import OutlookScreen from "./screens/OutlookScreen";
import SavedScreen from "./screens/SavedScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Navigation Components
import TopNavBar from "./components/topNavbar";
import BottomNavBar from "./components/bottomNavbar";

// utils
import fontLoader from "./utils/FontLoader";
import { ScrollView } from "react-native";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [weather, setWeather] = useState(null);
  const loaded = fontLoader();

  useEffect(() => {
    fetch(
      `https://weather-app-server-ehth.onrender.com/api/weather?cityName=Manila`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather data:", data);
        setWeather(data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TopNavBar />

        <ScrollView style={styles.content}>
          {currentScreen === "Home" && <HomeScreen weather={weather} />}
          {currentScreen === "Outlook" && <OutlookScreen />}
          {currentScreen === "Saved" && <SavedScreen />}
          {currentScreen === "Settings" && <SettingsScreen />}
        </ScrollView>

        <BottomNavBar
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 20,
  },
});
