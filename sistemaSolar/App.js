import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { planetas } from "./planetas";

export default function App() {
  function formatNum(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " m²";
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerContentRow}>
          <Text style={styles.headerText}>Vamos explorar</Text>

          <Image
            style={styles.logoBuzz}
            source={require("./assets/buzz.png")}
          ></Image>
        </View>

        <ScrollView>
          {planetas.map((planeta) => (
            <View style={styles.planet}>
              <Text style={styles.planetTitle}>{planeta.nome}</Text>
              <Image
                style={styles.planetImage}
                source={{
                  uri: planeta.img,
                }}
              ></Image>

              <View style={styles.planetSubject}>
                <View style={styles.planetRow}>
                  <Text style={styles.planetText1}>Average Orbital Speed</Text>
                  <Text style={styles.planetText2}>
                    {planeta.velocidadeOrbitalMediaKmS}
                  </Text>
                </View>
              </View>

              <View style={styles.planetSubject}>
                <View style={styles.planetRow}>
                  <Text style={styles.planetText1}>Satellites</Text>
                  <Text style={styles.planetText2}>
                    {planeta.quantidadeSatelites}
                  </Text>
                </View>
              </View>

              <View style={styles.planetSubject}>
                <View style={styles.planetRow}>
                  <Text style={styles.planetText1}>Surface Area</Text>
                  <Text style={styles.planetText2}>
                    {formatNum(planeta.areaSuperficieKm2)}
                  </Text>
                </View>
              </View>

              <View style={styles.planetSubject}>
                <View style={styles.planetRow}>
                  <Text style={styles.planetText1}>Rotation Period</Text>
                  <Text style={styles.planetText2}>
                    {planeta.periodoRotacaoDias}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#1F2B45",
    padding: 20,
    alignItems: "center",
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
    gap: 9,
    marginBottom: 15,
  },
  planet: {
    padding: 10,
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 15,
    marginBottom: 20,
  },
  planetTitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 35,
  },
  planetImage: {
    width: 380,
    height: 200,
    alignItems: "center",
  },
  planetSubject: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 5,
  },
  planetRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    alignItems: "center",
  },

  planetText1: {
    color: "#FFF",
    fontWeight: "300",
    fontSize: 16,
    flex: 1,
  },
  planetText2: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
  },
});
