import {ApolloProvider} from "@apollo/client"
import {ChakraProvider} from "@chakra-ui/react"
import client from "../apollo"

export default function App({ Component, pageProps }: any) {
	return (
		<ApolloProvider client={client}>
		<ChakraProvider >
			<Component {...pageProps} />
		</ChakraProvider>
		</ApolloProvider>
	)
}
