import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Box, Button, Input, Text } from "native-base";
import { addPost } from "../firebase/operation";

const Add = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [userlocation, setLocation] = useState("");
  const [userURL, setURL] = useState("");

  const handleSubmit = () => {
    const data = {
      username: username,
      location: userlocation,
      url: userURL,
    };
    const response = addPost(data);

    if (response != "") {
      setUsername("");
      setLocation("");
      setURL("");
      navigation.navigate("Home");
    }
  };

  return (
    <Box p={5} justifyContent="center" flex={1}>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
        borderRadius={5}
        borderColor="#ccc"
        borderWidth={1}
        p={3}
        mb={8}
        height={50}
        bg="#fff"
      />

      <Input
        placeholder="User Location"
        value={userlocation}
        onChangeText={setLocation}
        placeholderTextColor="#aaa"
        borderRadius={5}
        borderColor="#ccc"
        borderWidth={1}
        p={3}
        mb={8}
        height={50}
        bg="#fff"
      />
      <Input
        placeholder="Post URL"
        value={userURL}
        onChangeText={setURL}
        placeholderTextColor="#aaa"
        borderRadius={5}
        borderColor="#ccc"
        borderWidth={1}
        p={3}
        mb={8}
        height={50}
        bg="#fff"
      />

      <Button bg="blue.400" borderRadius={5} height={50} onPress={handleSubmit}>
        <Text color="#fff" fontWeight="bold">
          Post
        </Text>
      </Button>
    </Box>
  );
};

export default Add;

const styles = StyleSheet.create({});
