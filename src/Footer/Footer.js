import React from 'react';

const Footer = props => (
    <section id="footer">
        <div className="preFooter">
            <div className="col-xs-12 col-sm-6 col-md-2 line">
                <p>
                    N&deg; de inscripción en SSN<br />
                    0002/0580/0710/0605
                </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 line hideSM">
                <p>
                    Atención al asegurado<br />
                    <a href="tel:08006668400">0800-666-8400</a>
                </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2 line">
                <p className="topMedium">
                    Organismo de control
                </p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="row">
                    <div className="col-xs-12 hidden-sm col-md-6">
                        <p className="topPlus">
                            <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank" rel="noopener noreferrer">
                                www.argentina.gob.ar/ssn
                            </a>
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank" title="Superintendencia de Seguros de la Nación" rel="noopener noreferrer">
                            <div className="logo-ssn"></div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="limpia"></div>

        </div>
        <div className="footer">
            <p>
                La compañía de seguros dispone de un Servicio de Atención al Asegurado que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabitantes.<br /><br />

                En caso de que el reclamo no haya sido resuelto o que haya sido denegada su admisión o desestimado, total o parcialmente, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al 0800 666 8400, correo electrónico a denuncias@ssn.gob.ar o por formulario web.<br /><br />

                RESPONSABLE: Sebastián López Delgado<br />
                SUPLENTE: Nadia González Centurión<br />
                LINEA ATENCIÓN AL CLIENTE: 0800-222-7854
            </p>
        </div>
    </section>
)

export default Footer;