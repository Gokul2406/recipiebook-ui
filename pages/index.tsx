import {
  Heading,
  Flex,
  Input,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

const IndexPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Flex height="100vh">
      <Flex alignItems="center" justifyContent="center" width="50vw">
        <Heading>Hello</Heading>
      </Flex>
      <Flex
        width="50vw"
        background="whiteAlpha.50"
        direction="column"
        p={12}
        alignItems="center"
        justifyContent="center"
        ml={6}
      >
        <Heading mb={25}>Log In</Heading>
        <FormLabel>Username</FormLabel>
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          size="md"
          placeholder="Username"
          mb={3}
        />
        <FormLabel mt={3}>Password</FormLabel>
        <Input
          size="md"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Password"
        />
        <Button
          size="lg"
          colorScheme="blue"
          color="black"
          mt={3}
        >
          Log In
        </Button>
        <Text mt={3}>
          No Account Setup one <Link href="/register">here</Link>{" "}
        </Text>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
