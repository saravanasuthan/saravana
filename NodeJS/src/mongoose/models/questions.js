const mongoose = require("mongoose");

//set validations for the fields as given in the instruction file

const questions_schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

questions_schema.methods.toJSON = function () {
  const question = this;
  const questionObject = question.toObject();
  delete questionObject.answer;
  delete questionObject.__v;
  return questionObject;
};

const Question = mongoose.model("Question", questions_schema);

module.exports = Question;
