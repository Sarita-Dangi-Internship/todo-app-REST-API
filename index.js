const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const apiRoutes = require("./api/routes/todo");

app.use(express.urlencoded({ extented: true }));
app.use(express.json());

//connect to mongoose
mongoose
  .connect(`mongodb://localhost:27017/todoAPI`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

let db = mongoose.connection;

if (!db)
console.log("Error in connecting db");
else
console.log("DB connected");

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Welcome to REST API'));

app.use("/api/todos", apiRoutes);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});

