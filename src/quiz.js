class Quiz {
    constructor(questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining =  timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion (){
        return this.questions[this.currentQuestionIndex];
    };

    moveToNextQuestion(){
        this.currentQuestionIndex++; 
    }

    shuffleQuestions(){
        for(let i = this.questions.length -1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    checkAnswer(answer) {
        if (this.questions[this.currentQuestionIndex].answer === answer) {
          this.correctAnswers++; 
          return true;
        }
        return false;
      }
      

    hasEnded(){
        if(this.currentQuestionIndex < this.questions.length){
            return false;
        } else {
            return true;
        }
    } 


    filterQuestionsByDifficulty(difficulty){
       
        if(typeof difficulty !== "number" || difficulty < 1 || difficulty > 3){
            return this.questions;
        }
        
        this.questions = this.questions.filter(question => question.difficulty === difficulty);
        if (this.questions.length === 0) {
            return this.questions
        } 

    }
// Implement method filterQuestionsByDifficulty() in Quiz class using the array method filter().
 

    averageDifficulty(){
        if(this.questions.length === 0) return 0;
        const avgDifficulty = this.questions.reduce((acc, question) => acc + question.difficulty, 0);
        return avgDifficulty / this.questions.length;


  //        let difficulty = [1, 2, 3];
   //     return average(difficulty.reduce(acc, currentValue) => acc + currentValue / difficulty.length)
    }
//  Implement method averageDifficulty() in Quiz class using the array method reduce().




    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)

    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
}

//Kainat Naseer :)