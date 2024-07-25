import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const Subtitle = ({ texto }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Text style={{ ...styles.text, color: colors.color }}>
      {texto}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
});

export default Subtitle;
