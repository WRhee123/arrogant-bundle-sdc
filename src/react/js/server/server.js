import { config } from 'dotenv';
config()

import express from 'express';
const app = express();
import cors from 'cors';
import './db/db.js';
//const routes = require('./routes/routes.js');
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

//app.use('/api', routes);

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../../public/dist/index.html'));
});

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something broke!')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {    
    console.log(`Server listening on port ${port}`);
});
