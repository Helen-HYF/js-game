import {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
  } from "@ionic/react";
import React from "react";
  import Quiz from "../components/quiz";
  
  const Mainpage: React.FC = () => {
    const intscore = 0;
    return (
      <IonPage>
        <IonContent fullscreen>
          <Quiz />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Mainpage;
  