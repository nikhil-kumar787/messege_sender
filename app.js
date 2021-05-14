const express = require('express');
const app = express();
const env = require('dotenv');
const fast2sms = require('fast-two-sms');

env.config();
const PORT = process.env.PORT;

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) =>{
    res.render('index.ejs')
})

app.post('/sendMessage', async (req, res) =>{
  const response = await fast2sms.sendMessage({authorization : process.env.API_KEY , message : req.body.message ,  numbers : [req.body.number]});
  res.send(response);
})

app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`);
})