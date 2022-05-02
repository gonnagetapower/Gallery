import React from "react";

import './AboutMe.css'

import githubIcon from './../../assets/github-logo.png'
import hhLogo from './../../assets/hh-logo.png'
import telegramLogo from './../../assets/Telegram-Logo.png'

import meLogo from './../../assets/me.gif'

const AboutMe = () => {

    const mediaItems = [
        { id: 0, icon: githubIcon, link: 'https://github.com/gonnagetapower', title: 'github' },
        { id: 1, icon: hhLogo, link: 'https://voronezh.hh.ru/resume/f2d3d884ff0934bb4c0039ed1f303351387833',title: 'headhunter' },
        { id: 2, icon: telegramLogo, link: 'https://t.me/gonnagetapower', title: 'telegram' }
    ]
    return (
        <div className="aboutMe-wrapper">
            <h1>Hi, i'am junior frontent-developer - Alexandr Karpov</h1>
            <img className="aboutMe-wrapper__logo" src={meLogo} alt='My Logo'></img>
            <h1>@Gonnagetapower</h1>
            <div className="aboutMe-wrapper__links">
                <ul>
                    {mediaItems.map((item, index) =>
                        <a href={item.link}>
                            <img src={item.icon} alt={`media_icon_${item.title}`} key={`${item.id}:${index}`} />
                        </a>)}
                </ul>
            </div>
            <h2>I am a 21 year old student majoring in information security.
                I have been programming for a little less than a year.
                Most likely you are browsing my git and found this project or you saw it on the Sandbox code,
                if you notice any misstakes in the code or layout,
                please let me know at the contacts listed above.
                <br />
                I had a little bit practice in back-end and more in front-end
                I do my work step by step
            </h2>
            <h1>Technologies that I Learn and Use</h1>
            <div className="aboutMe-wrapper__links">
                <h1 class="marquee">
                    <span>JavaScript | HTML | CSS | NodeJS | ExrpressJS |
                    </span>
                </h1>
                <h1 class="marquee">
                    <span> React |
                        Redux | Axios | React-router |
                    </span>
                </h1>
                <h1 class="marquee">
                    <span>   PostreSQL | Mustashe | Redis | PassportJS |
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default AboutMe;