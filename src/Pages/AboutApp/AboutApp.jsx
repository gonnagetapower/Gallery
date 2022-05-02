import React from "react";

import './AboutApp.css'

const AboutApp = () => {
    return(
        <div className="aboutApp-wrapper">
            <h1>About app</h1>
            <h2>This application was created in order to demonstrate my ability to work with api. It allows you to view a stream of photos and search for the right ones by keywords.</h2>
            <h1>Development process</h1>
            <h2>I used unsplash as data api to upload photos.<br />
A demonstration of working with axios is located in the api.js file.
It has a limit on the amount of data in one request, so they need to be split into pages. 
And here I got at a crossroads, select a friend using the "load more" button, or display pagination. 
When looking for a solution to the problem, I saw an infinite scroll and decided to try it, 
I saw a ready-made component in the form of InfinityScroll, but when using it, 
I noticed page lag when loading new data, 
I could not solve this problem.<br/>
When creating an application, I ran into a problem that masonry layout cannot be achieved using native css. Therefore, I started looking towards ready-made components. 
My choice fell on the solution from material ui.
To work with state, I did not use global state (like Redux ), but used react tools.
I also decided to use two urls for different tasks. One for initialization of all photos, the second for search. 
They have different structure and I ran into a problem that I can't use the same useState,
 in the end I got a crutch, at least that works.</h2>
  <h1>Conclusion</h1>
  <h2>Most likely, if I have the choice to use InfinityScroll or not, then I will prefer the second option. The most problems arose with it. Also, due to the fact that I am new to development, I do not like to use ready-made solutions, because I do not always understand how it works inside. In the next I will try to look for clean solutions.</h2>
  <h1>Thanks for read </h1>
  <h2>English is not my native language and I speak using google translator, please forgive me for that. Thank you for your attention</h2>
        </div>
    )
}

export default AboutApp;