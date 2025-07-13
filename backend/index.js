import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";

import 'dotenv/config'
// require('dotenv').config();
// console.log(process.env);

const app = express();
const port = process.env.PORT || 6001;

// middleware
app.use(cors());
app.use(express.json());


// aryasegara353
// Ra7yO7qqo4USftzh

// mongodb config

// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://aryasegara353:Ra7yO7qqo4USftzh@demo-foodie-cluster.3p5vya7.mongodb.net/?retryWrites=true&w=majority&appName=demo-foodie-cluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res) =>{
    res.send("Hello World");
})

app.listen(port,() =>{
    console.log(`Aplikasi Berhasil jalan di port ${port}`);
})



