import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    const today = new Date().getFullYear().toString();
    return <>
        <div className="container-fluid d-flex align-items-center flex-column bg-info py-3 text-center">
            <p className="mt-3 text-white">© Copyrights {today} MURAYI TECHNOLOGIES</p>
            <ul className="nav mr-auto">
                <li className="nav-item"><Link className="nav-link">Legal Stuff</Link></li>
                <li className="nav-item"><Link className="nav-link">Privacy Policy</Link></li>
                <li className="nav-item"><Link className="nav-link">Security</Link></li>
            </ul>
        </div>
    </>
}
export default Footer;