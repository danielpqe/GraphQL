'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./resolvers/resolvers')

const app = express()
const port = process.env.port || 3000

const schema = buildSchema(
  readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
))


// graphql(schema, '{ hello }', resolvers).then((data)=>{
//     console.log(data)
// });

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log('Server running')
})
