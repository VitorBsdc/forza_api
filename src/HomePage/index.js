import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import './estilo_homepage.css';
import EstruturaPagina from '../componentes/EstruturaPagina';
import { Card } from 'react-bootstrap';


export default function HomePage() {
    const [user, setUser] = useState();
    useEffect(() => {
        api
          .get('https://forza-api.tk/')
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <EstruturaPagina>
        <div className='Homepage'>
          <div className="pai">
            <div className="filho">
      <img src={user?.image}></img>
      </div>
      </div>
        </div>
       
        </EstruturaPagina>
    )
}


//export default HomePage;