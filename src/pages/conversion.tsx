import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonText,
    IonItem,
    IonSelect,
    IonInput,
    IonSelectOption,
  } from "@ionic/react";
import './conversion.css'
import { useState } from "react";
  export default function Conversion() {
    var [inputValue, upateInput] = useState("")
    var [inputUnit, updateInputUnit] = useState<string>("")
    var [outputUnit, updateOutputUnit] = useState<string>("")
    var [result, convert] = useState("conversion out will appear here")
    const metric = ['millimeters','centimeters','meters','kilometers']
    const si = ['inches','feet','yard','mile']
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
          <IonContent id="content">
              <IonText>
                  <IonInput id="inputValue" placeholder="Type number to be converted here" value={inputValue} onIonChange={e=>upateInput(e.detail.value!)}/>
                <IonSelect id="inputunit" placeholder="unit to convert from..."onIonChange={inputunit=>updateInputUnit(inputunit.detail.value)}>
                    <IonSelectOption value="inches" >Inches</IonSelectOption>
                    <IonSelectOption value="feet" >Feet</IonSelectOption>
                    <IonSelectOption value="yards">Yards</IonSelectOption>
                    <IonSelectOption value="miles">Miles</IonSelectOption>
                    <IonSelectOption value="millimeters" >Millimeters</IonSelectOption>
                    <IonSelectOption value="centimeters" >Centimeters</IonSelectOption>
                    <IonSelectOption value="meters">Meters</IonSelectOption>
                    <IonSelectOption value="kilometers">Kilometers</IonSelectOption>
                </IonSelect>
                <IonText id="text">
                    Convert to:
                
                </IonText>
                <IonSelect id="outputunit" placeholder="unit to convert to..."onIonChange={unit=>updateOutputUnit(unit.detail.value)}>
                    <IonSelectOption value="inches" >Inches</IonSelectOption>
                    <IonSelectOption value="feet" >Feet</IonSelectOption>
                    <IonSelectOption value="yards">Yards</IonSelectOption>
                    <IonSelectOption value="miles">Miles</IonSelectOption>
                    <IonSelectOption value="millimeters" >Millimeters</IonSelectOption>
                    <IonSelectOption value="centimeters" >Centimeters</IonSelectOption>
                    <IonSelectOption value="meters">Meters</IonSelectOption>
                    <IonSelectOption value="kilometers">Kilometers</IonSelectOption>
                    </IonSelect> 
                    
              </IonText >
                <IonItem id="convert" button onClick={()=>{
                    if(inputUnit && outputUnit && +inputValue){
                    convert(conversion({inputvalue:Number(inputValue),
                                        inputunit:String(inputUnit),
                                        outputunit:String(outputUnit)})+" " + outputUnit)
                         
                    }
                    else{alert("one of those is wrong")}
                }}>
                    Convert
                </IonItem>
                <IonText id="result">
                    {result}
              </IonText>
          </IonContent>
        </IonPage>
    </IonContent>)}

function conversion({inputvalue, inputunit, outputunit}:{inputvalue:any,inputunit:any,outputunit:any}){
    var meters = inputvalue
    switch (inputunit){
        case "millimeters":
            meters = meters/1000
            break
        case "centimeters":
            meters = meters/100
            break
        case "meters":
            break
        case "kilometers":
            meters  = meters*1000
            break
        case "inches":
            meters = meters/ 39.3701
            break 
        case "feet":
            meters = meters / 3.281
            break
        case "yards":
            meters =meters * 1.094
            break
        case "miles":
            meters =meters * 1609 
            break
        }
    switch (outputunit){
        case "millimeters":
            return meters*1000
            
        case "centimeters":
            return meters*100
            
        case "meters":
            return meters
            
        case "kilometers":
            return meters/1000
            
        case "inches":
            return meters* 39.3701
             
        case "feet":
            return meters * 3.281
            
        case "yards":
            return meters / 1.094
        case "miles":
            return meters / 1609 
        }
}