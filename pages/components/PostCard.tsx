import React from "react"
import {Box, Text} from "@chakra-ui/react"

interface PCProps {
  username: string;
  preparation: string;
  ingredients: string
}

const PostCard: React.FC<PCProps> = ({ username, preparation, ingredients }) => {
    return (
      <Box width="25vw" height="10vw" background="white"> 
        <Text>{username}</Text>
      </Box>
    )
}

export default PostCard
