import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import profilePic from "../assets/img/profile.jpg"
import flipPic from "../assets/img/me.jpeg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Firmware Engineer", "UBC ECE Graduate", "Web Developer", "KKG Alumni"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(130 - Math.random() * 100);
    const period = 1000;
    const [scrollOpacity, setScrollOpacity] = useState(1); // Initial opacity
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newOpacity = Math.max(0, 1 - scrollPosition / 500); // Adjust divisor for transparency rate
            setScrollOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => clearInterval(ticker);
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => 50)
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText == '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="banner" id="home" style={{ opacity: scrollOpacity }}>
            <div className="banner-container">
                <div className="text-content">
                    <span className="tagline">Hello 🌎, I'm </span>
                    <h1>Phi Lam</h1>
                    <span className="wrap">{text}</span>
                    <div className="welcome">Welcome to my website 🦋</div>
                </div>
                <div className="image-container">
                    <div className="flip-container">
                        <div className="flipper">
                            <img className="profile-pic front" src={profilePic} alt="Header Img" />
                            <img className="profile-pic back" src={flipPic} alt="Back Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};