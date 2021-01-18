const request = require("supertest");
const app = require("../src/app");
const { setUpDataBase, questions } = require("./utils/testDB");
const mongoose = require("mongoose");
const Question = require("../src/mongoose/models/questions");

beforeEach(setUpDataBase);

afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});

//user getting questions based on the technology
test("User getting all the question of a particular quiz node.js", async () => {
  const response = await request(app)
    .get("/users/questions/view")
    .expect(200);
  expect(response.body.length).toBe(5);
  const questions = await Question.find();
  expect(response.body[0].question).toBe(questions[0].question);
  expect(response.body[0].question).toBe(questions[0].question);
  expect(response.body[2].question).toBe(questions[2].question);
  expect(response.body[2].question).toBe(questions[2].question);
  expect(response.body[4].question).toBe(questions[4].question);
  expect(response.body[4].question).toBe(questions[4].question);
});

//user getting scores
test("User getting his scores", async () => {
  const response = await request(app)
    .post("/users/questions/getScore")
    .send([
      {
        _id: questions[0]._id,
        answer: "option1",
      },
      {
        _id: questions[1]._id,
        answer: "option2",
      },
      {
        _id: questions[2]._id,
        answer: "option4",
      },
      {
        _id: questions[3]._id,
        answer: "option2",
      },
      {
        _id: questions[4]._id,
        answer: "option3",
      }
    ])
    .expect(200);
  expect(response.body).toMatchObject({
    percentage: 80,
  });
});

//user getting scores
test("User getting his scores", async () => {
  const response = await request(app)
    .post("/users/questions/getScore")
    .send([
      {
        _id: questions[0]._id,
        answer: "option1",
      },
      {
        _id: questions[1]._id,
        answer: "option2",
      },
      {
        _id: questions[2]._id,
        answer: "option4",
      },
      {
        _id: questions[3]._id,
        answer: "option3",
      },
      {
        _id: questions[4]._id,
        answer: "option3",
      }
    ])
    .expect(200);
  expect(response.body).toMatchObject({
    percentage: 100,
  });
});

//user getting scores
test("User getting his scores", async () => {
  const response = await request(app)
    .post("/users/questions/getScore")
    .send([
      {
        _id: questions[0]._id,
        answer: "option2",
      },
      {
        _id: questions[1]._id,
        answer: "option3",
      },
      {
        _id: questions[2]._id,
        answer: "option1",
      },
      {
        _id: questions[3]._id,
        answer: "option1",
      },
      {
        _id: questions[4]._id,
        answer: "option2",
      }
    ])
    .expect(200);
  expect(response.body).toMatchObject({
    percentage: 0,
  });
});

//user getting scores
test("User getting his scores", async () => {
  const response = await request(app)
    .post("/users/questions/getScore")
    .send([
      {
        _id: questions[0]._id,
        answer: "option2",
      },
      {
        _id: questions[1]._id,
        answer: "option2",
      },
      {
        _id: questions[2]._id,
        answer: "option1",
      },
      {
        _id: questions[3]._id,
        answer: "option3",
      },
      {
        _id: questions[4]._id,
        answer: "option4",
      }
    ])
    .expect(200);
  expect(response.body).toMatchObject({
    percentage: 40,
  });
});