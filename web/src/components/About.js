import profile from "../assets/img/me_nyc.png"
import { useEffect } from "react";

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
            <h2 className="header">
                About Me
            </h2>
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
                        Columbia in Vancouver, Canada. My engineering journey without prior experience with
                        programming or engineering concepts.
                    </p>
                    <p className="about-2"> I grew to enjoy applying software to complement
                        hardware and eventually focusing on software itself—ranging from personal projects to solving
                        complex systems in large, interdisciplinary team environments. </p>
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
    </section>);
}