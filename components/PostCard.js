import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Box, HStack, VStack, Text } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

const PostCard = ({ post }) => {
  return (
    <Box
      height={460}
      width="92%"
      background="white"
      margin={4}
      shadow="2"
      borderRadius="md"
    >
      <VStack height="100%" width="100%">
        {/* Post Header */}
        <HStack height="10%" space={2} p={2}>
          <Box
            height={10}
            width={10}
            backgroundColor="gray.100"
            borderRadius="full"
          >
            <Text margin="auto" fontWeight="bold">
              {post.username[0]}
            </Text>
          </Box>
          <VStack>
            <Text fontWeight="bold">{post.username}</Text>
            <Text fontWeight="light" fontSize="xs">
              {post.location}
            </Text>
          </VStack>
        </HStack>
        {/* Post Image */}
        <Box height="80%" pt={3}>
          <Image
            source={{
              uri: post.url,
            }}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </Box>
        {/* Post Options */}
        <HStack height="10%" alignItems="center" justifyContent="space-between">
          <HStack space={6} pl={4}>
            <FontAwesome name="heart" size={24} color="#434343" />
            <FontAwesome5 name="comment" size={24} color="#434343" />
            <FontAwesome5 name="share" size={24} color="#434343" />
          </HStack>
          <Box pr={4}>
            <Ionicons name="bookmark-outline" size={24} color="#434343" />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
