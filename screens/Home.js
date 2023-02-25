import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getAllPost } from "../firebase/operation";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState();
  const isFocussed = useIsFocused();
  useEffect(() => {
    async function fetchData() {
      const data = await getAllPost();
      setPosts(data);
    }
    fetchData();
  }, [isFocussed]);

  return (
    <ScrollView>
      {posts &&
        posts.map((item, index) => <PostCard post={item} key={index} />)}

      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("Add");
        }}
      >
        <Text>Go to Add Screen</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
