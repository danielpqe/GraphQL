'use strict'

const { graphql, buildSchema} = require ('graphql')

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const resolvers = {
    hello: () => {
        return 'Hola mundo'
    }
}

graphql(schema, '{ hello }', resolvers).then((data)=>{
    console.log(data)
});