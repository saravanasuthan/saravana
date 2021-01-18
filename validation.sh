# !/bin/sh
# copy required files
cd
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/score.sh Desktop/Project/wings-reactnode-quizapp/
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/NodeJS/test/user.test.js Desktop/Project/wings-reactnode-quizapp/NodeJS/test/user.test.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/NodeJS/test/utils/testDB.js Desktop/Project/wings-reactnode-quizapp/NodeJS/test/utils/testDB.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/NodeJS/src/mongoose/db/defaultDB.js Desktop/Project/wings-reactnode-quizapp/NodeJS/src/mongoose/db/defaultDB.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/NodeJS/src/mongoose/db/mongoose.js Desktop/Project/wings-reactnode-quizapp/NodeJS/src/mongoose/db/mongoose.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/NodeJS/src/mongoose/models/questions.js Desktop/Project/wings-reactnode-quizapp/NodeJS/src/mongoose/models/questions.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/ReactJS/calculate-score.js Desktop/Project/wings-reactnode-quizapp/ReactJS/
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/ReactJS/src/test/QuestionCard.test.js Desktop/Project/wings-reactnode-quizapp/ReactJS/src/test/QuestionCard.test.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/ReactJS/src/test/Questions.test.js Desktop/Project/wings-reactnode-quizapp/ReactJS/src/test/Questions.test.js
cp Desktop/Project/projectvalidation/wings-reactnode-quizapp/ReactJS/src/test/TestData.js Desktop/Project/wings-reactnode-quizapp/ReactJS/src/test/TestData.js
# Execute score script
cd Desktop/Project/wings-reactnode-quizapp
sh score.sh
