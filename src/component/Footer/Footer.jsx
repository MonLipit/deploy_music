import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.scss'
function Footer() {
    const support = [
        {
            title:'Giới thiệu',
            href:'/',
        },
        {
            title:'SP-DV',
            href:'/',
        },
        {
            title:'Hỗ trợ',
            href:'/',
        },
        {
            title:'Thỏa thuận sử dụng',
            href:'/',
        },
    ]
    const social = [
        {
            icon:'fab fa-facebook',
            href:'https://www.facebook.com/profile.php?id=100004727944976'
        },
        {
            icon:'fab fa-github',
            href:'https://github.com/MonLipit'
        },
        {
            icon:'fab fa-youtube',
            href:'youtube.com/c/MixiGamingofficial'
        },
    ]
    return (
        <div className="footer">
            <div className="footer-contact">
                <ul className="footer-contact__support">
                    {support.map((item,index)=>(
                    <li className="footer-contact__support__item" key={index}>
                        <Link to={item.href} rel="noopener noreferrer">{item.title}</Link>
                    </li>))}
                </ul>
                <ul className="footer-contact__social">
                    {social.map((item,index)=>(
                        <li className="footer-contact__social__item" key={index}>
                            <a href={item.href} target="_blank"><i className={item.icon}></i></a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-location">
                <div className="footer-location__item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Khu Đô thị Linh Đàm, Hoàng Mai, Hà Nội</p>
                </div>
                
                <div className="footer-location__item">
                    <i className="fas fa-phone"></i>
                    <p>0979.759.862</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copy by MonLipit</p>
            </div>
        </div>
    )
}

export default Footer
