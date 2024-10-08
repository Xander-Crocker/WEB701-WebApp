import { MongoClient, ServerApiVersion } from "mongodb";

// requires change to empty string and import the .env file (not working)
const uri = process.env.ATLAS_URI || "mongodb+srv://xandercrocker:Password1@web701.ajrfj5p.mongodb.net/?retryWrites=true&w=majority&appName=WEB701";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
    } catch(err) {
        console.error(err);
}

let db = client.db("employees");

export default db;