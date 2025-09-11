import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <hr className="footer-divider" />
            <Container fluid className="footer-container">
                <div className='left'>
                    <h3 className='h5'>PHI YEN LAM</h3>

                    <div className="footer-location">
                        <p></p>
                        <p>Vancouver, BC - <i>Canada</i></p>
                        <p>& on to the next 🌎</p>
                    </div>
                    <p className="footer-contact">
                        contact info:{" "}
                        <a href="mailto:lamyenphi14@gmail.com" className="footer-link">
                            lamyenphi14@gmail.com
                        </a>
                    </p>
                </div>
                <div className='right'></div>
                <p className="footer-text">Copyright © {year} Phi Lam</p>
            </Container>
        </footer>
    );
};
