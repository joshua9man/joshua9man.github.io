const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
res.send('Hello from Node.js!');
});
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});
app.get('/about', (req, res) => {
res.send('This API is created by Joshua!');
});

let restaurants = [
{ id: 1, name: "Pizza Palace", cuisine: "Italian", rating: 4.5 },
{ id: 2, name: "Sushi Central", cuisine: "Japanese", rating: 4.8 }
];
app.get('/restaurants', (req, res) => {
res.json(restaurants);
});

app.get('/restaurants/:id', (req, res) => {
const id = parseInt(req.params.id, 10);
const rest = restaurants.find(r => r.id === id);
if (!rest) {
return res.status(404).json({ error: "Restaurant not found" });
}
res.json(rest);
});
