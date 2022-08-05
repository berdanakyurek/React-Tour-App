// react router
// react redux


import Tour from "./Tour.js";
import {useEffect, useState, setTotalReactPackages} from 'react';

const apiUrl= 'https://course-api.com/react-tours-project'



function TourList() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    function fetchTourInfo(){
    fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
            //console.log(responseData)
            setTours(responseData)
            return responseData;
        })
    }

    useEffect(() => {
        fetchTourInfo()
        setLoading(false)
    }, []);

    function removeTour(toRemove){
        var newTours = []
        for(var i = 0; i < tours.length; i++){
            if(tours[i].id != toRemove){
                newTours.push(tours[i])
            }
        }
        setTours(newTours)
    }

    function ListComponent(){
        return(
            tours.map(t => {
                if(t != null){
                }
                return <Tour id={t.id} name={t.name} info={t.info} image={t.image} price={t.price} removeTour={removeTour} />
            })
        )
    }


    const l = <ListComponent/>
    if(loading){
        return (<h1 style={{ fontSize: "15rem" }}>Loading</h1>);
    }
    else if(tours.length != 0){
        console.log(l)
        return l
    }
    else{
        return(
            <h1>No Tours Left</h1>
        )
    }
}

export default TourList;
