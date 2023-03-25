import React from 'react';
import { IonCard, IonCardContent, IonRadio, IonItem, IonLabel, IonList, IonRadioGroup } from '@ionic/react';

interface Props {
  question: string;
  options: string[];
  selectedOption: string | null;
  onOptionSelected: (option: string) => void;
}

const Question: React.FC<Props> = ({ question, options, selectedOption, onOptionSelected }) => {
  return (
    <IonCard>
      <IonCardContent>
        <h2>{question}</h2>
        <IonList>
          <IonRadioGroup value={selectedOption} onIonChange={(e) => onOptionSelected(e.detail.value)}>
            {options.map((option) => (
              <IonItem key={option}>
                <IonLabel>{option}</IonLabel>
                <IonRadio slot="start" value={option} />
              </IonItem>
            ))}
          </IonRadioGroup>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};
console.log('index');
export default Question;