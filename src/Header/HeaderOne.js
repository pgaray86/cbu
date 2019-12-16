import React from 'react';

const Header = ({ photoTop }) => (
    <section id="top">
        <div className={`fotoTop ${photoTop}`}>
            <div 
                className="logoHome" 
                onClick={() => window.location.href = '/'}
                style={{ cursor: 'pointer' }}>
            </div>
            <p><a href="/">Volver al home</a></p>
        </div>
    </section>
)   

export default Header;