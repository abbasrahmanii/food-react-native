import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = () => {
  const {
    params: { id },
  } = useRoute();

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const { data } = await yelp.get(`/${id}`);
      setResult(data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return <Text>Loading ... </Text>;
  }

  return (
    <View>
      <Text>{result.name} </Text>
      <FlatList
        keyExtractor={(photo) => photo}
        data={result.photos}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
  },
});

export default ResultsShowScreen;
