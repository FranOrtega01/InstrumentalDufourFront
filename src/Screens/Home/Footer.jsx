import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                <a className="footer-title" href="#">Instrumental Dufour</a>
                <p className="footer-slogan">Providing magnetic compass services and certificates since 1939</p>
                <div className="footer-info-cont">
                    <div className="footer-info">
                        <a href="tel:+5491154558216"><i className="fa fa-phone "></i>+54 9 11 5455-8216</a>
                        <a href="mailto:info@instrumentaldufour.net?" target="_blank"><i
                            className="fa fa-envelope "></i>info@instrumentaldufour.net</a>
                    </div>
                </div>
            </div>
            <p className="made-by">Copyright<i>•</i><a className="made-by"
                href="https://www.linkedin.com/in/franco-ortega-48838123b/" target="_blank">By Fran Ortega</a></p>
        </footer>
    )
}
