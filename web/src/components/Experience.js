import React from 'react'
import gm from '../assets/img/gm.jpeg'
import tesla from '../assets/img/tesla.png'
import fe from '../assets/img/fe.png'
import { useState } from 'react'

export const Experience = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    console.log("Initial Dropdown State:", isDropdownOpen);

    const toggleDropdown = () => {
        console.log("Toggling Dropdown. Current state:", isDropdownOpen);
        setIsDropdownOpen(!isDropdownOpen);
    };

    const experiences = [
        {
            company: "General Motors",
            icon: gm,
            location: "Remote",
            roles: [
                {
                    position: "Software Integration Engineering Intern",
                    date: "Jan 2024 - Aug 2024",
                    description: `I worked on the diagnostics team in Software and Services, where I analyzed vehicle data 
                    logs to identify root causes of software issues across critical vehicle programs. I also 
                    developed an automation tool to streamline diagnostics workflows, ensuring diagnostics were addressed 
                    efficiently to support timely product launches while maintaining reliability of vehicle systems.
                    `,
                },
            ],
        },
        {
            company: "Tesla Motors",
            icon: tesla,
            location: "Sparks, NV",
            roles: [
                {
                    position: "Software Engineering Intern",
                    date: "June 2022 - Dec 2022",
                    description: `
                    I transitioned into a software engineering role to 
                    support production testers for Tesla’s energy and vehicle products, with a focus on Powerwall 3 (PW3). 

                    I helped optimize existing testers, resolving long-standing issues and improving their performance. 
                    Later, I led the development of a new tester for PW3 working with cross-functional teams to design 
                    and implement software that enhanced testing reliability and supported to the start of production.

                    `,
                    // This role allowed me to work closely with cross-functional teams, troubleshoot complex systems, 
                    // and contribute to the successful launch of Tesla’s high-impact products.
                },
                {
                    position: "Firmware Engineering Intern",
                    date: "Feb 2022 - Jun 2022",
                    description: `
                    My first engineering internship involved developing firmware for a battery emulator, 
                    a cost-saving solution that reduced the need for separate testers and supported edge case testing 
                    for Tesla’s Battery Management Systems. 

                    I took ownership of the firmware development in its foundational stage, optimizing low-level 
                    hardware interactions, designing robust driver and network layers, and implementing an application 
                    layer for communication between the PCB and a Linux machine.

                    These efforts delivered a reliable MVP that streamlined testing processes.
                    `,
                },
            ],

        },
        {

            company: "UBC Formula Electric",
            icon: fe,
            location: "Vancouver, BC",
            roles: [
                {
                    position: "Software/Firmware Engineering Lead",
                    date: "Nov 2024 - Present",
                    description: `Leading the algorithm and software development for the vehicle dynamics
                    of a newly 4 Wheel Drive student-made race car.`,
                },
                {
                    position: "Software/Firmware Engineering Member",
                    date: "Jan 2023 - Nov 2024",
                    description: `
                    After my year-long internship, I transitioned into a software and firmware role. 
                    I worked on porting our vehicle controller firmware from the previous car model to 
                    a new PCB with a different MCU architecture. I also developed the team's first 
                    iterations of regenerative braking for 2WD and one-pedal driving, enhancing the 
                    vehicle's energy recovery capabilities.
                    `,
                },
                {
                    position: "Electrical Engineering Member",
                    date: "Sept 2020 - Jan 2022",
                    description: `
                    I joined Formula Electric during COVID where I gained online hands-on 
                    experience designing schematics and PCBs in Altium while expanding my 
                    electrical engineering knowledge. `,
                },
            ],
        }];
    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h2 className="exp-h2-title">Experience</h2>
                <p className="disclaimer">
                    This section provides a more personal perspective on my experiences. For a formal overview highlighting achievements and results, you can view my resume here or access it via the navigation bar above.
                </p>

                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <img
                            src={exp.icon}
                            alt={`${exp.company} Logo`}
                            className="experience-icon"
                        />
                        <div className='experience-entry'>
                            <div className="experience-header">
                                <h5 className="company-name">{exp.company}</h5>
                                <span className="location">{exp.location}</span>
                            </div>

                            {exp.roles.map((role, roleInd) => (
                                <div key={roleInd} className="role-entry">
                                    <div className="role-header">
                                        <h6 className='role-title'>{role.position}</h6>
                                        <span className="role-date">{role.date}</span>
                                    </div>

                                    <p className="role-description"> {role.description}</p>
                                </div>
                            ))}
                            {exp.company === "UBC Formula Electric" && (
                                <>
                                    <button onClick={toggleDropdown} className="dropdown-button">
                                        {isDropdownOpen ? "Hide Details" : "Show Details"}
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="formula-description">
                                            <p>
                                                Formula Electric is a student-led team that designs and builds high-performance electric race cars
                                                for the Formula SAE Electric competition.
                                            </p>
                                            <p>
                                                Our repository is an open-source project where we contribute software for telemetry, firmware, control systems, and more.
                                            </p>
                                            <a
                                                href="https://github.com/UBCFormulaElectric/Consolidated-Firmware"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="fe-github-link"
                                            >
                                                Explore GitHub Repository
                                            </a>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </section >
    );
}
