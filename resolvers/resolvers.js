'use strict'

const connectDB = require('../lib/db')

module.exports =
{
  Query: {
    getCourses: async () => {
      let db
      let courses = []
      try {
        db = await connectDB()
        courses = await db.collection('courses').find().toArray()
        console.log('Courses', courses)
      } catch (error) {
        console.log(error)
      }

      return courses
    },
    getCourse: (root, args) => {
      const course = Courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}

