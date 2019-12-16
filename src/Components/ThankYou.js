import React from 'react';
import Footer from '../Footer/Footer';
import BeforeFooter from '../Footer/BeforeFooter';
import HeaderTwo from '../Header/HeaderTwo';

class ThankYou extends React.Component {
    render() {
        return (
            <div id="bgBlanco">
                <HeaderTwo />
                <section id="gracias">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <div className="gracias"></div>
                                <h1>¡Muchas gracias!</h1>
                                <p>Tu solicitud fue enviada con éxito. <br />Un asesor de Swiss Medical Seguros te contactará a la brevedad.</p>
                                <input type="button" name="button" id="button" className="home pie" value="Aceptar"
                                    onClick={() => window.location.href= '/' } />
                            </div>
                        </div>
                        <BeforeFooter />
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default ThankYou;