import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

//curl -X POST -H "Content-Type: application/json" -d '{"Age": 0.64160649, "Cholesterol": -0.6477889, "BP_systolic": 0.88256006, "BP_diastolic": 0.21029289, "Heart Rate": -0.14856937, "Diabetes": -1.23597753, "Family History": -0.88143929, "Smoking": 0.37132962, "Obesity": -0.89376539, "Alcohol Consumption": -1.08756891, "Exercise Hours Per Week": -1.04994223, "Previous Heart Problems": -0.87937102, "Medication Use": -0.89263941, "BMI": 0.38334592, "Triglycerides": -0.59001446, "Sleep Hours Per Day": -0.47481413, "Sex": "Male", "Diet": "Average"}' http://localhost:8000/predict
