'use strict'

const courses = [
    {
    _id: 'ID',
    title: 'Titulo',
    teacher: 'Teacher',
    description: 'Description',
    topic: 'Programacion'
    },
    {
    _id: 'ID',
    title: 'Titulo2',
    teacher: 'Teacher',
    description: 'Description',
    topic: 'Programacion'
    },
    {
    _id: 'ID',
    title: 'Titulo3',
    teacher: 'Teacher',
    description: 'Description',
    topic: 'Programacion'
    },
]

module.exports = 
{
    getCourses: () => {
      return courses
    }
  }

