import React, { Children, useState, useEffect } from "react";
import { mainContext } from "./MainContext";
const MainContext = ({ children }) => {
    const [counterCar, setCounterCar] = useState(0);


    return (
        <mainContext.Provider value={counterCar}>
            {children}
        </mainContext.Provider>
    )

}