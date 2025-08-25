import React from "react";
import './Projects.css';

import { Col, Row, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";

import mywebsite from "../assets/img/mywebsite.png"
import mywebsite2 from "../assets/img/mywebsite2.png"
import feproj from "../assets/img/fe-proj.png"
import regen from "../assets/img/regen.png"
import feproj2025 from "../assets/img/fe-proj2025.JPG"
import vdoverview from "../assets/img/vdoverview.png"
import claw from "../assets/img/clawmachine.png"
import claw2 from "../assets/img/claw2.png"
import projecteuler from "../assets/img/projecteuler.png"
import risc from "../assets/img/risc.png"
import de1 from "../assets/img/de1.webp"
import finance from "../assets/img/finance.png"
import finance2 from "../assets/img/finance2.png"
import pixel from "../assets/img/pixel.png"
import pixel2 from "../assets/img/pixelsamples.png"
import gpu from "../assets/img/gpu.png"
import gpu2 from "../assets/img/gpu2.png"

export const Projects = () => {

    const projects = [
        {
            title: "Personal Website",
            description: (
                <>
                    Built my personal engineering portfolio from scratch using <strong>React</strong> while teaching myself fullstack development.
                    I started with <strong>Bootstrap</strong> to handle the layout, but ended up customizing most of the styling with <strong>CSS</strong> and <strong>JS</strong>
                    to make it feel more interactive, clean, and responsive across all screen sizes.

                    Added features like hover animations, collapsible modals for each project, smooth transitions, dynamic tag layouts,
                    and mobile-friendly design tweaks to make sure everything felt intuitive on all devices.

                    This project really helped me get comfortable with how <strong>React components</strong> work together, how to manage state across a growing UI,
                    and how to think through <strong>UI/UX</strong> from both a design and technical perspective.
                </>
            ),
            images: [mywebsite, mywebsite, mywebsite2],
            tags: ["React.js", "Bootstrap", "CSS", "JS", "UI/UX"],
            link: "https://github.com/philam2001/philam2001.github.io/tree/main/web",
        },
        {
            title: "Formula Electric: Vehicle Dynamics",
            description: (
                <>
                    Led development of 4WD control algorithms for electric race car vehicle dynamics
                    in <strong>C/C++</strong>, collaborating within a large, shared codebase alongside multiple engineers.
                    Used <strong>MATLAB, Simulink, and Python</strong> to simulate control logic and
                    analyze real-world data. Designed torque vectoring strategies and supervised a
                    subteam of 3 engineers focused on testing, integration, and optimization.
                    Led the effort on GPS and IMU
                    integration through testing in <strong>Python</strong> to ensure accurate speed measurements
                    for slip control and regen.
                    This block diagram illustrates the high-level control loop for our 4WD
                    vehicle dynamics algorithm. It starts with driver input, generating a
                    reference yaw rate to achieve neutral steering. Our Yaw Rate Controller
                    calculates the required yaw moment, which feeds into a Torque Generator
                    responsible for power-limited torque distribution. The signal
                    passes through a Slip Controller to close the feedback
                    loop, ensuring accurate vehicle response under varying speeds and slip
                    conditions.
                </>
            ),
            images: [feproj2025, vdoverview],
            tags: ["C", "C++", "Python", "Matlab", "Simulink"],
            link: "https://github.com/UBCFormulaElectric/Consolidated-Firmware",
        },
        {
            title: "Formula Electric: Regenerative Braking",
            description: (
                <>
                    Designed and implemented regenerative braking logic in <strong>C/ C++ </strong>
                    with real-time embedded constraints. Remapped pedal curves to support
                    one-pedal driving and tuned system response based on driver feedback.
                    Tested, validated, and deployed the system on a 2WD race vehicle
                    alongside the vehicle dynamics algorithm. The image below shows the implementation that
                    integrates an active differential strategy based on steering angle and
                    power-limiting constraints. Torque is dynamically distributed between
                    wheels in real time to maintain vehicle stability and optimize energy
                    recovery during braking.
                </>
            ),
            images: [feproj, regen],
            tags: ["C", "C++", "Python"],
            link: "https://github.com/UBCFormulaElectric/Consolidated-Firmware",
        },
        {
            title: "Simple Reduced Instruction Set Computer",
            description: (
                <>
                    My partner and I designed and implemented a simple computer using <strong>Verilog</strong>,
                    featuring a custom reduced instruction set architecture (RISC). The system
                    included datapaths, a CPU, a control state machine, registers, and memory components.
                    We built this on an <strong>FPGA</strong> (DE1-SoC), shown in the bottom right image.

                    Our design supports 16-bit data and instruction width, with an 8-bit address space
                    and 256-word memory. At the end of the lab, we were able to write programs implementing
                    any algorithm that fits within this memory model. The processor is capable of executing
                    a small set of ARM-like instructions.
                </>
            ),
            images: [risc, risc, de1],
            tags: ["Verilog", "FPGA"],
            link: "https://github.com/philam2001/RISC_Machine",
        }, {
            title: "Conditional Image Generation with PixelCNN++",
            description: (
                <>
                    Adapted an unconditional PixelCNN++ into a class-conditional model
                    that generates realistic images based on labels. The model learns to
                    generate realistic images based on input labels, such as "panda" or "pizza".
                    Integrated early and middle fusion strategies to inject class signals at
                    different network stages, improving image quality. Achieved 78.4% validation
                    accuracy and FID score of 15.88. Tuned hyperparameters via sweeps to balance
                    realism and accuracy.

                    The image below compares test dataset samples with generated images conditioned
                    on labels. While blurry, the outputs show meaningful visual alignment
                    with the target classes.

                </>
            ),
            images: [pixel, pixel2],
            tags: ["Python", , "PyTorch", "Deep Learning"],
            link: "https://github.com/philam2001/ConditionalPixelCNN",
        }, {
            title: "GPU Computing Software Stack",
            description: (
                <>
                    Built an automated job scheduling system as a capstone project with 4 other engineers to distribute power-intensive tasks
                    (e.g. AI/ML training) across compute nodes from users' laptops.

                    Developed a <strong>polling algorithm</strong> using <strong>bash</strong> and <strong>systemd</strong> on user devices
                    to detect job drops into shared <strong>SFTP</strong> folders. These folders are connected to a central server, which triggers
                    the provisioning pipeline upon new job detection.

                    Designed the <strong>main node</strong> to coordinate job orchestration, featuring a <strong>Flask</strong> backend,
                    containerized using <strong>Docker</strong>, and integrated with <strong>MariaDB</strong> and
                    <strong>PostgreSQL TimescaleDB</strong> to manage user schemas, job state, container configs, and execution metadata.

                    Created a <strong>React</strong> dashboard and <strong>REST APIs</strong> for users to track job progress in real time.

                    Simulated a distributed compute environment using <strong>GCP</strong>, where compute nodes ran containerized jobs
                    dispatched from our main node, which handles scheduling, resource balancing, and monitoring.
                </>
            ),
            images: [gpu, gpu2],
            tags: ["GCP", "Docker", "MariaDB", "PostgreSQL", "React", "Flask", "REST API", "Distributed Systems"]
            ,
            link: "NDA",
        }, {
            title: "Financial Sentiment Analysis",
            description: (
                <>
                    Built a binary sentiment classifier for financial tweets using Logistic Regression
                    and Random Forest. The goal was to predict positive (➕) or negative (➖) sentiment
                    toward stocks by applying <strong>NLP</strong> preprocessing techniques such as
                    tokenization, stopword removal, and TF-IDF vectorization. Tuned hyperparameters and
                    compared model performance, with Logistic Regression achieving the highest test
                    accuracy (0.77) and F1 score (0.83) among all evaluated models, outperforming
                    Random Forest and other baseline classifiers from related Kaggle benchmarks.
                </>
            ),
            images: [finance, finance2],
            tags: ["Python", "Sklearn", "NLTK", "NLP"],
            link: "https://github.com/philam2001/financial-sentiment-analysis",
        }, {
            title: "Project Euler",
            description: (
                <>
                    Used Project Euler as a platform to practice solving algorithmic and
                    mathematical problems using <strong>Python, Go, and Java</strong>. Focused on writing efficient
                    solutions and comparing performance across languages. Strengthened my
                    understanding of problem-solving techniques, number theory, and language-
                    specific programming approaches.
                </>
            ),
            images: [projecteuler, projecteuler],
            tags: ["Python", "Go", "Java"],
            link: "https://github.com/philam2001/ProjectEuler",
        }, {
            title: "Custom Claw Machine Control System",
            description: (
                <>
                    Built a custom claw machine control system using <strong>C</strong>,
                    <strong> Simulink</strong>, and an <strong>ESP32</strong> microcontroller. Designed
                    and tuned a <strong>PID</strong> controller for accurate claw positioning across
                    multiple states (grasp, release, home). Developed a real-time control loop
                    using hardware timers and ISRs. Modeled system dynamics in
                    <strong> Simulink</strong> and implemented state indication through PWM-controlled
                    LEDs. Integrated an ultrasonic sensor for object detection and validated control
                    performance with sub-second settling and rise times.
                </>
            ),
            images: [claw, claw2],
            tags: ["C", "PID", "Simulink", "ESP32"],
            link: "https://github.com/Kerem-Oktay/ELEC-391-GroupProject-BallHopper",
        }
    ]
    return (
        <section className="projects" id="projects">
            <Container fluid="l" className="project-container">
                <Row>
                    <Col>
                        <h2 className="proj-h2-title">Projects 🎀</h2>
                        <Row className="project-grid">
                            {projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}