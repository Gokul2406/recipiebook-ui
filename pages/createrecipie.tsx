
import React, { useState } from "react";
import { Button ,FormLabel, Input, Textarea, Flex, Heading } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import createRecipie from "./_api/createRecipie"


const initialState = {
  title: "",
  ingredients: ""
}


const CreateRecipie: React.FC = () => {

    const [state, setState] = useState(initialState)
    const [preparation, setPreparation] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setState({
        ...state,
        [name]: value
      })
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPreparation(e.target.value)
    }

    const handleSubmit = () => {
      const { title, ingredients } = state
      const token = localStorage.getItem("accessToken")
      createRecipie(title, ingredients, preparation, (token as string))

    }

    return (
      <>
        <Flex width="100vw" alignItems="center" justifyContent="center" p={12}>
        <Flex
          bg="blackAlpha.500"
          direction="column"
          width="25%"
          p={12}
          alignItems="center"
          justifyContent="center"
          height="auto"
        >
          <Heading>Create Recipie</Heading>
          <FormLabel mt={3}>Name of Dish </FormLabel>
          <Input onChange={handleChange} name="title" type="text" placeholder="Name" mb={3}/>
          <FormLabel>
            Ingriedients(Add a 'comma' after every ingriedient)
          </FormLabel>
          <Input onChange={handleChange} name="ingredients" type="text" placeholder="Ingriedients" />
          <FormLabel mt={3}>Preparation</FormLabel>
        <Textarea name="preparation" onChange={handleTextAreaChange} placeholder="Type your preparation here" />
        <Button onClick={handleSubmit} leftIcon={<AiOutlinePlusCircle  />} colorScheme="yellow" mt={6}>Create Recipie</Button>
        </Flex>
        </Flex>
      </>
    );
  }

export default CreateRecipie
