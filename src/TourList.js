import Tour from "./Tour.js";
import {useEffect, useState, setTotalReactPackages} from 'react';

const apiUrl= 'https://course-api.com/react-tours-project'

function fetchTourInfo(){
    fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
}

function TourList() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const resp = fetchTourInfo()
        console.log(resp)
        setTours(resp)
        setLoading(false)
    }, []);

    //console.log(tours)

    if(loading || tours == null){
        return (<div>Loading</div>);
    }
    else{
        return(
            tours.map(todo => {
                return <Tour/>
            })
        )
    }

}

export default TourList;
