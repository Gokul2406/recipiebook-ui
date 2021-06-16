import axios from "axios"

const createRecipie = async(title: string, ingredients: string, preparation: string, token: string) => {
    await axios.post('http://localhost:4000/api/recipie/create', {
        data: {
            title: title,
            ingredients: ingredients,
            preparation: preparation,
            token: token
        }
    }).then((res: any) => {
        console.log(res)
        if (res.data.status === "Success") {
            window.location.replace("http://localhost:3000/feed")
        }
    }).catch(err => {
        console.log(err)
    })
}

export default createRecipie
