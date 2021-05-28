import React, {useEffect, useState} from "react"
import {useLazyQuery} from "@apollo/client"
import GET_RECIPIES from "../graphql/getAllRecipie"
import {Text, Heading} from "@chakra-ui/react"

const Feed: React.FC = () => {
	const [getAllRecipies, {data, loading, error}] = useLazyQuery(GET_RECIPIES)	
	useEffect(() => getAllRecipies(), [])
	if (loading) return <Text>Hello</Text>
	if (error) return <Text>Error</Text>
	data && console.log(data)
	return(
	<Heading>Welcome To Your Feed</Heading>	
	)
}

export default Feed
