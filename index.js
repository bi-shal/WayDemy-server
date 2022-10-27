var express = require('express');
const app = express();
var cors = require('cors')
app.use(cors());

const port = process.env.port || 5000;

//Data load json file
const allProductsCollection = require('./Data/Alldata.json')

app.get('/', (req,res) => {
    res.send('Now server is runing');
})

app.get('/all',(req,res) => {
    res.send(allProductsCollection)
})

app.get('/allnews/:id',(req,res) => {
    const id = req.params.id;
    const allCouress = allProductsCollection.find(n => n.category_id == id)
    res.send(allCouress)
})

app.get('/check/:id', (req,res) => {
    const id = req.params.id;
    const checked = allProductsCollection.find(a => a.id == id)
    res.send(checked)
})

app.listen(port,() => {
    console.log(`server is runing ${port}`);
})
