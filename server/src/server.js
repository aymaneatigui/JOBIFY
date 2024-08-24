const expresse = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const postJob = require("./Routes/jobPosts");
const userRoute = require("./Routes/userRoute");
const appliRoute = require("./Routes/application");
const internRoute = require("./Routes/Internships");
const app = expresse();


app.disable('x-powered-by');
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});
app.use(expresse.json({ limit: '10mb' }));

app.use(cors(corsOption));

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

app.use(expresse.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use("/posts", postJob);
app.use("/users", userRoute);
app.use("/internships", internRoute);
app.use("/applications", appliRoute);
