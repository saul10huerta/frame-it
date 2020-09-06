import gql from 'graphql-tag';

export const QUERY_USERS = gql`
    query {
        users {
            _id
            username
            firstName
            lastName
            email
            items {
                _id
                title
                image
                price
                quantity
                status
            }
        }
    }
`



export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            firstName
            lastName
            email
            items {
                _id
                title
                image
                price
                quantity
                status
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            firstName
            lastName
            email
            items {
                _id
                title
                image
                price
                quantity
                status
            }
        }
    }
`;

export const QUERY_ITEMS = gql`
    query {
        items {
            _id
            title
            image
            price
            quantity
            status
        }
    }
`;
