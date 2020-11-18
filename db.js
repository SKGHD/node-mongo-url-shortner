import mongoose from "mongoose";

const url = `mongodb+srv://skghd:LFTDdcsWYlI7eVlw@cluster0.u0gdz.mongodb.net/urlshortner?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
