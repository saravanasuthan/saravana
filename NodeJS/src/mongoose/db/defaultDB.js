const mongoose = require("mongoose");
const Question = require("../models/questions");
require("./mongoose");

const questionOneObjectID = new mongoose.Types.ObjectId();

const questionOne = {
  _id: questionOneObjectID,
  question: "You can install node packages using ___",
  option1: "npm",
  option2: "npv",
  option3: "npx",
  option4: "mpn",
  answer: "option1",
};

const questionTwoObjectID = new mongoose.Types.ObjectId();

const questionTwo = {
  _id: questionTwoObjectID,
  question: "How to make modules in Node.js to avail externally?",
  option1: "module.shares",
  option2: "module.exports",
  option3: "module.expose",
  option4: "module.spread",
  answer: "option2",
};

const questionThreeObjectID = new mongoose.Types.ObjectId();

const questionThree = {
  _id: questionThreeObjectID,
  question:
    "Which of the following npm package can be used to do manupulations in the console?",
  option1: "validator",
  option2: "node.js_terminal",
  option3: "conminal",
  option4: "chalk",
  answer: "option4",
};

const questionFourObjectID = new mongoose.Types.ObjectId();

const questionFour = {
  _id: questionFourObjectID,
  question: "Which of the following is not a default Node.js module?",
  option1: "fs",
  option2: "https",
  option3: "validator",
  option4: "http",
  answer: "option3",
};

const questionFiveObjectID = new mongoose.Types.ObjectId();

const questionFive = {
  _id: questionFiveObjectID,
  question: "Node.js is a ________ by default",
  option1: "Synchronous",
  option2: "Multi-threaded",
  option3: "Asynchronous",
  option4: "None of the above",
  answer: "option3",
};

const setUpDataBase = async () => {
  await Question.deleteMany();
  await new Question(questionOne).save();
  await new Question(questionTwo).save();
  await new Question(questionThree).save();
  await new Question(questionFour).save();
  await new Question(questionFive).save();
  await mongoose.disconnect();
};

setUpDataBase();
