import React from "react"
import {Box, Text} from "@chakra-ui/react"

interface PCProps {
  username: string;
  preparation: string;
  ingredients: string
}

const PostCard: React.FC<PCProps> = ({ username, preparation, ingredients }) => {
    return (
      <Box>
        <Text>{username}</Text>
      </Box>
    )
}

export default PostCard
