import axios from "axios"

const loginHandler = async(username: string, password: string) => {
	await axios.post("http://localhost:4000/api/users/login", {
		data: {
			username: username,
			psd: password
		}
	}).then((resp: any) => {
		console.log(resp.data)
		if(resp.data.loggedIn === true) {
			localStorage.setItem("accessToken", resp.data.refreshToken)
			window.location.replace("http://localhost:3000/feed")
		}
	})
}

export default loginHandler
