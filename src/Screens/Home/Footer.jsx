import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <p className="footer-title" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>Instrumental Dufour</p>
                <p className="footer-slogan">Providing magnetic compass services and certificates since 1939</p>
                <div className="footer-info-cont">
                    <div className="footer-info">
                        <a href="tel:+5491154558216"><i className="fa fa-phone "></i>+54 9 11 5455-8216</a>
                        <a href="mailto:info@instrumentaldufour.net?" target="_blank" rel="noreferrer" ><i
                            className="fa fa-envelope "></i>info@instrumentaldufour.net</a>
                    </div>
                </div>
            </div>
            <div className='footer-terms'>
                <a href="terms-and-conditions">Terms & Conditions</a>
                <a href="policy">Policy</a>
            </div>
            <p className="made-by">Copyright {new Date().getFullYear()} <i>•</i><a className="made-by"
                href="https://www.linkedin.com/in/franco-ortega-48838123b/" target="_blank" rel="noreferrer">By Fran Ortega</a></p>
        </footer>
    )
}
