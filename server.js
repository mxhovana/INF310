const express = require('express');

const app = express();

app.get('/api/destinations', (req, res) => {
    const destinations = [
        {id: 1, City: 'Paris', Country: ',France'},
        {id: 2, City: 'Sofia', Country: ',Bulgaria'},
        {id: 3, City: 'Athens', Country: ',Greece'}
    ];

    res.json(destinations)
});
       
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));