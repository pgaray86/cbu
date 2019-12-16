import React from 'react';

const Products = props => (
    <React.Fragment>
        <div className="row">
            <div className="col-xs-12 col-md-12">
                <h3 className="relacionados">Productos relacionados</h3>
            </div>
        </div>
        <div className="row">
            {props.products.map(item => (
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" key={item.id}>
                    <a href={item.link}>
                        <div className="prodRelacionado" data-aos="zoom-out">
                            <div className={`fotoRel ${item.id}`}></div>
                            <div className="limpia"></div>
                            <div className="icoRel"></div>
                            <p>{item.content}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>

    </React.Fragment>
);

export default Products;