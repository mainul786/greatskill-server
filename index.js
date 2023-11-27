const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')


app.use(cors());

const courses = require('./data/course.json');
const topics = require('./data/topics.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get('/courses/:id', (req, res) =>{
  const id = req.params.id;
  console.log(id)
  const selectedCourses = courses.filter(c => c.category_id === id)
  res.send(selectedCourses);
  
})


app.get('/topic/:id', (req, res)=>{
  const id = req.params.id;
  const selectedId = topics.find(t => t.id === id)
  res.send(selectedId);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})