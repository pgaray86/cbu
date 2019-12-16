import React from 'react';

const SimpleList = props => (
    <div id="comparativo">
        {props.data.map(item => (
            <div className="row renglon" key={item}>
                <div className="col-xs-12 col-md-4 hiddenMob">
                    <div className="igual hogar"></div>
                </div>
                <div className="col-xs-12 col-md-8 bgGris">
                    <p className="hogar">{item}</p>
                </div>
                <div className="col-xs-12 col-md-4 showMob">
                    <div className="igual hogar"></div>
                </div>
            </div>
        ))}
    </div>
);

export default SimpleList;