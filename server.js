import express from 'express';

const app = express();


app.get('/', (req, res) => { res.send("Server is ready") });
app.get('/love', (req, res) => { res.send("love ure self") });
app.get('/login', (req, res) => { res.send("login") });
app.get('/instagram', (req, res) => { res.send('<h1>hi janvi howre you?</h1>') });
// Endpoint to get a list of five fruits
app.get('/fruits', (req, res) => {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    res.json(fruits); // Send the list of fruits as a JSON response
});

// Define the port
const port = process.env.PORT || 3001;

// Start the server
app.listen(port, () => {
    console.log(`example app listening on port ${port}!`);
});
