
import { ReactNebula } from "@flodlc/nebula";
import { Button, FormControl, FormGroup, FormHelperText, Grid, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import "../prediction/index.css"
import { useState } from "react";
const Prediction = () => {
    const [response, setResponse] = useState();

    const getPrediction = () =>{
        const url = 'https://5abf-35-221-17-90.ngrok-free.app/predict';
        const data = new FormData();
        data.append('Phi', 51.66);
        data.append('Dens',6.02);
        data.append('Speed',455.7);
        data.append('Temp',188930);
    
        fetch(url, {
            method: 'POST',
            body: data
        }).then(res => res.json())
        .then(res => setResponse(res[0] === 1?"Solar Storm was detected": "No Solar Storm was detected"));
    }

    /*const getPrediction = (values) =>{
       setResponse("No Solar Storm was detected");
    }*/


    return (
        <div>

            <ReactNebula config={{
                starsCount: 250,
                starsRotationSpeed: 3,
                nebulasIntensity: 8
            }}>


            </ReactNebula>
            <Formik
            initialValues={{Phi: '', Dens: '', Speed: '',Temp:'', test: ''}}
            onSubmit={(values) => {
                console.log(values)
            }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => {
                    return (
                        <div class="container">
                            <FormGroup style={{ position: "absolute" }} onSubmit={handleSubmit}>
                                <FormControl focused>
                                    <InputLabel color="warning" focused htmlFor="date">PHI</InputLabel>
                                    <Input style={{ color: "white" }} type="number" color="warning" name="phi" id="phi" />
                                </FormControl>
                    
                                <FormControl >
                                    <InputLabel color="warning" focused htmlFor="temperature">Temperature</InputLabel>
                                    <Input style={{ color: "white" }} type="number" color="warning" name="temperature" id="temperature" />
                                </FormControl>
                                <FormControl>
                                    <InputLabel color="warning" htmlFor="density" focused>Density</InputLabel>
                                    <Input style={{ color: "white" }} type="number" name="density" color="warning" id="density" />
                                </FormControl>
                                <FormControl className="input-number">
                                    <InputLabel color="warning" htmlFor="speed" focused>Speed</InputLabel>
                                    <Input type="number" style={{ color: "white" }} color="warning" name="speed" id="speed" />
                                </FormControl>
    
                                <Button type="submit" variant="contained" color="success" onClick={(values) => getPrediction()}>
                                    Predict
                                </Button>
                                <p style={{color:"white"}}>{response}</p>
                            </FormGroup>
                        </div>
                    );

                }
                }
            </Formik>
        </div>
    )
}

export default Prediction;