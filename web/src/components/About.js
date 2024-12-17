import profile from "../assets/img/me_nyc.png"
import { useEffect } from "react";
import ccc from '../assets/img/ccc.png'
import docker from '../assets/img/docker.png'
import fpga from '../assets/img/fpga.png'
import golang from '../assets/img/golang.png'
import js from '../assets/img/js.png'
import postgres from '../assets/img/postgresql.png'
import python from '../assets/img/python.png'
import react from '../assets/img/react.png'


export const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("about-visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const targets = document.querySelectorAll(".about-1, .about-2, .about-3");
        targets.forEach((target) => observer.observe(target));

        return () => targets.forEach((target) => observer.unobserve(target));
    }, []);

    return (<section className="about" id="about">
        <div className="about-container">
            <div className="about-header">

                <span className="swirl-text">˚₊‧✩*ੈ𐙚</span>
                <h2 className="h2-title">About Me</h2>
                <span className="swirl-text">𐙚*ੈ✩‧₊˚</span>

            </div>
            <div className="about-content">
                <div className="about-image-container">
                    <div className="about-image">
                        <img className="profile-pic" src={profile} alt="Header Img" />
                    </div>
                </div>
                <div className="about-me-pargraph">
                    <p className="about-1">
                        {/* I was born in Vietnam but have lived in Bangkok 🇹🇭, Louisiana 🇺🇸,
                    Calgary 🇨🇦, Reno 🇺🇸, and Vancouver 🇨🇦. */}
                        Hi! I'm Phi and I'm studying Electrical Engineering ⚡️ at the University of British
                        Columbia in Vancouver, Canada. My engineering journey began without prior experience with
                        programming or engineering concepts.
                    </p>
                    <p className="about-2"> I grew to enjoy applying software to complement
                        hardware and eventually focusing on software itself—ranging from personal projects to solving
                        complex systems in large, interdisciplinary team environments like my UBC Formula Electric team 🏎️! </p>
                    <p className="about-3">A lot of what I know is self-taught:</p>
                    <div className="marquee-box">
                        <div className="marquee-content">
                            <span>🛠 Firmware Development</span>
                            <span>💻 Full-Stack Development</span>
                            <span>⚙️ FPGA Development</span>
                            <span>📡 Networking</span>
                            <span>🌐 Distributed Systems</span>
                            <span>🚗 Driver-Level Debugging</span>
                            <span>☁️ Cloud Computing</span>
                            <span>🛠 Firmware Development</span>
                            <span>💻 Full-Stack Development</span>
                            <span>⚙️ FPGA Development</span>
                            <span>📡 Networking</span>
                            <span>🌐 Distributed Systems</span>
                            <span>🚗 Driver-Level Debugging</span>
                            <span>☁️ Cloud Computing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="skills-section">
            <div className="skills-header"><h2 class="skills-title">Skills</h2></div>
            <div className="skills-container">
                <div class="skill-card">
                    <img src={ccc} alt="" class="skill-icon" />
                    <span class="skill-text">C, C++, C#</span>
                </div>
                <div class="skill-card">
                    <img src={python} alt="" class="skill-icon" />
                    <span class="skill-text">Python</span>
                </div>
                <div class="skill-card">
                    <img src={golang} alt="" class="skill-icon" />
                    <span class="skill-text">Golang</span>
                </div>
                <div class="skill-card">
                    <img src={react} alt="" class="skill-icon" />
                    <span class="skill-text">React</span>
                </div>
                <div class="skill-card">
                    <img src={js} alt="" class="skill-icon" />
                    <span class="skill-text">JS</span>
                </div>
                <div class="skill-card">
                    <img src={fpga} alt="" class="skill-icon" />
                    <span class="skill-text">Verilog</span>
                </div>
                <div class="skill-card">
                    <img src={docker} alt="" class="skill-icon" />
                    <span class="skill-text">Docker</span>
                </div>
                <div class="skill-card">
                    <img src={postgres} alt="" class="skill-icon" />
                    <span class="skill-text">Postgres</span>
                </div>
            </div>
        </div>
    </section >);
}