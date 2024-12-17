import gm from '../assets/img/gm.jpeg'
import tesla from '../assets/img/tesla.png'
import fe from '../assets/img/fe.png'

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="experience-section">
                <div className="experience-header"><h2 className="h2-title">Experience</h2></div>
                <div className="experience-container">
                    <div class="experience-card">
                        <img src={gm} alt="" class="experience-icon" />
                        <span class="experience-text">
                            <h5>General Motors</h5>
                            <h7>Software Integration Engineering Intern</h7>
                            <p>Jan 2024 - Aug 2024</p>
                        </span>
                    </div>
                    <div className="experience-card">
                        <img src={tesla} alt="" class="experience-icon" />
                        <span class="experience-text">
                            <h5>Tesla Motors</h5>
                            <h7>Software Engineering Intern</h7>
                            <p>Jun 2022 - Dec 2022</p>
                            <h7>Firmware Engineering Intern</h7>
                            <p>Feb 2022 - Jun 2022</p>
                        </span>
                    </div>
                    <div className="experience-card">
                        <img src={fe} alt="" class="experience-icon" />
                        <span class="experience-text">
                            <h5>UBC Formula Electric</h5>
                            <h7>Software Engineering Lead</h7>
                            <p>Nov 2024 - Present</p>
                            <h7>Software Engineering Member</h7>
                            <p>Jan 2023 - Nov 2024</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    );
}
