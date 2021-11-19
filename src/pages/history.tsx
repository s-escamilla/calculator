import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonText,
  IonItem,
  IonList,
  IonListHeader,
  IonLabel,
} from "@ionic/react";
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
                    {equation}
                  </IonLabel>
                </IonItem>)})}
            </IonList>
          </IonPage>
        </IonContent>
      </IonPage>
    </IonContent>
  );
}
