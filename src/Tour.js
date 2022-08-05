import Button from '@mui/material/Button';
import {useEffect, useState, setTotalReactPackages} from 'react';

function Tour({id, name, info, image, price, removeTour}) {

    const [interested, setInterested] = useState(true)
    function notInterested()
    {
        setInterested(false)
        removeTour(id)
    }

    if(interested){
        return (
            <div>
                <h1>{name}</h1>
                <img src={image}/>
                <h2>${price}</h2>
                <div>{info}</div>
                <span>&nbsp;&nbsp;</span>

                <div><Button variant="contained" onClick ={notInterested}>Not Interested</Button></div>
                <span>&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;</span>
                <span>&nbsp;&nbsp;</span>
            </div>
        );
    }
    else{
        return null
    }

}

export default Tour;
