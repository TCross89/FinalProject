import { useState, useEffect } from 'react';

import House from './House';
import { housesApi } from '../HousingApi/HousesApi.js';
import HouseForm from './HouseForm';
import classes from './HouseList.css';

function HousesList() {
    const [isLoading, setIsLoading] = useState(false);
    const [houses, setHouses] = useState([]);
    const [houseChange, houseHasChanged] = useState(false);
    
    useEffect( () => {

        const fetchHouses = async () => {
            setIsLoading(true);
            const houseList = await housesApi.get();
            setHouses(houseList);
            setIsLoading(false);
        }

        fetchHouses();
        houseHasChanged(false);
        setIsLoading(false);
    }, [houseChange])

    const updateHouse = async(updatedHouse) => {
        await housesApi.put(updatedHouse);
        houseHasChanged(true);
    };

    const addHouse = async(house) => {
        await housesApi.post(house);
        houseHasChanged(true);
    };

    const deleteHouse = async(house) => {
        await housesApi.delete(house);
        houseHasChanged(true);
    }

    if (isLoading) {
        return (
            <div>
                <h1>LOADING.......</h1>
            </div>
        );
    };

    return (
        <div className={classes.housesListContainer}>
            <div className={classes.newHouseForm}>
                <HouseForm addNewHouse={addHouse} />
            </div>
        
            {houses.map((house) => (
                <House 
                    house={house}
                    key={house._id}
                    updateHouse={updateHouse}
                    deleteHouse={deleteHouse}
                />
            ))}
        </div>
    )
}

export default HousesList;