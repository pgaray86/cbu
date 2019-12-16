import React from 'react';

const Benefits = props => (
    <div className="row">
        {props.benefits.map(item => (
            <div className="col-md-4" key={item.id}>
                <div className="card" data-aos="zoom-in-up">
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

export default Benefits;