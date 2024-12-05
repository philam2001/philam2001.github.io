import profile from "../assets/img/me_nyc.png"

export const About = () => {
    return (<section className="about" id="about">
        <div className="about-container">
            <h2 className="header">
                About Me
            </h2>
            <div className="about-content">
                <div className=",t-image-container">
                    <div className="about-image">
                        <img className="profile-pic" src={profile} alt="Header Img" />
                    </div>
                </div>
                <div className="about-me-pargraph">
                    <p>
                        My name is Phi Lam, and I'm studying Electrical Engineering at the University of British
                        Columbia in Vancouver, Canada. I was born in Vietnam but have lived in Bangkok 🇹🇭, Louisiana 🇺🇸,
                        Calgary 🇨🇦, Reno 🇺🇸, and Vancouver 🇨🇦. My engineering journey started as a challenge to overcome, as
                        I had no prior knowledge of what engineering or programming even was. I grew to enjoy seeing how it
                        could be used for personal projects to solving complex systems for big, interdisplinary team projects.
                        A lot of what I know is self-taught, whether it’s firmware development, full-stack development, diving into distributed systems, driver-level
                        development and debugging, or exploring cloud computing, and etc.
                    </p>
                </div>
            </div>
        </div>
    </section>);
}