import React from "react";

import './AboutMe.css'

import githubIcon from './../../assets/github-logo.png'
import hhLogo from './../../assets/hh-logo.png'
import telegramLogo from './../../assets/Telegram-Logo.png'


const AboutMe = () => {

    const mediaItems = [
        { id: 0, icon: githubIcon, title: 'github' },
        { id: 0, icon: hhLogo, title: 'headhunter' },
        { id: 0, icon: telegramLogo, title: 'telegram' }
    ]

    return (
        <div className="aboutMe-wrapper">
            <h1>Hi, i'am junior frontent-developer - Alexandr Karpov</h1>
            <div className="aboutMe-wrapper__links">
                <ul>
                    {mediaItems.map((item, index) =>
                        <img src={item.icon} alt={`media_icon_${item.title}`} key={`${item.id}:${index}`} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default AboutMe;