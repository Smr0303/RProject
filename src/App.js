import "./App.css";
import { useDisclosure } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import {
  Stack,
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
  Radio,
  RadioGroup,
  Heading,
} from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

import axios from "axios";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [age, setAge] = useState("");
  const [cholestrol, setCholestrol] = useState("");
  const [bPSystolic, setbPSystolic] = useState("");
  const [bP_Di_Astolic, setbP_Di_Astolic] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [smoking, setSmoking] = useState("");
  const [obesity, setObesity] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [heartProblem, setHeartProblem] = useState("");
  const [medication_Use, setMedication_Use] = useState("");
  const [bmi, setBmi] = useState("");
  const [triglycerides, setTriglycerides] = useState("");
  const [sleep_hours, setSleep_hours] = useState("");
  const [diet, setDiet] = useState("");
  const [gender, setGender] = useState("");
  const [output, setOutput] = useState("Click on Predict");

  const toast = useToast();

  async function handlePredict() {
    const object = {
      Age: age,
      Cholestrol: cholestrol,
      BP_systolic: bPSystolic,
      BP_diastolic: bP_Di_Astolic,
      "Heart Rate": heartRate,
      Diabetes: parseInt(diabetes),
      "Family History": parseInt(familyHistory),
      Smoking: parseInt(smoking),
      Obesity: parseInt(obesity),
      "Alcohol Consumption": parseInt(alcohol),
      "Exercise Hours Per Week": 20,
      "Previous Heart Problems": parseInt(heartProblem),
      "Medication Use": parseInt(medication_Use),
      BMI: bmi,
      Triglycerides: triglycerides,
      "Sleep Hours Per Day": sleep_hours,
      Sex: gender,
      Diet: parseInt(diet),
    };
    console.log(object);
    try {
      toast({
        title: "Model Predicting",
        description: "Predicting Output........   ",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      const response = await axios.post(
        "http://localhost:8000/predict",
        object
      );
      if (response.data == "1") {
        setOutput("You are at risk of Heart Attack");
      } else {
        setOutput("You are fit");
      }
    } catch (err) {
      console.log(err);
    }
    console.log("Predicting");
  }

  return (
    <div className="App" style={{ display: "100vw" }}>
      <Heading as="h2" colorScheme="blue" size="3xl" noOfLines={1}>
        HeartAttack Prediction Model
      </Heading>
      <div
        className="InputGroup"
        style={{
          display: "flex",
          width: "100vw",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="Box1">
          <FormControl m={2} variant="floating" id="Age">
            <FormLabel htmlFor="Age">Age</FormLabel>
            <Input
              m={2}
              id="Age"
              variant="outline"
              size="md"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>
          <FormControl m={2} variant="floating" id="Cholestrol">
            <FormLabel htmlFor="Cholestrol">Cholestrol</FormLabel>
            <Input
              m={2}
              id="Cholestrol"
              variant="outline"
              size="md"
              placeholder="Enter Cholestrol Level"
              value={cholestrol}
              onChange={(e) => setCholestrol(e.target.value)}
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>
          <FormControl m={2} variant="floating" id="bPSystolic">
            <FormLabel htmlFor="floating-input">BP Systolic</FormLabel>
            <Input
              m={2}
              id="bPSystolic"
              variant="outline"
              size="md"
              value={bPSystolic}
              onChange={(e) => setbPSystolic(e.target.value)}
              placeholder="bPSystolic"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>
          <FormControl m={2} variant="floating" id="bP_Di_Astolic">
            <FormLabel htmlFor="bP_Di_Systolic">BP-Diastolic</FormLabel>
            <Input
              m={2}
              id="bP_Di_Systolic"
              variant="outline"
              size="md"
              value={bP_Di_Astolic}
              onChange={(e) => setbP_Di_Astolic(e.target.value)}
              placeholder="Enter BP-Diastolic Level"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>
          <FormControl m={2} variant="floating" id="Heart Rate">
            <FormLabel htmlFor="floating-input">Heart Rate</FormLabel>
            <Input
              m={2}
              id="floating-input"
              variant="outline"
              size="md"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              placeholder=" Enter Heart Rate"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>

          <FormControl m={2}>
            <FormLabel> Have Diabetes?</FormLabel>
            <RadioGroup m={2} value={diabetes} onChange={setDiabetes}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="Family History">
            <FormLabel htmlFor="floating-input">Family History</FormLabel>
            <RadioGroup m={2} value={familyHistory} onChange={setFamilyHistory}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="Smoking">
            <FormLabel htmlFor="floating-input">Smoking</FormLabel>
            <RadioGroup m={2} value={smoking} onChange={setSmoking}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="Box2">
          <FormControl m={2} variant="floating" id="Obesity">
            <FormLabel htmlFor="floating-input">Obesity</FormLabel>
            <RadioGroup m={2} value={obesity} onChange={setObesity}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="Alcohol">
            <FormLabel htmlFor="floating-input">Alcohol</FormLabel>
            <RadioGroup m={2} value={alcohol} onChange={setAlcohol}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="heartProblem">
            <FormLabel htmlFor="floating-input">
              Previous heart Problem
            </FormLabel>
            <RadioGroup m={2} value={heartProblem} onChange={setHeartProblem}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl m={2} variant="floating" id="Diet">
            <FormLabel htmlFor="floating-input">Diet </FormLabel>
            <RadioGroup m={2} value={diet} onChange={setDiet}>
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="Gender">
            <FormLabel htmlFor="floating-input">Enter Gender </FormLabel>
            <RadioGroup m={2} value={gender} onChange={setGender}>
              <Stack spacing={4} direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="Medication_Use">
            <FormLabel htmlFor="floating-input">Use Medicines </FormLabel>
            <RadioGroup
              m={2}
              value={medication_Use}
              onChange={setMedication_Use}
            >
              <Stack spacing={4} direction="row">
                <Radio value="1">Yes</Radio>
                <Radio value="0">No</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl m={2} variant="floating" id="bmi">
            <FormLabel htmlFor="bmi"> Enter Body Mass Index</FormLabel>
            <Input
              m={2}
              id="bmi"
              variant="outline"
              size="md"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              placeholder="Enter Body Mass Index"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>

          <FormControl m={2} variant="floating" id="Triglycerides">
            <FormLabel htmlFor="floating-input">Triglycerides Level</FormLabel>
            <Input
              m={2}
              id="floating-input"
              variant="outline"
              size="md"
              value={triglycerides}
              onChange={(e) => setTriglycerides(e.target.value)}
              placeholder="Enter Triglycerides Level"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>

          <FormControl m={2} variant="floating" id="sleep_hours">
            <FormLabel htmlFor="floating-input">Sleep Hours</FormLabel>
            <Input
              m={2}
              id="heartProblem"
              variant="outline"
              size="md"
              value={sleep_hours}
              onChange={(e) => setSleep_hours(e.target.value)}
              placeholder="Enter Sleep Hours Per Day"
              _placeholder={{ opacity: 1, color: "gray.500" }}
            />
          </FormControl>
        </div>

        <Button onClick={onOpen} colorScheme="teal">
          Predict
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Predicted Output</ModalHeader>
            <ModalCloseButton />
            <ModalBody> {output}</ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={handlePredict} colorScheme="blue">
                Predict
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default App;
