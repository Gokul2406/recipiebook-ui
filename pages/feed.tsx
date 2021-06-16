import React, { useEffect, useState } from "react";
import getFeed from "./_api/feed";
import PostCard from "../components/PostCard";
import {
  CircularProgress,
} from "@material-ui/core";
import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar"

interface Post {
  title: string;
  ingredient: string;
  uploadedBy: string;
  id: number
  preparation: string;
}


const Feed: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [postData, setPostData] = useState<Array<Object>>([{}])

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    getFeed(token).then((res) => {
      if (res.status === 200 && res.data) {
        console.log(res)
        setPostData(res.data.post)
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
          </Flex>
          {postData.reverse().map((s: Post) => (
          <Flex mt={15}>
            <PostCard key={s.id} title={s.title} username={s.uploadedBy} ingredients={s.ingredient} preparation={s.preparation} />
          </Flex>
          ))}
        </>
      )}
    </>
  );
};

export default Feed;
