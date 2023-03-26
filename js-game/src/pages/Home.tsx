import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={"warning"}>
        <div className="container">
          <IonCard color={"success"}>
            <IonCardContent>
              <h1>Js Conditionals</h1>
              <br />
              <h1>Quiz</h1>
            </IonCardContent>
          </IonCard>
          <IonCard color={"success"}>
            <IonCardContent>
              <IonButton color={"success"} routerLink="/mainpage">
                <h1>Start</h1>
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
