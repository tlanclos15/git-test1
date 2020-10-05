const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375   
    },
    {
        title: 'Grocery',
        budget: 110   
    },
    {
        title: 'Monthly Investment',
        budget: 25
    },
    {
        title: 'Gas',
        budget: 40   
    },
    {
        title: 'Monthly Savings Investment',
        budget: 110   
    },
    {
        title: 'Monthly Student Loans',
        budget: 250   
    },
]
};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});