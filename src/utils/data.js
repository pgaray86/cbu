/* Various Component Data*/
import React from 'react';

/*Get Random Product*/
const getProducts = (id) => {
    let products = allProducts.filter(prod => id !== prod.id);
    return products.sort(() => 0.5 - Math.random()).slice(0, 3);
}

export const allProducts = [
    { id: 'thumbAuto', content: 'Seguros automotor', link: '/seguro-de-auto', ico: 'fa-car' },
    { id: 'thumbHogar', content: 'Seguros del hogar', link: '/seguro-del-hogar', ico: 'fa-home-alt' },
    { id: 'thumbVida', content: 'Seguro de vida', link: '/seguro-de-vida', ico: 'fa-users' },
    { id: 'thumbAccidente', content: 'Seguro de accidentes personales', link: '/seguro-de-accidentes-personales', ico: 'fa-first-aid' },
    { id: 'thumbSepelio', content: 'Seguro de sepelio', link: '/seguro-de-sepelio', ico: 'fa-hand-holding-heart' },
    { id: 'thumbSalud', content: 'Seguros de salud', link: '/seguro-de-salud', ico: 'fa-user-md' }
]

export const HomePageData = {
    title: 'Consulta CUIT - CBU'
}

export const CarInsuranceData = {
    title: 'Consulta CUIT - CBU',
    photoTop: 'auto',
    heading: {
        main: 'Seguro de Auto',
        btnText: 'Quiero mi seguro',
        subHeading: ['¿Por qué', 'elegirnos?'],
        details: [
            'Brindamos la posibilidad de acceder a la más amplia variedad de planes de cobertura, pensados y diseñados para la protección integral de autos.',
            'Contratá un seguro pensado y diseñado para la protección integral de tu auto. Coberturas de Terceros Completos y Todo Riesgo: un producto exclusivo combinando la mejor calidad de servicio y beneficios especiales.'
        ]
    },
    benefits: [
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
    ],
    plans: {
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
    },
    products: getProducts('thumbAuto'),
    contactLink: 'contacto-auto'
}

export const LifeInsuranceData = {
    title: 'Seguros de Vida  - Swiss Medical Seguros',
    photoTop: 'vida',
    heading: {
        main: 'Seguro de vida',
        btnText: 'Quiero mi seguro',
        subHeading: ['¿Por qué', 'elegirnos?'],
        details: [
            'Brindamos la tranquilidad de saber que, ante un imprevisto, tu familia contará con el respaldo económico suficiente para continuar con su nivel de vida habitual.',
            'Contamos con 2 planes con diferentes Sumas Aseguradas por cobertura, de acuerdo a tus necesidades.'
        ]
    },
    coverage: [
        'Fallecimiento por enfermedad o accidente',
        'Invalidez total y permamente por enfermedad o accidente',
        'Indemnización adicional por accidente'
    ],
    products: getProducts('thumbVida'),
    contactLink: '/contacto-vida-salud-sepelio-accidentes#Vida'
}

export const BurialInsuranceData = {
    title: 'Seguros de Sepelio - Swiss Medical Seguros',
    photoTop: 'sepelio',
    heading: {
        main: 'Seguro de sepelio',
        btnText: 'Quiero mi seguro',
        subHeading: ['¿Por qué', 'elegirnos?'],
        details: [
            'Acercamos de manera prestacional una solución integral para atravesar la pérdida de un ser querido, sin tener que preocuparte por los contratiempos que esto pueda ocasionar.',
            'Con un simple llamado telefónico, recibirás el servicio sin ningún costo adicional, las 24 horas, los 365 días del año.'
        ]
    },
    coverage: [
        'Coordinación del funeral',
        'Asesoramiento personalizado',
        'Servicio de velatorio',
        'Provisión del féretro',
        'Cortejo fúnebre',
        'Traslado del fallecido',
        'Asistencia legal primaria en caso de fallecimientos producidos en la vía pública',
        'Podrás asegurar a tu cónyuge o conviviente, hijos, padres y suegros.'
    ],
    products: getProducts('thumbSepelio'),
    contactLink: '/contacto-vida-salud-sepelio-accidentes#Sepelio'
}

export const HealthInsuranceData = {
    title: 'Seguros de Salud - Swiss Medical Seguros',
    photoTop: 'salud',
    heading: {
        main: 'Seguro de salud',
        btnText: 'Quiero mi seguro',
        subHeading: ['¿Por qué', 'elegirnos?'],
        details: [
            'Un accidente o enfermedad pueden generar gastos difíciles de afrontar. Por eso, te ofrecemos un plan de gastos médicos indemnizatorios con el cual complementar la cobertura brindada por tu obra social, prepaga o sistema de salud público.',
            'Este plan te permite además asegurar a tu cónyuge o concubino/a, e hijos.'
        ]
    },
    coverage: [
        'Intervenciones quirúrgicas de alta complejidad',
        'Internación en sala común o cuidados críticos, como consecuencia de un accidente o enfermedad',
        'Trasplantes (de médula ósea, hepático, cardiopulmonar, cardíaco, renal, reno pancreático o de córnea)',
        'Diagnóstico de cáncer',
        'Implantación de Prótesis (ortopédicas, traumatológicas, cardiovasculares, neuroquirúrgicas, auditivas u oculares)',
        'Por Indicación de diálisis permanente por insuficiencia renal crónica'
    ],
    products: getProducts('thumbSalud'),
    contactLink: '/contacto-vida-salud-sepelio-accidentes#Salud'
}

export const AccidentInsuranceData = {
    title: 'Seguro de Accidentes Personales - Swiss Medical Seguros',
    photoTop: 'accidente',
    heading: {
        main: 'Seguro de accidentes personales',
        btnText: 'Quiero mi seguro',
        subHeading: ['¿Por qué', 'elegirnos?'],
        details: [
            'Ofrecemos protección las 24 horas, los 365 días del año, asegurando un respaldo económico ante situaciones imprevistas de carácter accidental.',
            'Te protegemos tanto en Argentina, como en el extranjero, estés en tránsito o de manera permanente.'
        ]
    },
    coverage: [
        'Fallecimiento por accidente',
        'Cobertura de incapacidad total o parcial por accidente',
        'Cobertura de desmembramiento'
    ],
    products: getProducts('thumbAccidente'),
    contactLink: '/contacto-vida-salud-sepelio-accidentes#Accidentes'
}

export const HomeInsuranceData = {
    title: 'Protegé tu casa: Seguro del Hogar | Swiss Medical Seguros',
    photoTop: 'hogar',
    heading: {
        main: 'Seguro del hogar',
        btnText: 'Quiero mi seguro',
        subHeading: ['Cuidá tu', 'hogar y tu familia'],
        details: [
            'La mejor opción para proteger tu vivienda. Sentite seguro combinando las mejores coberturas, adaptadas a tus necesidades.',
            '¿Que te cubre? La cobertura es ante Robo, Incendio, responsabilidad civil, equipos electronicos y mucho mas. Además, accedé a los servicios de asistencia disponibles las 24 horas.'
        ]
    },
    benefits: [
        {
            id: 'cobertura',
            name: 'Nuestra cobertura',
            content: 'Incendio de Edificio Robo Contenido General Daños Estéticos',
            link: '#'
        },
        {
            id: 'estrella',
            name: 'Servicios Adicionales',
            content: 'Traslado de muebles Guarda y custodia de muebles Coordinación e información de prestadores',
            link: '#'
        },
        {
            id: 'venticuatro',
            name: 'Servicio Exclusivo',
            content: 'Urgencias y emergencias médicas las 24 hs. los 365 días del año',
            link: '#'
        }
    ],
    coverage: [
        'Incendio de Edificio',
        'Incendio de Contenido',
        'Robo Contenido General',
        'Robo Objetos Suntuarios y Específicos',
        'Todo Riesgo Electrodomésticos en domicilio y mundo entero',
        'Alta y Baja Tensión',
        'Línea Blanca completa',
        'Responsabilidad Civil Linderos y Hechos Privados',
        'Accidentes Personales y Asistencia Médico Farmacéutica',
        'Cristales',
        'Daños por Agua e Inundación',
        'Daños Estéticos',
        'Bienes Refrigerados'
    ],
    additional: [
        'Servicio de cerrajería en caso de no poder ingresar o salir de la vivienda',
        'Solución de emergencias causadas por pérdidas de agua o gas',
        'Restablecimiento del suministro de energía eléctrica',
        'Reposición de vidrios exteriores de la vivienda',
        'Coordinación e información de prestadores',
        'Traslado de muebles',
        'Guarda y custodia de muebles',
        'Personal de vigilancia en caso de siniestro'
    ],
    products: getProducts('thumbHogar'),
    contactLink: '/contacto-hogar'
}

export const RequestInsuranceData = {
    title: 'Seguros de Auto - Coberturas de Todo Riesgo y Terceros Completo | Swiss Medical Seguros'
}

export const ContactCarInsuranceData = {
    title: 'Seguros de Auto - Coberturas de Todo Riesgo y Terceros Completo | Swiss Medical Seguros',
    year: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    brand: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    model: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

export const ContactHomeInsuranceData = {
    title: 'Protegé tu casa: Seguro del Hogar | Swiss Medical Seguros'
}

export const ThankYouData = {
    title: 'Seguros de Auto - Coberturas de Todo Riesgo y Terceros Completo | Swiss Medical Seguros'
}