import express from 'express';
import { v4 } from 'uuid';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
   res.json({
      id: v4()
   })
})

app.listen(port)
console.log(`Server run on port ${port}`)