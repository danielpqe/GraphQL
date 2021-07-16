'use strict'
const { MongoClient } = require('mongodb')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://danielpqe:112358@cluster0.ugab8.mongodb.net/test?retryWrites=true&w=majority`
//const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
let connection 

async function connectDB () {
    if (connection) return connection

    let  client
    try {
       // const client = new mongoC
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true
        })
        connection = client.db('Test')
    } catch (error) {
        console.log('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }

    return connection
}

module.exports = connectDB