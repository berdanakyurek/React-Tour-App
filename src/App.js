import React from "react";
import TourList from "./TourList.js";
import Button from '@mui/material/Button';


function App() {

    function refresh(){
        window.location.reload(false);
    }

    return (
        <div>
            <TourList/>
            <Button variant="contained" onClick ={refresh}>Refresh</Button>
        </div>
    );
}

export default App;
