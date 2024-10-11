import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenidos a Yummy!</Text>
      <Text style={styles.yummy}>Tu plataforma de entregas!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8207",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 36, // Tamaño de fuente grande
    fontWeight: "bold", // Texto en negrita
    color: "#ffffff", // Color blanco para contraste
    textAlign: "center", // Alineación centrada
    marginVertical: 20, // Espaciado vertical
    textShadowColor: "#000", // Sombra de texto
    textShadowOffset: { width: 1, height: 1 }, // Offset de sombra
    textShadowRadius: 10, // Radio de sombra
  },

  yummy: {
    fontSize: 16, // Tamaño de fuente grande
    fontWeight: "bold", // Texto en negrita
    color: "#ffffff", // Color blanco para contraste
    textAlign: "center", // Alineación centrada
    marginVertical: 10, // Espaciado vertical
    textShadowColor: "#000", // Sombra de texto
    textShadowOffset: { width: 1, height: 1 }, // Offset de sombra
    textShadowRadius: 5, // Radio de sombra
  },
});
