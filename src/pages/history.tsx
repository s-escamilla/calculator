import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonText,
  IonItem,
  IonList,
  IonListHeader,
  IonLabel,
} from "@ionic/react";
import './history.css'
import { historyls } from "./calculator";
export default function History() {
  return (
    <IonContent>
      <IonPage>
        <IonHeader >
          <IonToolbar >
            <IonButtons  slot="start">
              <IonMenuButton  />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonPage>
            <IonListHeader>
              <IonHeader class="header">
                History
              </IonHeader>
            </IonListHeader>
            <IonList>
            {historyls.map((equation)=>{
              return(
                <IonItem class="equation">
                  <IonLabel class="equation-label">
                    <IonText class="left">
                      {equation.split("=")[0]}
                      </IonText><IonText class="right">
                        {"="+ equation.split("=")[1]
                        }
                      </IonText>
                  </IonLabel>
                </IonItem>)})}
            </IonList>
          </IonPage>
        </IonContent>
      </IonPage>
    </IonContent>
  );
}
