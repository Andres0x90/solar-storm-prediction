
import { ReactNebula } from "@flodlc/nebula";
import { Button, FormControl, FormGroup, FormHelperText, Grid, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Field, Formik } from "formik";
import "../prediction/index.css"
import { useState } from "react";
const Prediction = () => {
    const [response, setResponse] = useState();

    const getPrediction = (phi, dens, speed, temp) => {
        const url = 'http://ae8d-35-221-17-90.ngrok-free.app/predict';
        const data = new FormData();
        data.append('Phi', parseFloat(phi));
        data.append('Dens', parseFloat(dens));
        data.append('Speed', parseFloat(speed));
        data.append('Temp', parseFloat(temp));

        fetch(url, {
            method: 'POST',
            body: data
        }).then(res => res.json())
            .then(res => setResponse(res[0] === 1 ? "Solar Storm was detected" : "No Solar Storm was detected"));
    }

    /*const getPrediction = (values) =>{
       setResponse("No Solar Storm was detected");
    }*/


    const handleSubmit = (values) => {
        values.preventDefault()
        getPrediction(values.target.phi.value,
            values.target.density.value,
            values.target.speed.value,
            values.target.temperature.value);
    }


    return (
        <div>

            <ReactNebula config={{
                starsCount: 250,
                starsRotationSpeed: 3,
                nebulasIntensity: 8
            }}>


            </ReactNebula>

                <form onSubmit={handleSubmit}>
            <div class="container">
                    <FormGroup style={{ position: "absolute" }} onSubmit={handleSubmit}>
                        <FormControl focused>
                            <InputLabel color="warning" focused htmlFor="date">PHI</InputLabel>
                            <Input step="0.01" style={{ color: "white" }} type="text" color="warning" name="phi" id="phi" />
                        </FormControl>

                        <FormControl >
                            <InputLabel color="warning" focused htmlFor="temperature">Temperature</InputLabel>
                            <Input step="0.01" style={{ color: "white" }} type="text" color="warning" name="temperature" id="temperature" />
                        </FormControl>
                        <FormControl>
                            <InputLabel color="warning" htmlFor="density" focused>Density</InputLabel>
                            <Input step="0.01" style={{ color: "white" }} type="text" name="density" color="warning" id="density" />
                        </FormControl>
                        <FormControl className="input-number">
                            <InputLabel color="warning" htmlFor="speed" focused>Speed</InputLabel>
                            <Input step="0.01" type="text" style={{ color: "white" }} color="warning" name="speed" id="speed" />
                        </FormControl>
                        <Button type="submit" variant="contained" color="success">
                            Predict
                        </Button>
                        <p style={{ color: "white" }}>{response}</p>
                    </FormGroup>
            </div>
                </form>



        </div>
    )
}

export default Prediction;