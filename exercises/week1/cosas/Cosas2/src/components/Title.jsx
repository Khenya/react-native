import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

const Title = ({ texto }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Text style={{ ...styles.text, color: colors.color }}>
      {texto}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
});

export default Title;
