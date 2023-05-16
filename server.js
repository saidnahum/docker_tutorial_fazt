import express from 'express';

const port = 4000;
const app = express();

app.get('/', (req, res) => {
   res.send('Hello world')
})

app.listen(port)
console.log(`Server run on port ${port}`)