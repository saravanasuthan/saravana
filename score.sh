SCORE=0
cd NodeJS/
rm -rf ./test-report.xml && CI=true ./node_modules/.bin/jest test/user.test.js --testResultsProcessor ./node_modules/jest-junit-reporter;
cd ../ReactJS/
rm -rf ./test-report.xml && CI=true ./node_modules/.bin/react-scripts test src/test/QuestionCard.test.js src/test/Questions.test.js --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit-reporter;
SCORE=$(node ./calculate-score.js);
cd ~
echo "{"SCORE":"$SCORE"}"
