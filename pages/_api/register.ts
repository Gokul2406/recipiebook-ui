import axios from "axios";

const registerHandler = async(username: string, password: string, email: string) => {
  const postRequest = await axios.post('http://localhost:4000/api/users/create', {
    data: {
      username: username,
      password: password,
      email: email
    }
  }).then(resp => console.log(resp.data))
  .catch(err => console.log(err))
}

export default registerHandler;
