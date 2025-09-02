import React from "react";
import './About.css';
import profile from "../assets/img/me_nyc.png"
import { useEffect } from "react";
import ccc from '../assets/img/ccc.png'
import docker from '../assets/img/docker.png'
import fpga from '../assets/img/fpga.png'
import golang from '../assets/img/golang.png'
import big3 from '../assets/img/big3.png'
import postgres from '../assets/img/postgresql.png'
import python from '../assets/img/python.png'
import react from '../assets/img/react.png'
import tsdb from '../assets/img/timescaledb.png'
import ws from '../assets/img/ws.png'
import cloud from '../assets/img/cloud.png'
import bash from '../assets/img/bash.png'
import sk from '../assets/img/scikit-learn.png'
import pyt from '../assets/img/pyt.png'
import kafka from '../assets/img/Kafka.png'
import kub from '../assets/img/Kubernetes.png'
import java from '../assets/img/Java.png'
import prom from '../assets/img/Prometheus.png'
import ans from '../assets/img/Ansible.png'
import graf from '../assets/img/Grafana.png'


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
            {
                threshold: 0,
            }
        );

        const targets = document.querySelectorAll(".about-1, .about-2, .about-3");
        targets.forEach((target) => observer.observe(target));

        return () => targets.forEach((target) => observer.unobserve(target));
    }, []);

    const skills = [
        { icon: ccc, label: "C, C++, C#", level: "Experienced" },
        { icon: python, label: "Python", level: "Experienced" },
        { icon: golang, label: "Golang", level: "Experienced" },
        { icon: react, label: "React", level: "Experienced" },
        { icon: big3, label: "JS, CSS, HTML", level: "Experienced" },
        { icon: fpga, label: "Verilog", level: "Proficient" },
        { icon: docker, label: "Docker", level: "Proficient" },
        { icon: postgres, label: "Postgres", level: "Proficient" },
        { icon: tsdb, label: "TimescaleDB", level: "Proficient" },
        { icon: ws, label: "Wireshark", level: "Proficient" },
        { icon: cloud, label: "AWS / GCP", level: "Proficient" },
        { icon: bash, label: "Linux / Bash", level: "Experienced" },
        { icon: pyt, label: "PyTorch", level: "Experienced" },
        { icon: sk, label: "Sklearn", level: "Experienced" },
        { icon: java, label: "Java", level: "Learning" },
        { icon: graf, label: "Grafana", level: "Proficient" },
        { icon: prom, label: "Prometheus", level: "Proficient" },
        { icon: kafka, label: "Kafka", level: "Learning" },
        { icon: ans, label: "Ansible", level: "Learning" },
        { icon: kub, label: "Kubernetes", level: "Learning" },
    ];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-header">

                    <span className="swirl-text">˚₊‧✩*ੈ𐙚</span>
                    <h2 className="h2-title">About Me</h2>
                    <span className="swirl-text">𐙚*ੈ✩‧₊˚</span>

                </div>
                <div className="about-content">
                    <div className="about-image">
                        <img className="profile-pic" src={profile} alt="Header Img" />
                    </div>

                    <div className="about-me-pargraph">
                        <p className="about-1">
                            I'm a builder and an artist, whether it's creating designs and
                            food to building machines and technical creations. This page
                            showcases my professional career as well as projects of mine
                            driven by design, depth, and creativity. I recently graduated as a
                            BASc Electrical Engineering Student ⚡️ at the University of
                            British Columbia in Vancouver, Canada.
                        </p>
                        <p className="about-2">
                            My engineering journey began without prior experience with
                            programming or engineering concepts. I grew to enjoy applying
                            software to complement hardware and eventually focusing on software
                            itself—ranging from personal projects to solving complex systems in
                            large, interdisciplinary team environments like my UBC Formula
                            Electric team 🏎️!
                        </p>
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
                    {skills.map((s) => (
                        <div
                            key={s.label}
                            className="skill-card"
                            tabIndex="0"
                            aria-label={`${s.label}: ${s.level}`}
                        >
                            <img src={s.icon} alt="" class="skill-icon" />
                            <span class="skill-text">{s.label}</span>
                            <span className="skill-tooltip">{s.level}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section >);
}