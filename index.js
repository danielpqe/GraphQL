'use strict'
require('dotenv').config()

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

//const schema = buildSchema(
const typeDefs = readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
)
const schema = makeExecutableSchema({typeDefs,resolvers})
  


// graphql(schema, '{ hello }', resolvers).then((data)=>{
//     console.log(data)
// });

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/`)
})
