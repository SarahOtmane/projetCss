import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';

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
        <Container fluid className='m-0'>
            <Header dateAvecJour={dateAvecJour} />
            <Main />
        </Container>
    )
}

export default App;