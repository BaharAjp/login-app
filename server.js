const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


const publicPath = path.resolve(__dirname, 'public');
console.log("Current working directory:", __dirname);
console.log("Static files should be served from:", publicPath);


// Serve the index.html when the root route is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(express.static(publicPath));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
