import { Button, Stack, Container, Grid, Box } from "@mui/material"
import "../dashboard/index.css"
import { redirect, useNavigate } from "react-router-dom"


const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="body">
            <div className="container container-dashboard" >
                <img className="fondo" />
                <form>
                    <h1>THE ORACLE OF DSCOVR</h1>
                    <a onClick={() => navigate("/prediction")} class="btn_neon">
                        <span id="span1"></span>
                        <span id="span2"></span>
                        <span id="span3"></span>
                        <span id="span4"></span>
                        START PREDICTION MODULE
                    </a>
                </form>
            </div>
        </div>

    )
}

export default Dashboard