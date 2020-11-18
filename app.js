import express from "express";
import mongoose from "mongoose";

// importing database schema model
import ShortURL from "./models/url.js";
const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// routes
app.get("/", async (req, res) => {
  const allData = await ShortURL.find({}, { _id: 0 });
  res.render("index", {
    shortUrls: allData,
  });
});

app.post("/short", async (req, res) => {
  // Grabbing fullUrl from req.body
  const url = req.body.fullUrl;
  const record = new ShortURL({
    full: url,
  });
  await record.save();
  res.redirect("/");
});

// shortid request route

app.get("/:shortid", async (req, res) => {
  // grabbing data from req
  const shortid = req.params.shortid;
  // finding the document
  const data = await ShortURL.findOne({ short: shortid });

  if (!data) {
    return res.sendStatus(404);
  }
  // update clicks if data is not null
  data.clicks++;
  // save the data to db
  await data.save();
  // redirect user to original link
  res.redirect(data.full);
});

// database connection

const driverUrl = process.env.MONGODB_KEY;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(driverUrl, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// Listening for incoming requests on successful connection to MongoAtlas
mongoose.connection.on("open", () => {
  app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));
});
