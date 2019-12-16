import React, { Component } from 'react';
//api method
import { getToken, consultaCBU } from '../utils/api';

const codigo = '';
const cuenta= '';
const denominacion= '';
const estadoEjecucion= '';
const moneda= '';
const tipoCuenta= '';


class ContactHomeInsurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigoRespuesta: '',
            cuenta: '',
            denominacion: '',
            estadoEjecucion: '',
            moneda: '',
            tipoCuenta: '',
            instancia: 0

        }
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

    handleForm = e => {
    e.preventDefault();
    this.setState({ disable: true })
    console.log("CBU:" + this.state.cbu);
    console.log("CUIT: " + this.state.cuit);
    this.state.salida = 'Prueba';
    if (!this.state.token) {
         return this.generateToken();
    }


    consultaCBU(this.state.cuit, this.state.cbu)
            //.then(resp => this.setState({estadoEjecucion : resp.data.estadoEjecucion}))
            .then(resp => {
                console.log("Render 3");
                this.state.codigoRespuesta = resp.data.codigoRespuesta;                
                this.state.cuenta = resp.data.cuenta;
                this.state.denominacion = resp.data.denominacion;
                this.state.estadoEjecucion = resp.data.estadoEjecucion;
                this.state.moneda = resp.data.moneda;
                this.state.tipoCuenta = resp.data.tipoCuenta; 
                this.state.instancia = 1;                                       
                
                this.forceUpdate();
            })
            .catch(e => console.log(e));                    
                    

    }

    validaton = (e, field) => {
        let regex = '';
        const { value, keyCode } = e.target;

        switch (field) {
            case 'cuit':
                regex = /^[0-9]*$/;
                if (keyCode === 11 || regex.test(value)) {
                    this.setState({ cuit: value });
                }
                break;
            case 'cbu':
                // regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                regex = /^[0-9]*$/;
                if (keyCode === 8 || regex.test(value)) {
                    this.setState({ cbu: value });
                }
                break;
        }
    }

    imprimir(){
        console.log(this.state.codigoRespuesta);
        console.log(this.state.cuenta);
        console.log(this.state.denominacion);
        console.log(this.state.estadoEjecucion);
        console.log(this.state.moneda);
        console.log(this.state.tipoCuenta);
    }
  

    render()
     {
        
        if (this.state.instancia == '0') {
            console.log("RENDER 1");
            return (
                <div id="bgBlanco">                    
                    <section id="contacto">
                        <div className="container">
                            <h1>Validacion CUIT/CBU</h1>
                            <form method='post' onSubmit={this.handleForm} data-aos="fade-in">
                                <label htmlFor="cuit">CUIT:</label>
                                <input
                                    type="text"
                                    name="cuit"
                                    id="cuit"
                                    pattern="[0-9]{11}"
                                    minLength={11}
                                    maxLength={11}
                                    title="Ingrese un CUIT valido"
                                    value={this.state.cuit}
                                    onChange={(e) => this.validaton(e, 'cuit')}
                                    required />
                                <br />
                                <label htmlFor="cbu">CBU:</label>
                                <input
                                    type="text"
                                    name="cbu"
                                    id="cbu"
                                    pattern="[0-9]{22}"
                                    minLength={22}
                                    maxLength={22}
                                    title="Ingrese un CBU válido"
                                    value={this.state.cbu}
                                    onChange={(e) => this.validaton(e, 'cbu')}
                                    required />
                                <br />
                                <input type="submit" name="button" id="button" value="Validar" disabled={this.state.disable} style={{ opacity: this.state.disable ? 0.5 : 1 }} required />
                            </form>
                        </div>
                    </section>
                </div>
            )
        }
      
        if (this.state.instancia == '1') {  
            console.log("RENDER 2");
         this.imprimir();          
            return (     
                <div id="bgBlanco">                    
                    <section id="contacto">
                        <div className="container">
                            <h1>Resultado Validacion CUIT/CBU</h1>
                            <label htmlFor="cuit">Codigo de Respuesta:</label>
                            <input type="text" value={this.state.codigoRespuesta}></input>                            
                            <br />
                            <label htmlFor="cbu">Cuenta:</label>
                            <input
                                value={this.state.cuenta}                                
                                placeholder={this.state.cuenta}                                
                            />
                            <br />
                            <label htmlFor="cuit">Denominacion:</label>
                            <input
                                value={this.state.denominacion}                                
                                placeholder={'Denominacion'}                                
                            />
                            <br />
                            <label htmlFor="cuit">Estado ejecucion:</label>
                            <input
                                value={this.state.estadoEjecucion}                               
                                placeholder={'Estado Ejecucion'}                                
                            />
                            <br />
                            <label htmlFor="cuit">Moneda:</label>
                            <input
                                value={this.state.moneda}                                
                                placeholder={'Moneda'}                                
                            />
                            <br />
                            <label htmlFor="cuit">Tipo de cuenta:</label>
                            <input
                                value={this.state.tipoCuenta}
                               
                                placeholder={'Tipo de cuenta'}                        
                            />
                            <br />
                        </div>
                    </section>

                </div>
            )
        }
    }}

    export default ContactHomeInsurance;