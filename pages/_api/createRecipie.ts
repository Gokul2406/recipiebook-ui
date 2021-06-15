import axios from "axios"

const createRecipie = async(title: string, ingredients: string, createdBy: string, preparation: string) => {
    await axios.post('http://localhost:4000/api/create', {
        data: {
            title: title,
            ingredients: ingredients,
            createdBy: createdBy,
            preparation: preparation
        }
    }).then((res: any) => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

export default createRecipie
