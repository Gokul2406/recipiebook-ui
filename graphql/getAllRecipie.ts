import { gql } from "@apollo/client";

const GET_RECIPIES = gql`
  query getAllRecipies {
    getAllRecipies {
      id
      uploadedBy
      title
      ingreidients
      preparation
    }
  }
`;
export default GET_RECIPIES;
