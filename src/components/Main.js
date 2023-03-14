import React from "react";
import img from "../BSPP2266x940 (3).jpg"

const aboutContent = [
    "Hi, I'm Denis – UX/UI designer from Minsk. I\'m interested in design and everything connected with it.",
    "I'm studying at courses \"Web and mobile design interfaces\" in IT-Academy.",
    "Ready to implement excellent projects with wonderful people."
];

const Main = () => {
    return <main>
        <h1 className="p-3">Denis Novik</h1>
        <img src={img} alt="Denis"/>
        <h2 className="p-3">About me</h2>
        {aboutContent.map((item) => {
            return <p key={crypto.randomUUID()}>{item}</p>
        })}
    </main>
}

export default Main