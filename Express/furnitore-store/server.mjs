import express from "express"
const app = express();
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modeuls')))





app.get("/priceCheck/:name", (req, res) =>
{
    const requiredFurnitore = store.find(item => item.name === req.params.name);
    console.log("param:", req.params.name)
    res.json(requiredFurnitore)
})
app.get("/buy/:name", (req,res) =>
{
    const furnitoreName = req.params.name;
    console.log(furnitoreName)
    const requiredFurnitore = store.find(item => item.name === furnitoreName);
    requiredFurnitore.inventory -= 1;
    res.json(requiredFurnitore);
})
app.get("/sale", (req, res) =>
{
    const adminParam = req.query.admin;
    let newStore;
    if (adminParam === "true") {
    newStore = store.map(item => {
      if (item.inventory > 10) {
        return { ...item, price: item.price * 0.5 }; 
      }
    });
      res.send(newStore)

  }
  else
  {
    res.send(store);
  }
  
})
