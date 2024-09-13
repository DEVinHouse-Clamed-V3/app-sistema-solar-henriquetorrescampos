import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerAlign}>
        <View style={styles.headerContentRow}>
          <Text style={styles.headerText}>Vamos explorar</Text>
          <Image
            style={styles.logoBuzz}
            source={require("./assets/buzz.png")}
          ></Image>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1F2B45",
  },
  headerAlign: {
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    color: "#FFFEFD",
    fontSize: 30,
  },
  logoBuzz: {
    width: 140,
    height: 80,
  },
  headerContentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
