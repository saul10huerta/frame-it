import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        addUser(username: $username, email:$email, password: $password, firstName: $firstName, lastName: $lastName) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const ADD_ITEM = gql`
    mutation addItem($title: String!, $image: String!, $price: Int, $quantity: Int, $status: String) {
        addItem(title: $title, image: $image, price: $price, quantity: $quantity, status: $status) {
            _id
            title
            image
            price
            quantity
            status
        }
    }
`;

export const REMOVE_ITEM = gql`
    mutation removeItem($_id: ID!) {
        removeItem(_id: $_id) {
            username
            items {
                _id
                title
            }
        }
    }
`;