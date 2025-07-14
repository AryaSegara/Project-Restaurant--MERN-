import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

import "dotenv/config";
// require('dotenv').config();
// console.log(process.env);

const app = express();
const port = process.env.PORT || 6001;

// middleware
app.use(cors());
app.use(express.json());

// mongodb config

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@demo-foodie-cluster.3p5vya7.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodie-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    // database & collections
    const menuCollections = client.db("demo-foodie-db").collection("menus");
    const cartCollections = client.db("demo-foodie-db").collection("cartItems");

    // all menu item operations
    app.get('/menu', async(req,res) =>{
      const result = await menuCollections.find().toArray();
    })

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Aplikasi Berhasil jalan di port ${port}`);
});
