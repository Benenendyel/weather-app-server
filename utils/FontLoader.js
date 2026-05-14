import { useFonts } from "expo-font";

export default function fontLoader() {
  // font loader
  const [loaded] = useFonts({
    // Playfair
    "Playfair-Regular": require("../assets/Fonts/PlayfairDisplay-Regular.ttf"),
    "Playfair-Bold": require("../assets/Fonts/PlayfairDisplay-Bold.ttf"),
    "Playfair-Medium": require("../assets/Fonts/PlayfairDisplay-Medium.ttf"),
    "Playfair-SemiBold-Italic": require("../assets/Fonts/PlayfairDisplay-SemiBoldItalic.ttf"),

    // Inter
    "Inter-Dynamic": require("../assets/Fonts/Inter-VariableFont_opsz,wght.ttf"),
    "Inter-Italic": require("../assets/Fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
  });

  return loaded;
}
