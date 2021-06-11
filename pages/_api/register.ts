import axios from "axios";

const registerHandler = async(username: string, password: string, email: string) => {
  const postRequest = await axios.post('http://localhost:4000/api/users/create', {
    data: {
      username: username,
      password: password,
      email: email
    }
  }).then((resp: any) => {
	  if (resp.data.success) {
		window.location.replace("http://localhost:3000/feed")
		localStorage.setItem("accessToken", resp.data.accessToken)
	  }
  })
  .catch(err => console.log(err))
}

export default registerHandler;
