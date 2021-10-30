import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Footer from '../Footer';

const EstruturaPagina = (props) => {
    return (
        <section>
            <Header />
            {props.children}
            <Footer />
        </section>
    );
};

export default EstruturaPagina;