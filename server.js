import app from './app.js';
// ENV
const PORT = process.env.PORT;

// Test Route
app.get('/', (req, res) => res.send('Server Running Successfully!'));

app.listen(PORT, () => console.log(`Server running on PORT :-> ${PORT}`));
