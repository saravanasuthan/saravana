const express = require("express");
const Question = require("../mongoose/models/questions");

const userRouter = new express.Router();


//user viewing all the questions of a particular topic
userRouter.get("/users/questions/view", async (req, res) => {
    try {
        const questions = await Question.find();
        res.send(questions);

    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

//user getting his score
userRouter.post("/users/questions/getScore", async (req, res) => {
    try {
        const answers = req.body;
        let total = 0;
        await answers.forEach(async (curr_answer) => {
            const question = await Question.findById(curr_answer._id);
            if (question.answer === curr_answer.answer) {
                total = total + 1;
            }
        });
        const no_of_questions = (await Question.find()).length;
        setTimeout(() => {
            const percentage = (total / no_of_questions) * 100;
            res.send({ percentage });
        }, 200);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

module.exports = userRouter;

