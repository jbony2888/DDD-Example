// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const clientRoutes = require('./clientManagement/api/clientRoutes');

const app = express();
app.use(bodyParser.json());

// Use the API routes for client management.
app.use('/api/client', clientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server is listening on port \${PORT}\`));
