import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "./stepper.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

function getSteps() {
  return ["Pet Parent", "Pet's Details", "Book Appointments"];
}
const PetParent = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            required
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email id"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phoneNumber"
            label="Phone no"
            variant="outlined"
            name="phone"
            placeholder="Enter your Phone no"
            pattern="[789][0-9]{9}"
            required
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const Pet = () => {
  const data = {
    countries: [
      {
        name: "Cat",
        states: [
          {
            name: "Bengal cat",
          },
          {
            name: " British Short hair X",
          },
          {
            name: "Persion Cat",
          },
          {
            name: "Himalayan Cat",
          },
        ],
      },
      {
        name: "Dog",
        states: [
          {
            name: "Cross breed",
          },
          {
            name: "Doberman",
          },
          {
            name: "German Shephard",
          },
          {
            name: "Hushky",
          },
        ],
      },
    ],
  };

  const { control } = useFormContext();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();

  const availableState = data.countries.find((c) => c.name === selectedCountry);

  return (
    <>
      <Controller
        control={control}
        name="petName"
        render={({ field }) => (
          <TextField
            id="petName"
            label="Pet Name"
            variant="outlined"
            placeholder="Enter Pet's Name"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="petCategory"
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Pet Category</InputLabel>
            <Select
              id="petCategory"
              label="petCategory"
              placeholder="Select Pet petCategory"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              fullWidth
              required
            >
              <MenuItem>--Select Pet petCategory--</MenuItem>
              {data.countries.map((value, key) => {
                return (
                  <MenuItem value={value.name} key={key}>
                    {value.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="petBreed"
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Pet Breed</InputLabel>
            <Select
              label="Type"
              placeholder="Select pet's Breed"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              fullWidth
              {...field}
            >
              <MenuItem>--Select type--</MenuItem>
              {availableState?.states.map((e, key) => {
                return (
                  <MenuItem value={e.name} key={key}>
                    {e.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="petAge"
        render={({ field }) => (
          <TextField
            id="dob"
            label="Pet Age"
            variant="outlined"
            placeholder="Enter Pet's Age"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="petWeight"
        render={({ field }) => (
          <TextField
            id="petWeight"
            label="Pet Weight"
            variant="outlined"
            placeholder="Enter Pet's Weight"
            fullWidth
            required
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const BookAppointment = () => {
  const { control } = useFormContext();
  const [service1, setservice1] = useState();
  const [slot, setslot] = useState();

  return (
    <>
      <Controller
        control={control}
        name="service"
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">services</InputLabel>
            <Select
              label="services"
              placeholder="Select service"
              value={service1}
              required
              onChange={(e) => setservice1(e.target.value)}
              fullWidth
              {...field}
            >
              <MenuItem>--Select Service--</MenuItem>
              <MenuItem value="Vaccination">Vaccination</MenuItem>
              <MenuItem value="General Treatment">General Treatment</MenuItem>
              <MenuItem value="Flea and tick control">
                Flea and tick control
              </MenuItem>
              <MenuItem value="Deworming">Deworming</MenuItem>
              <MenuItem value="Spaying/Neutering">Spaying/Neutering</MenuItem>
              <MenuItem value="Gromming">Gromming</MenuItem>
              <MenuItem value="Dental Care">Dental Care</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="slot"
        render={({ field }) => (
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Slot</InputLabel>
            <Select
              label="slot"
              placeholder="Select Slot"
              value={slot}
              required
              onChange={(e) => setslot(e.target.value)}
              fullWidth
              {...field}
            >
              <MenuItem>--Select slot--</MenuItem>
              <MenuItem value="15 May(10am)">15 May(10am)</MenuItem>
              <MenuItem value="15 May(4pm)">15 May(4pm)</MenuItem>
              <MenuItem value="16 May(5pm)">16 May(5pm)</MenuItem>
              <MenuItem value="17 May(2pm)">17 May(2pm)</MenuItem>
              <MenuItem value="18 May(10pm)">18 May(10pm)</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PetParent />;

    case 1:
      return <Pet />;
    case 2:
      return <BookAppointment />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      petName: "",
      // petCategory: "",
      petBreed: "",
      petWeight: "",
      petAge: "",
      service: "",
      slot: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const handleNext = (data) => {
    console.log(data);
    // setActiveStep(activeStep + 1);

    if (activeStep === steps.length - 1) {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      //     // console.log(res);
      //   });
      data = Object.keys(data)
        .filter((key) => key !== "petCategory")
        .reduce((obj, key) => {
          obj[key] = data[key];
          return obj;
        }, {});

      console.log(data);
      axios
        .post("https://petecare.herokuapp.com/api/v1/pet/registerPet", data)
        .then((res) => {
          console.log(res);
          if (res) {
            Swal.fire({
              title: "Success",
              text: "Pet Registered Successfully",
              icon: "success",
              confirmButtonText: "OK",
            }).then((result) => {
              if (result.value) {
                navigate("/");
              }
            });
          }
          setActiveStep(activeStep + 1);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "90%",
        height: "90%",
        margin: "150px auto",
        // fontSize: "3rem",
      }}
    >
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button disabled={activeStep === 0} onClick={handleBack}>
                back
              </Button>

              <Button
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
