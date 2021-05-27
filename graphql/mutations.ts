import {gql} from "@apollo/client"

const LOGIN_MUTATION = gql`
	mutation login($username: String!, $password: String!) {
		login(options: {username: $username, password: $password}) {
			errors {
				field
				message
			}
			data {
				id
				username
				email
			}
		}
	}
`

export default LOGIN_MUTATION
