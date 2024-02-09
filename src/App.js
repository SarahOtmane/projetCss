import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';

function App(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000); 
      
        return () => clearInterval(interval); 
    }, []);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateAvecJour = date.toLocaleDateString('fr-FR', options);

    return(
        <>
            <Header dateAvecJour={dateAvecJour} />
        </>
    )
}

export default App;