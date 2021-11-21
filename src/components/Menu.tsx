import {
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonText,
} from "@ionic/react";

import { useLocation } from "react-router-dom";

import "./Menu.css";

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem routerLink="/calculator">
            
              <IonText> calc link </IonText>
            </IonItem>
            <IonItem routerLink="/history">
            
              <IonText>history link</IonText>
            </IonItem>
            <IonItem routerLink="/conversion">
              <IonText>convserion link</IonText>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
