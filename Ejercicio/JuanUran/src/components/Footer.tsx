import React from 'react'

interface Props {
    text: string;
    year: number
}

const Footer = ({ text, year }: Props) => {
    return (
        <>
            <div className="footer">
                <footer className="py-3">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="https://www.celuweb.com/" target="_blank" className="nav-link px-2 ">{text}</a></li>
                    </ul>
                    <p className="text-center">&copy; {year} Company, Inc</p>
                </footer>
            </div>
        </>
    )
}
export default Footer;