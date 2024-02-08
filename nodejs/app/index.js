const express = require('express');
const MySqlAdapter = require("./database/mysql");
const populate = require("./populate");
const app = express();
const port = 3000;

const db = new MySqlAdapter();
populate(db);

app.get('/', async (req, res) => {
  db.connect();
  const result = await db.select();
  db.close();

  const html = `<h1>Full Cycle Rocks!</h1>\n
  <ul>
    ${result.map(value => `<li>${value.name}</li>`).join('')}
  </ul>`

  res.send(html);
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
})