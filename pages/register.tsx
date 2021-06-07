import React from "react"
import {Flex, Button, FormLabel, Heading, Input} from "@chakra-ui/react"
import registerHandler from "./_api/register"

const Register: React.FC = () => {
	const [username, setUsername] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [email, setEmail] = React.useState("")

	return(
		<Flex height="100vh" alignItems="center" justifyContent="center">
			<Heading width="50vw">Register</Heading>
			<Flex background="gray.600" p={12} direction="column">
			<FormLabel>Username</FormLabel>
			<Input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
			<FormLabel mt={3}>Email</FormLabel>
			<Input type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
			<FormLabel mt={3}>Password</FormLabel>
			<Input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
			<Button mt={3} colorScheme="teal" onClick={() => registerHandler(username, password, email)}>Register</Button>
			</Flex>
		</Flex>
	)
}

export default Register
