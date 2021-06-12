import React, { useEffect, useState } from "react";
import getFeed from "./_api/feed";
import PostCard from "../components/PostCard";
import {
  AppBar,
  CircularProgress,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Flex } from "@chakra-ui/react";
import {MenuOutlined} from "@material-ui/icons"

const Feed: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    getFeed(token).then((res) => {
      if (res.status === 200 && res.data) {
        setLoading(false);
      } else {
        window.location.replace("http://localhost:3000");
      }
    });
  }, []);

  return (
    <>
      {loading && (
        <Flex
          alignItems="center"
          width="100vw"
          height="100vh"
          justifyContent="center"
        >
          {loading && <CircularProgress color="secondary" />}
        </Flex>
      )}
      {loading === false && (
        <>
          <AppBar color="secondary" position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuOutlined />
              </IconButton>
              <Typography variant="h5">RecipieBook</Typography>
            </Toolbar>
          </AppBar>
          <Flex mt={15}>
            <PostCard username="Gokul" ingredients="Nah" preparation="duh" />
          </Flex>
        </>
      )}
    </>
  );
};

export default Feed;
