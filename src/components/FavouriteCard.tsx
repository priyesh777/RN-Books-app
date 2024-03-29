import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import BookDetail from "../types/bookDetail";

/* This component is used as a reusable component for listing the Book collections in Card component */

interface FavoriteCardProps {
  id: string;
  book: BookDetail;
  //navigation: any;
}

export default function FavoriteCard({ id, book }: FavoriteCardProps) {
  const { booksName, image, genre, description } = book;
  return (
    <TouchableOpacity
      key={booksName}
      style={[styles.container, { backgroundColor: "#E1F4CB" }]}
      //onPress={() => navigation.navigate('Detail', { data, index: id })}
    >
      <View key={booksName} style={styles.row}>
        <View>
          <Text
            style={[
              styles.firstRowText,
              { alignSelf: "flex-start", fontWeight: "normal" },
            ]}
          >
            {id}
          </Text>
          <Text
            style={[
              styles.firstRowText,
              { alignSelf: "flex-start", fontSize: 30 },
            ]}
          >
            {booksName}
          </Text>
          <Text
            style={[
              styles.firstRowText,
              {
                alignSelf: "flex-start",
                fontWeight: "normal",
                backgroundColor: "#BACBA9",
                padding: 5,
                borderRadius: 5,
                overflow: "hidden",
              },
            ]}
          >
            {genre[0]}
          </Text>
          <Text
            style={[
              styles.firstRowText,
              { alignSelf: "flex-start", fontWeight: "normal", marginTop: 10 },
            ]}
          >
            {description}
          </Text>
        </View>

        {/* <Image
          style={{
            width: 150,
            height: 150,
            alignSelf: "flex-end",
            marginLeft: 10,
          }}
          source={image}
        /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: "space-around",
  },

  row: {
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-between",
    width: "90%",
  },

  typeSection: {
    flex: 1 / 2,
    borderRadius: 20,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  firstRowText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
});
