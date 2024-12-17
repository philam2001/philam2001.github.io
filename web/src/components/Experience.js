import gm from '../assets/img/gm.jpeg'

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <h2 className="h2-title">
                Experience
            </h2>
            <div className="experience-container">
                <div class="experience-card">
                    <img src={gm} alt="" class="experience-icon" />
                    <span class="experience-text"></span>
                </div>
            </div>
        </section>

    );
}
