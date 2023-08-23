import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query {
    user {
      id
      username
      avatar
      dailies {
        id
        title
        description
        isCompleted
        resetDay
        createdAt
      }
      weeklies {
        id
        title
        description
        isCompleted
        resetDay
        createdAt
      }
    }
  }
`;
