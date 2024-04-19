import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom si estás utilizando enlaces en React Router

const AboutUs = () => {
    return (
        <div>
            <h1>Pinkpanther</h1>
            <h3>Venta de Indumentaria deportiva</h3>
            <p>Soy María José, fundadora de PinkPanther, una marca nacida de la pasión y la necesidad de adaptarse a los tiempos de la pandemia en 2020. Como docente, busqué formas de contribuir y crecer, y encontré inspiración en el deporte como fuente de bienestar personal. Con valentía, hice mi primer pedido de ropa deportiva, y contra todo pronóstico, vendí todo en una semana. Este éxito inicial fue el comienzo de PinkPanther, un proyecto que ha crecido con cada venta online y cada entrega a domicilio. PinkPanther es más que indumentaria deportiva; es un sueño hecho realidad, compartido con una comunidad que valora el esfuerzo y la calidad.</p>
            <div className={styles.buttonContainer}>
                <Link to="/NavBar">
                    <button>Inicio</button>
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;