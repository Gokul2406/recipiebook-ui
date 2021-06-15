import React, { useEffect, useState } from "react";
import getFeed from "./_api/feed";
import PostCard from "../components/PostCard";
import {
  CircularProgress,
} from "@material-ui/core";
import { Flex, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar"

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
          <Navbar />
          <Flex width="100%" p={4} height="auto" alignItems="center" justifyContent="center">
          <Flex borderRadius={30} backgroundColor="blackAlpha.500" p={5}>
          <Link href="http://localhost:3000/createrecipie">Create Recipies</Link>
          </Flex>
          </Flex>
          <Flex mt={15}>
            <PostCard username="Gokul" ingredients="Nah" preparation="duh" />
          </Flex>
        </>
      )}
    </>
  );
};

export default Feed;
