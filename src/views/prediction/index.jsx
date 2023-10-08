import { ReactNebula } from "@flodlc/nebula";
import { Button, FormControl, FormGroup, FormHelperText, Grid, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Formik } from "formik";
import "../prediction/index.css"
const Prediction = () => {
    return (
        <div>

            <ReactNebula config={{
                starsCount: 250,
                starsRotationSpeed: 3,
                nebulasIntensity: 8
            }}>


            </ReactNebula>
            <Formik>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Grid container>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={8}>
                            <FormGroup style={{ position: "absolute" }} onSubmit={handleSubmit}>
                                <FormControl >
                                    <InputLabel color="warning" focused htmlFor="date">Storm Date Prediction</InputLabel>
                                    <Input style={{ color: "white" }} type="date" color="warning" name="date" id="date" />
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
                                    <Input  type="number" color="warning" name="speed" id="speed" />
                                </FormControl>
                                <Button variant="contained" color="success">
                                    Predict
                                </Button>
                            </FormGroup>

                        </Grid>

                    </Grid>

                )}
            </Formik>
        </div>
    )
}

export default Prediction;