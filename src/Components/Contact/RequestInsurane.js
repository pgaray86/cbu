import React, { Component } from 'react';
import Footer from '../../Footer/Footer';
import BeforeFooter from '../../Footer/BeforeFooter';
import HeaderTwo from '../../Header/HeaderTwo';
import serialize from 'form-serialize';

//api method
import { getToken, saveData } from '../../utils/api';

class RequestInsurance extends Component {
    state = {
        coverage: '',
        nombre: '',
        apellido: '',
        fec_nacimiento: '', //"23/10/1998"
        mail: '',
        telefono: '',
        disable: false
    }

    componentDidMount() {
        this.setState({ coverage: window.location.href.split('#')[1] });
        this.generateToken();
    }

    generateToken() {
        getToken()
            .then(res => this.setState({ token: res.data.token, disable: false }))
            .catch(e => console.log(e));
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
            default:
                break;
        }
    }

    handleForm = e => {
        e.preventDefault();
        this.setState({ disable: true });

        let values = serialize(e.target, { hash: true });
        //handle apellido & nombre
        let fullName = values.apellido.split(' ');
        let firstName = fullName[1] ? fullName[1] : '';
        let lastName = fullName[0];

        //insert into values
        values.apellido = lastName;
        values.nombre = firstName;
        values.fec_nacimiento = values.fec_nacimiento.split('-').reverse().join('/');

        values = { ...values, cobertura: this.state.coverage };

        if (!this.state.token) return this.generateToken();

        saveData(values, this.state.token)
            .then(res => window.location.href = '/gracias')
            .catch(err => this.setState({ disable: false }));
    }

    render() {
        const coverage = window.location.href.split('#')[1];

        return (
            <div id="bgBlanco">
                <HeaderTwo />
                <section id="contacto">
                    <div className="container">
                        <h1>Solicitud de cotización</h1>
                        <p>Si querés que un asesor de Swiss Medical Seguros se comunique con vos y realice una cotización de tu seguro, completá el siguiente formulario:</p>

                        <form onSubmit={this.handleForm} method='post' data-aos="fade-in">

                            <h2 className="negative">Sobre vos</h2>

                            <label htmlFor="textfield">Cobertura:</label>
                            <input disabled={true} name="cobertura" defaultValue={coverage} id="disabled" type="text" className="validate" />
                            <br />

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
                            <label htmlFor="tel">Fecha de nacimiento:</label>
                            <input type="date" name="fec_nacimiento" id="tel" required />

                            <input type="submit" name="button" id="button" value="Quiero un seguro" disabled={this.state.disable} style={{ opacity: this.state.disable ? 0.5 : 1 }} required />
                        </form>
                        <BeforeFooter />
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default RequestInsurance;