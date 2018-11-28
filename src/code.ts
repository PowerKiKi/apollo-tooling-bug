import gql from 'graphql-tag';

const query1 = gql`
    query Test($bar: Int) {
        foo(bar: $bar) {
            login
            email
        }
    }
`;

const query2 = gql`
    query Second($bar: Int) {
        foo(bar: $bar) {
            login
        }
    }
`;
