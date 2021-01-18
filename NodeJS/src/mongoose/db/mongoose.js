const mongoose = require("mongoose");

//connection to DB
mongoose.connect("mongodb://127.0.0.1:27017/quiz-app", {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
