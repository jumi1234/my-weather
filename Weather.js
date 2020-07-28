import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "sun",
    gradient: ["#fceabb", "#f8b500"],
    title: "맑음",
  },
  Thunderstorm: {
    iconName: "cloud-lightning",
    gradient: ["#141e30", "#243b55"],
    title: "천둥번개",
  },
  Drizzle: {
    iconName: "cloud-drizzle",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "이슬비",
  },
  Rain: {
    iconName: "cloud-rain",
    gradient: ["#36d1dc", "#5b86e5"],
    title: "비",
  },
  Snow: {
    iconName: "cloud-snow",
    gradient: ["#8e9eab", "#eef2f3"],
    title: "눈",
  },
  Atmosphere: {
    iconName: "wind",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "흐림",
  },
  Clouds: {
    iconName: "cloud",
    gradient: ["#bbd2c5", "#536976"],
    title: "구름",
  },
}

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <Feather name={weatherOptions[condition].iconName} size={94} color="white" />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}></Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 33,
    fontWeight: "300",

  },
  subtitle: {
    color: "white",
    fontWeight: "600",
  }
});
