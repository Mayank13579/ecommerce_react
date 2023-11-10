import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logofooter.png'
import instagram_logo from '../../assets/Instagram_icon.png'
import pintrest_logo from '../../assets/1417104.png'
import whatsapp_logo from '../../assets/WhatsApp_icon.png'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>products</li>
            <li>offices</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container"><img src={instagram_logo} alt="" /></div>
        <div className="footer-icons-container"><img src={pintrest_logo} alt="" /></div>
        <div className="footer-icons-container"><img src={whatsapp_logo} alt="" /></div>
        </div>
        <div className="footer-copyright">
            <hr />
        <p>Copyright @2023 - All Rights Reserved.</p>
        </div>
    </div>

  )
}

export default Footer