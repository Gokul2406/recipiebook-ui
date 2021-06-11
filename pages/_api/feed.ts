import axios from "axios"

const getFeed = async(token: string | null) => {
	const feedPost= await axios.post("http://localhost:4000/api/feed", {
		data: {
			token: token
		}
	})
	return feedPost
}

export default getFeed
