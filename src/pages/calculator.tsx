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
  IonText,
} from "@ionic/react";
import "./calculator.css";
import { useState } from "react";
export var historyls: String[] = []
export default function Calculator() {
  var [currentvalue, updateCurrent] = useState("0");
  var [equation, updateEquation] = useState(["0", "", "0"]);
  var [fontSize, updateFontSize] = useState(100);
  var [sign,updateSign] = useState("")
  return (
    <IonContent fullscreen>
      <IonPage class="page">
        <IonHeader class="header">
          <IonToolbar class="header">
            <IonButtons class="header" slot="start">
              <IonMenuButton class="header" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent class="pad" scrollY={false}>
          <IonText id="value-container">
            <IonText id="sign">{sign}</IonText>
            <IonText id="value" >
              {currentvalue != ""
                ? currentvalue
                : equation[1] == ""
                ? equation[0]
                : equation[2]}
            </IonText>
          </IonText>
          <IonGrid class="main">
            <IonRow class="cal ">
              <IonCol
                class="key clear"
                onClick={() => {
                  updateEquation(["0","",""])
                  updateCurrent("0")
                  updateFontSize(100);
                  document.getElementById("value")!.style.fontSize = "100px"
                }}
              >
                C
              </IonCol>
              <IonCol />
              <IonCol
                class="key calc-button operand /"
                onClick={() => {
                  updateEquation([equation[0], "/", equation[2]]);
                  updateFontSize(100)
                  document.getElementById("value")!.style.fontSize = "100px"
                }}
              >
                ÷
              </IonCol>

              <IonCol
                class="key calc-button operand X"
                text-center
                onClick={() => {
                  updateEquation([equation[0], "*", equation[2]]);
                  updateFontSize(100)
                  document.getElementById("value")!.style.fontSize = "100px"
                }}
              >
                X
              </IonCol>
            </IonRow>
            <IonRow class="cal">
              <IonCol
                class="calc key ion-align-self-center"
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 7,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                7
              </IonCol>

              <IonCol
                class="key"
                text-center
                
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 8,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                8
              </IonCol>

              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 9,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                9
              </IonCol>

              <IonCol
                class="calc key operand -"
                text-center
                onClick={() => {
                  equation[0] == "0"
                  ? updateEquation(["- ", equation[1], equation[2]])
                  : (updateEquation([equation[0], "-", equation[2]]));
                  
                }
                  }
              >
                -
              </IonCol>
            </IonRow>
            <IonRow class="cal">
              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 4,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                4
              </IonCol>

              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 5,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                5
              </IonCol>

              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 6,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                6
              </IonCol>

              <IonCol
                class="key operand +"
                text-center
                onClick={() => {
                  updateEquation([equation[0], "+", equation[2]]);
                  updateFontSize(100)
                  document.getElementById("value")!.style.fontSize = "100px"
                }}
              >
                +
              </IonCol>
            </IonRow>
            <IonRow class="cal equal-row">
              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 1,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                1
              </IonCol>

              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 2,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                2
              </IonCol>

              <IonCol
                class="key"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 3,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                3
              </IonCol>
              <IonCol
                class=" equal operand key"
                text-center
                onClick={() => {
                  let solution = eval(equation.join(""))
                  historyls.push(equation.join("")+"="+solution)
                  
                  updateCurrent(solution);
                  updateEquation(["0", "", "0"]);
                }}
              >
                =
              </IonCol>
            </IonRow>
            <IonRow class="overlap">
              <IonCol
                class="key zero"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: 0,
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})}
                }}
              >
                0
              </IonCol>
              <IonCol
                class="key period"
                text-center
                onClick={() => {
                  if(fontChange({fontHandler:updateFontSize,fontVariable:fontSize})){
                  addNumber({
                    variable: equation,
                    handler: updateEquation,
                    number: ".",
                    
                    handler2: updateCurrent,
                  });
                  fontChange({fontHandler:updateFontSize,fontVariable:fontSize})
                }}}
              >
                .
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </IonContent>
  );
}

function fontChange({
  fontHandler,
  fontVariable,
}: {
  fontHandler: any;
  fontVariable: any;
}){
  var element = document.getElementById("value")
  if(element!.scrollWidth>element!.clientWidth){
    if(fontVariable<40){
      alert("maximum number of digits have been typed")
      return false
    }else{
    fontHandler(fontVariable*.70)
    element!.style.fontSize =fontVariable + "px"
  return true}
  }else{return true}
}
function addNumber({
  variable,
  handler,
  number,
  handler2,
}: {
  variable: any;
  handler: any;
  number: any;
  handler2: any;
}) {
  handler2("");
  const temp = [String(variable[0]), String(variable[1]), String(variable[2])];

  temp[0] == "0"
    ? handler([number, temp[1], temp[2]])
    : temp[1] == ""
    ? handler([temp[0] + number, temp[1], temp[2]])
    : temp[2] == "0"
    ? handler([temp[0], temp[1], number])
    : handler([temp[0], temp[1], temp[2] + number]);
}
