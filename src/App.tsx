import { IonApp, IonRouterOutlet, IonSplitPane, IonText } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";

import Conversion from "./pages/conversion";
import History from "./pages/history";
import Calculator from "./pages/calculator";/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
export const calchistory : string[] = []

const App: React.FC = () => {
  return (
    <IonApp color="--ion-color-primary">
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          
            <IonRouterOutlet id="main">

              <Route path="/calculator" component={Calculator} />
              <Calculator />
              <Route path="/history" component={History} />
              <Route path="/conversion" component={Conversion}/>
            </IonRouterOutlet>

        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
