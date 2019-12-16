import React from 'react';
import { withRouter } from 'react-router-dom';

const HeadingOne = props => (
    <div className="row">
        <div className={`col-xs-12 ${props.allWidth ? 'col-md-12' : 'col-md-6'}`}>
            <h1>{props.main}</h1>
            <div className="subrayado"></div>
        </div>
        <div className={`col-xs-12 ${props.allWidth ? 'col-md-12' : 'col-md-6'}`}>
            <input type="button" name="button" id="button" className={props.allWidth ? 'accidentesPersonales' : 'home'} value={props.btnText}
                onClick={() => window.location.href = props.contactLink} />
        </div>

        <div className="limpia"></div>

        <div className="col-md-12">
            <p>{props.details[0]}</p>
        </div>
        <div className="col-md-12">
            <h3>{props.subHeading[0]} <strong>{props.subHeading[1]}</strong></h3>
            <div className="subrayado center"></div>
        </div>
        <div className="col-md-12">
            <p className="center">{props.details[1]}</p>
        </div>
    </div>
);

export default withRouter(HeadingOne);