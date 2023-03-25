import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
} from "@ionic/react";
import questions from "./questions.json";
import Question from "./Question";

const Quiz: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionSelected = (option: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[currentQuestionIndex] = option;
      return newSelectedOptions;
    });
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    
  };

  const handleFinishClick = () => {
    const newScore = selectedOptions.reduce((acc, option, index) => {
      const isCorrect = option === questions[index].answer;
      return isCorrect ? acc + 1 : acc;
    }, 0);
    setScore(newScore);

  };

  const handleRetryClick = () => {
    setSelectedOptions([]);
    setCurrentQuestionIndex(0);
    setScore(null);
  };

  if (score !== null) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <IonPage>
        <IonContent>
          <div className="containerResult">
            <IonCardHeader>
              <h1 className="font">Quiz Result</h1>
            </IonCardHeader>
          </div>
          <div className="Result-wraper">
            <div className="Result-col font">
              <p>{percentage}%</p>
            </div>
            <div className="Result-row font">
              <p>Correct : {score}</p>{" "}
              <p> Mistakes : {questions.length - score}</p>
            </div>
            <IonButton
              onClick={handleRetryClick}
              routerLink="/Home"
              color={"success"}
            >
              Start Over
            </IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent>
        <div className="container font">
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedOption={selectedOptions[currentQuestionIndex] || null}
            onOptionSelected={handleOptionSelected}
          />
        {isLastQuestion ? (
          <IonButton onClick={handleFinishClick}>Finish</IonButton>
          ) : (
            <IonButton color={"success"} onClick={handleNextClick}>
            Next
          </IonButton>
        )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Quiz;
