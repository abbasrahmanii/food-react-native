import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onSubmitTerm={() => console.log("term was submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
export default SearchScreen;
