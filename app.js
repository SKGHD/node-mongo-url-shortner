import express from "express";

const app = express();

const PORT = 1337;

app.use(express.json());

app.get("/", (request, response) => response.send("Hello from Homepage"));

app.get("/short", (req, res) => res.send("You have reached Short route"));

// Listening for incoming requests
app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
