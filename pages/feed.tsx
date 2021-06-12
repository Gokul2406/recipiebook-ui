import React, { useEffect, useState } from "react";
import getFeed from "./_api/feed";
import PostCard from "./components/PostCard";
import { CircularProgress } from "@material-ui/core";
import { Flex } from "@chakra-ui/react";

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
      <Flex alignItems="center" width="100vw" height="100vh" justifyContent="center">{loading && <CircularProgress color="secondary" />}</Flex>
      {loading === false && (
        <PostCard username="Gokul" ingredients="Nah" preparation="duh" />
      )}
    </>
  );
};

export default Feed;
