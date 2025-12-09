import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";

export default function PredictionScreen() {
  const [homeGoals, setHomeGoals] = useState("");
  const [awayGoals, setAwayGoals] = useState("");
  const [formHome, setFormHome] = useState("");
  const [formAway, setFormAway] = useState("");
  const [oddsHome, setOddsHome] = useState("");
  const [oddsDraw, setOddsDraw] = useState("");
  const [oddsAway, setOddsAway] = useState("");
  const [prediction, setPrediction] = useState("");

  const predictMatch = () => {
    let score = "";

    if (oddsHome < oddsAway) score = "Ev sahibi avantajlı";
    else if (oddsAway < oddsHome) score = "Deplasman avantajlı";
    else score = "Berabere ihtimali yüksek";

    setPrediction(score);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>⚽ Maç Tahmin Uygulaması</Text>

      <View style={styles.box}>
        <Text style={styles.label}>Ev Sahibi Son 5 Maç (örn: 3-1-1)</Text>
        <TextInput style={styles.input} value={formHome} onChangeText={setFormHome} />

        <Text style={styles.label}>Deplasman Son 5 Maç</Text>
        <TextInput style={styles.input} value={formAway} onChangeText={setFormAway} />

        <Text style={styles.label}>Ev Sahibi Gol Ortalaması</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={homeGoals} onChangeText={setHomeGoals} />

        <Text style={styles.label}>Deplasman Gol Ortalaması</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={awayGoals} onChangeText={setAwayGoals} />

        <Text style={styles.label}>Ev Sahibi Oran</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={oddsHome} onChangeText={setOddsHome} />

        <Text style={styles.label}>Beraberlik Oran</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={oddsDraw} onChangeText={setOddsDraw} />

        <Text style={styles.label}>Deplasman Oran</Text>
        <TextInput style={styles.input} keyboardType="numeric" value={oddsAway} onChangeText={setOddsAway} />

        <Text style={styles.predictButton} onPress={predictMatch}>Tahmin Et</Text>
      </View>

      {prediction !== "" && (
        <Text style={styles.result}>📊 Tahmin: {prediction}</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#111" },
  title: { fontSize: 26, color: "white", fontWeight: "bold", marginBottom: 20 },
  box: { backgroundColor: "#222", padding: 15, borderRadius: 10 },
  label: { color: "#bbb", marginTop: 10 },
  input: {
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  predictButton: {
    backgroundColor: "#0a84ff",
    color: "white",
    padding: 12,
    textAlign: "center",
    marginTop: 20,
    borderRadius: 5,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontSize: 20,
    padding: 15,
    backgroundColor: "#0a0",
    borderRadius: 10,
  },
});
