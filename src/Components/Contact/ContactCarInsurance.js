import React, { Component } from 'react';
import serialize from 'form-serialize';
import Footer from '../../Footer/Footer';
import BeforeFooter from '../../Footer/BeforeFooter';
import HeaderTwo from '../../Header/HeaderTwo';
import { ContactCarInsuranceData } from '../../utils/data';

class ContactCarInsurance extends Component {
    state = {
        nombre: '',
        apellido: '',
        mail: '',
        telefono: '',
        codigo_postal: ''
    }

    handleForm = e => {
        e.preventDefault();
        let values = serialize(e.target, { hash: true });
        //handle apellido & nombre
        let fullName = values.apellido.split(' ');
        let firstName = fullName[1] ? fullName[1] : '';
        let lastName = fullName[0];

        //insert into values
        values.apellido = lastName;
        values.nombre = firstName;

        console.log(values);

        // window.location.href = '/gracias';
    }

    validaton = (e, field) => {
        let regex = '';
        const { value, keyCode } = e.target;

        switch (field) {
            case 'apellido':
                regex = /^[a-zA-Z ]*$/;
                if (keyCode === 32 || keyCode === 8 || regex.test(value)) {
                    this.setState({ apellido: value });
                }
                break;
            case 'mail':
                // regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (true) {
                    this.setState({ mail: value });
                }
                break;
            case 'telefono':
                regex = /^[0-9]*$/;
                if (keyCode === 8 || regex.test(value)) {
                    this.setState({ telefono: value });
                }
                break;
            case 'codigo_postal':
                regex = /^[0-9]*$/;
                if (keyCode === 8 || regex.test(value)) {
                    this.setState({ codigo_postal: value });
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { year, brand, model } = ContactCarInsuranceData;

        return (
            <div id="bgBlanco">
                <HeaderTwo />
                <section id="contacto">
                    <div className="container">
                        <h1>Solicitud de cotización</h1>
                        <p>Si querés que un asesor de Swiss Medical Seguros se comunique con vos y realice una cotización de tu seguro, completá el siguiente formulario:</p>

                        <form method='post' onSubmit={this.handleForm} data-aos="fade-in">

                            <h2 className="negative">Sobre vos</h2>

                            <label htmlFor="textfield">Apellido y nombre:</label>
                            <input
                                type="text"
                                name="apellido"
                                id="textfield"
                                pattern="[A-Za-z ]{1,50}"
                                title="Only alphabets allowed"
                                value={this.state.apellido}
                                onChange={(e) => this.validaton(e, 'apellido')}
                                required />
                            <br />

                            <label htmlFor="email">Mail:</label>
                            <input
                                type="email"
                                name="mail"
                                id="email"
                                value={this.state.mail}
                                onChange={(e) => this.validaton(e, 'mail')}
                                required />
                            <br />

                            <label htmlFor="tel">Teléfono Móvil:</label>
                            <input
                                type="tel"
                                name="telefono"
                                id="tel"
                                pattern="[0-9]{10}"
                                minLength={10}
                                maxLength={10}
                                title="Enter valid number"
                                value={this.state.telefono}
                                onChange={(e) => this.validaton(e, 'telefono')}
                                required />
                            <br />

                            <label for="textfield">Código postal:</label>
                            <input
                                type="text"
                                name="codigo_postal"
                                id="textfield"
                                pattern="[0-9]{4}"
                                title="Invalid postal code"
                                minLength="4"
                                maxLength="4"
                                value={this.state.codigo_postal}
                                onChange={(e) => this.validaton(e, 'codigo_postal')}
                                required />
                            <br />

                            <label htmlFor="textfield">¿Sos socio de Swissmedical?:</label>
                            <select name="select" id="select">
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                            <h2 className="negative">Sobre tu auto</h2>
                            <label htmlFor="textfield">Seleccioná el año:</label>
                            <select name="select" id="select">
                                {year.map(item => (
                                    <option value={item} key={item}>{item}</option>
                                ))}
                            </select>
                            <br />
                            <label htmlFor="email">Elegí la marca de tu auto:</label>
                            <select name="select" id="select">
                                {brand.map(item => (
                                    <option value={item} key={item}>{item}</option>
                                ))}
                            </select>
                            <br />
                            <label htmlFor="tel">Seleccioná el modelo:</label>
                            <select name="select" id="select">
                                {model.map(item => (
                                    <option value={item} key={item}>{item}</option>
                                ))}
                            </select>

                            <input type="submit" name="button" id="button" value="Quiero un seguro" />
                        </form>

                        <BeforeFooter />
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default ContactCarInsurance;