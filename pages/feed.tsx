import React, {useEffect, useState} from "react"
import getFeed from "./_api/feed"
import PostCard from "./components/PostCard"

const Feed: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const [allowed, setAllowed] = useState<boolean>(false)

	useEffect(() => {
		const token = localStorage.getItem("accessToken")
		console.log(token)
		getFeed(token).then((res) => {
			if (res.status === 200 && res.data) {
				setLoading(false)
			} else {
				window.location.replace("http://localhost:3000")
			}
		})
	}, [])

	return(
		<>
		{loading === false && (
			<PostCard username="Gokul" ingredients="Nah" preparation="duh" />
		)}
		</>
	)
}

export default Feed
