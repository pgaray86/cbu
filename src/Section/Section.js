import React, { Component } from 'react';
import HeaderOne from '../Header/HeaderOne';
import Footer from '../Footer/Footer';

const benefits = [
    {
        'id': 'cobertura',
        'name': 'Nuestra cobertura',
        'content': 'Daño total Granizo sin Límites Robo total y parcial',
        'link': '#'
    },
    {
        'id': 'beneficios',
        'name': 'Beneficios 0KM',
        'content': 'Reposición de 0KM Cubierta sin desgastes Bonificaciones especiales',
        'link': '#'
    },
    {
        'id': 'servicios',
        'name': 'Servicios Adicionales',
        'content': (() => <span>Remolque<br /> Auto sustituto Servicio de conductor</span>)(),
        'link': '#'
    }
];

const plans = {
    'coverage': [
        { content: 'Daño Parcial con franquicia fija o variable', available: false },
        { content: 'Responsabilidad Civil', available: true },
        { content: 'Incendio Total y Parcial', available: true },
        { content: 'Robo Total y Parcial', available: true },
        { content: 'Daño Total', available: true },
        { content: 'Daño Parcial a consecuencia de Robo Total (Sin Franquicia)', available: true },
        { content: 'Llave a consecuencia de Robo Total (aparecido)', available: true },
        { content: 'Accidentes Personales', available: true },
        { content: 'Daños a Cerradura por robo o intento sin límites', available: true },
        { content: 'Daños a Cristales sin límites', available: true },
        { content: 'Granizo sin límites', available: true },
        { content: 'Inundación sin límites', available: true },
    ],
    'benefits': [
        { content: 'Reposición de 0KM', available: true },
        { content: 'Cubiertas sin desgastes', available: true },
        { content: 'Bonificaciones especiales', available: true }
    ],
    'additional': [
        { content: 'Remolque', available: true },
        { content: 'Extracción del vehículo', available: true },
        { content: 'Mecánica Ligera', available: true },
        { content: 'Abastecimiento de combustible y/o lubricante', available: true },
        { content: 'Transporte o repatriación sanitaria', available: true },
        { content: 'Estadía en Hotel y Desplazamiento de Beneficiarios (en caso de siniestro)', available: true },
        { content: 'Deposito o custodia de vehículo (en caso de Inmovilización o Robo)', available: true },
        { content: 'Servicio de conductor', available: true },
        { content: 'Auto sustituto', available: true },
        { content: 'Transmisión de mensajes urgentes', available: true },
        { content: 'Información sobre rutas, tránsito y destinos turísticos', available: true },
        { content: 'Información sobre rutas, tránsito y destinos turísticos', available: true },
        { content: 'Emergencia médica por accidente (código rojo)', available: true },
        { content: 'Extensión coberturas a países limítrofes', available: true }
    ]
}

const products = [
    { id: 'thumbSalud', content: 'Seguros de salud' },
    { id: 'thumbAccidente', content: 'Seguro de accidentes personales' },
    { id: 'thumbVida', content: 'Seguro de vida' }
]

const HeadingOne = props => (
    <div className="row">
        <div className="col-xs-12 col-md-6">
            <h1>Seguro de Auto</h1>
            <div className="subrayado"></div>
        </div>
        <div className="col-xs-12 col-md-6">
            <input type="button" name="button" id="button" className="home" value="Quiero mi seguro" />
        </div>

        <div className="limpia"></div>

        <div className="col-md-12">
            <p>Brindamos la posibilidad de acceder a la más amplia variedad de planes de cobertura, pensados y diseñados para la protección integral de autos.</p>
        </div>
        <div className="col-md-12">
            <h3>¿Por qué <strong>elegirnos?</strong></h3>
            <div className="subrayado center"></div>
        </div>
        <div className="col-md-12">
            <p className="center">Contratá un seguro pensado y diseñado para la protección integral de tu auto. Coberturas de Terceros Completos y Todo Riesgo: un producto exclusivo combinando la mejor calidad de servicio y beneficios especiales.</p>
        </div>
    </div>
);

const Benefits = props => (
    <div className="row">
        {benefits.map(item => (
            <div className="col-md-4" key={item.id}>
                <div className="card" >
                    <div className={`ico ${item.id}`}></div>
                    <h4>{item.name}</h4>
                    <p className="txt">{item.content}</p>
                    <p className="btnSaber"><a href={item.link}>Saber más</a></p>
                    <div className="subrayado center sinTop"></div>
                </div>
            </div>
        ))}
    </div>
);

const Plans = props => (
    <React.Fragment>
        <div className="row">
            <div className="col-md-12">
                <h3>Conocé nuestros <strong>planes</strong></h3>
                <div className="subrayado center"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-6 col-md-6">
                <h5>
                    Cobertura<br />
                    <strong>Terceros Completo<br />
                        (TC4)</strong>
                </h5>
            </div>
            <div className="col-xs-6 col-md-6">
                <h5 className="derecha">
                    Cobertura<br />
                    <strong>Todo Riesgo<br />
                        (TR)</strong>
                </h5>
            </div>
        </div>
        <List data={plans.coverage} />
        <Accordion plans={plans} />
    </React.Fragment>
);

const List = props => (
    <div id="comparativo">
        {props.data.map(item => (
            <div key={item.content}>
                <div className="row">
                    <div className="col-xs-12 col-md-12 hiddenDesktop">{item.content}</div>
                </div>

                <div className="row renglon">
                    <div className="col-xs-6 col-md-2">
                        <div className={item.available ? 'igual' : 'diferente'}></div>
                    </div>
                    <div className="col-md-8 hiddenMob">
                        <p>{item.content}</p>
                    </div>
                    <div className="col-xs-6 col-md-2">
                        <div className="igual"></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const Accordion = props => (
    <div id="accordion">
        <div className="accordion-container">
            <a href="#" className="accordion-titulo">Beneficios 0KM<span className="toggle-icon"></span></a>
            <div className="accordion-content">
                <List data={props.plans.benefits} />
            </div>
        </div>
        <div className="accordion-container">
            <a href="#" className="accordion-titulo">Servicios adicionales<span className="toggle-icon"></span></a>
            <div className="accordion-content">
                <List data={props.plans.additional} />
            </div>
        </div>
    </div>
);

const Products = props => (
    <React.Fragment>
        <div class="row">
            <div class="col-xs-12 col-md-12">
                <h3 class="relacionados">Productos relacionados</h3>
            </div>
        </div>
        <div className="row">
            {props.products.map(item => (
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={item.id}>
                    <a href="#">
                        <div class="prodRelacionado">
                            <div class={`fotoRel ${item.id}`}></div>
                            <div class="limpia"></div>
                            <div class="icoRel"></div>
                            <p>{item.content}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>

    </React.Fragment>
);

const BeforeFooter = props => (
    <div class="beforeFooter">
        <p>
            SMG Compañía Argentina de Seguros S.A. | CUIT 30-50003196-0 | Av. Corrientes 1865 PB | (C1045AAA) Buenos Aires, Argentina.<br />
            SMG LIFE Seguros de Vida S.A. | CUIT 30-68584340-0 | Arenales 1826 | (C1124AAB) Buenos Aires, Argentina.<br />
            SMG LIFE Compañía de Seguros de Retiro S.A. | CUIT 30-70096480-5 | Arenales 1826 | (C1124AAB) Buenos Aires, Argentina.<br />
            Swiss Medical ART S.A. | CUIT 33-68626286-9 | Av. Corrientes 1891 5° piso | (C1045AAA) Buenos Aires, Argentina.
         </p>
    </div>
);

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderOne />
                <section id="main">
                    <div className="container wrapper">
                        <HeadingOne />
                        <Benefits />
                        <Plans />
                        <div class="row">
                            <div class="col-xs-12 col-md-12">
                                <input type="button" name="button" id="button" class="home pie" value="Quiero mi seguro" />
                            </div>
                        </div>
                        <Products products={products} />
                        <BeforeFooter />
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Section;