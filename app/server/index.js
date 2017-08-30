import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import { join } from 'path';
import renderView from '../render';

const app = express();
const PORT = process.env.PORT || 8080;

// General Middle Ware inventory
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static Routes
// app.use(express.static(join(__dirname, '../../dist')));

app.get('*', (req, res) => {
  res.send(renderView());
});

app.listen(PORT, () => {
  console.log(`Server started and listening on port: ${PORT}. Run and keep process "yarn
    dev:wds" running in seperate terminal`);
});
