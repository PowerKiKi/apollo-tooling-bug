import gql from 'graphql-tag';

const query = gql`
    query Test {
        foo(bar: 123) {
            login
            email
        }
    }
`;
