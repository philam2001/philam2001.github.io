import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import gitIcon from '../assets/img/git.svg'
import igIcon from '../assets/img/ig.svg'
import linkedInIcon from '../assets/img/linkedin.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [navbarSpacing, setNavbarSpacing] = useState(18)
    const [gapBetweenLinksAndIcons, setGapBetweenLinksAndIcons] = useState(200);

    useEffect(
        () => {
            const onScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll);
        }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const calculateDynamicSpacing = () => {
        const screenWidth = window.innerWidth;
        console.log("Current screen width:", screenWidth);

        // Calculate dynamic gap between links and icons
        const dynamicGap = screenWidth > 1400 ? 340 : Math.max(8, 340 - (1400 - screenWidth) * 0.9);
        setGapBetweenLinksAndIcons(dynamicGap);

        if (screenWidth < 1150 && screenWidth > 700) {
            setNavbarSpacing(Math.max(8, 20 - (1150 - screenWidth) / 20));
        } else if (screenWidth <= 700) {
            setNavbarSpacing(8); // Minimum threshold
        } else {
            setNavbarSpacing(20); // Default for large screens
        }
    };

    useEffect(() => {
        calculateDynamicSpacing(); // Set initial values on mount

        window.addEventListener('resize', calculateDynamicSpacing); // Adjust on resize
        return () => window.removeEventListener('resize', calculateDynamicSpacing); // Cleanup on unmount
    }, []);

    const navbarStyle = {
        '--navbar-spacing': `${navbarSpacing}px`,
        '--gap-link-icons': `${gapBetweenLinksAndIcons}px`
    };


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} style={navbarStyle}>
            <Container fluid className="custom-container">
                <Navbar.Brand href="#home">
                    Phi Lam
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#food" className={activeLink === 'food' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('food')}>Food</Nav.Link>
                        <Nav.Link href="#travel" className={activeLink === 'travel' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('travel')}>Travel</Nav.Link>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://github.com/philam2001" target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="" /></a>
                                <a href="https://www.instagram.com/philamb/" target="_blank" rel="noopener noreferrer"><img src={igIcon} alt="" /></a>
                                <a href="https://www.linkedin.com/in/phi-yen-lam/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="" /></a>
                            </div>
                            <button className='vvd' onClick={() => window.location.href = 'mailto:lamyenphi14@gmail.com'}
                            ><span>Let's Connect</span></button>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
}