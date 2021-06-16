import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Avatar, makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
interface PCProps {
  username: string;
  preparation: string;
  ingredients: string;
  title: string;
}

const PostCard: React.FC<PCProps> = ({
  username,
  preparation,
  ingredients,
  title
}) => {
  const classes = useStyles()
  return (
    <Flex p={12} alignItems="center" width="100%" height="auto" justifyContent="center">
      <Box borderRadius="30px" p={5} width="25vw" height="auto" bg="blackAlpha.400">
        <Flex direction="row">
          <Avatar className={classes.purple}>{username[0]}</Avatar>
          <Text ml={3} fontWeight="extrabold" fontSize="20px">
            {username}
          </Text>
        </Flex>
      <Text mt={3} fontSize="2xl">Name</Text>
      <Text>{title}</Text>
	<Text mt={3} fontSize="2xl">Ingredients</Text>
        <Text>{ingredients}</Text>
	<Text mt={3} fontSize="2xl">Preparation</Text>
        <Text>{preparation}</Text>
      </Box>
    </Flex>
  );
};

export default PostCard;
