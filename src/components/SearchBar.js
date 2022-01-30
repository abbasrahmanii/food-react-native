import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeTerm, onSubmitTerm }) => {
  return (
    <View style={styles.backgoundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onSubmitTerm}
      />
      <Button title=">" onPress={onSubmitTerm} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgoundStyle: {
    marginTop: 15,
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
