import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Avatar } from "@material-ui/core";

interface PCProps {
  username: string;
  preparation: string;
  ingredients: string;
}

const PostCard: React.FC<PCProps> = ({
  username,
  preparation,
  ingredients,
}) => {
  return (
    <Flex p={12} alignItems="center" width="100%" height="auto" justifyContent="center">
      <Box borderRadius="30px" p={5} width="25vw" height="auto" bg="blackAlpha.400">
        <Flex direction="row">
          <Avatar>{username[0]}</Avatar>
          <Text ml={3} fontWeight="extrabold" fontSize="25px">
            {username}
          </Text>
        </Flex>
	<Text mt={3} fontSize="2xl">Ingredients</Text>
        <Text>{ingredients}</Text>
	<Text mt={3} fontSize="2xl">Preparation</Text>
        <Text>{preparation}</Text>
      </Box>
    </Flex>
  );
};

export default PostCard;
