import express from 'express';
import data from './data.js';

const app = express();
const port = 5000;

app.get('/products', (req, res) => {
    res.send(data.products)
});

app.get('/', (req, res) => {
    res.send('Server is running');

});

app.listen(port, () => {
    console.log(`istening to http://localhost:${port}`);
});
