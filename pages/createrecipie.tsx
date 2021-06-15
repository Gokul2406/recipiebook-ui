
import React from "react";
import { Button ,FormLabel, Input, Textarea, Flex, Heading } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai"
//import createRecipie from "./_api/createRecipie"

interface CRState {
  username: string;
  preparation: string;
  ingredients: string;
  title: string;
}


export default class CreateRecipie extends React.Component<{}, CRState> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: "",
      preparation: "",
      ingredients: "",
      title: ""
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({preparation: e.target.value})
  }

  render() {

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
          <Input name="title" onChange={this.handleChange} type="text" placeHolder="Name" mb={3}/>
          <FormLabel>
            Ingriedients(Add a 'comma' after every ingriedient)
          </FormLabel>
          <Input onChange={this.handleChange} name="ingredients" type="text" placeHolder="Ingriedients" />
          <FormLabel mt={3}>Preparation</FormLabel>
        <Textarea name="preparation" onChange={() => this.handleTextAreaChange()} value={this.state.preparation} placeholder="Type your preparation here" />
        <Button leftIcon={<AiOutlinePlusCircle  />} colorScheme="yellow" mt={6}>Create Recipie</Button>
        </Flex>
        </Flex>
      </>
    );
  }
}
