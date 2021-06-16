import React from "react";
import {Heading, Flex, Button, Link} from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg"
import { BiFoodMenu } from "react-icons/bi"

export default class Navbar extends React.Component {
    render() {
        return (
            <Flex alignItems="stretch" justifyContent="space-between" background="#fc177a" p={5} width="100vw" height="auto">
                <Heading>RecipieBook</Heading>
                <Link href="http://localhost:3000/me">
                <Button leftIcon={<CgProfile />} colorScheme="pink" variant="ghost" color="white">Profile</Button>
                </Link>
                <Link href="http://localhost:3000/createrecipie"><Button colorScheme="pink" variant="ghost" color="white" leftIcon={<BiFoodMenu />}>Create Recipies</Button></Link>
            </Flex>
        )
    }
}
