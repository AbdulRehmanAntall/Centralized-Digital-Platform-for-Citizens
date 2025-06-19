import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Landing.css';

function Landing() {
    const navigate = useNavigate();

    const handleEmailUs = () => {
        window.location.href = "mailto:abdulrehmanantall420@gmail.com?subject=Inquiry";
    }

    return (
        <div className="landing-main-container">
            <header className="landing-header">
                <div className="header-container">
                    <div className="logo" onClick={() => navigate("/")}>
                        <span className="logo-icon">🌆</span>
                        <span className="logo-text">CityPulse</span>
                    </div>
                    <nav className="nav-menu">
                        <button className="nav-link" onClick={() => navigate("/about")}>About</button>
                        <button className="nav-link" onClick={() => navigate("/signup")}>Sign Up</button>
                        <button className="nav-link primary" onClick={() => navigate("/login")}>Login</button>
                    </nav>
                </div>
            </header>

            <main className="landing-content">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Your City. <span className="highlight">Connected.</span></h1>
                        <p className="hero-subtitle">Real-time updates, community discussions, and local events - all in one place.</p>
                        <div className="cta-buttons">
                            <button className="cta-primary" onClick={() => navigate("/signup")}>Join Now</button>
                            <button className="cta-secondary">See How It Works</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="city-mockup"></div>
                    </div>
                </section>

                <section className="features-section">
                    <h2 className="section-title">Why CityPulse?</h2>
                    <p className="section-subtitle">Stay informed and engaged with what's happening in your community</p>
                    
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">💬</div>
                            <h3>Community Forum</h3>
                            <p>Connect and discuss with locals about city issues, projects, and improvements.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚦</div>
                            <h3>Live Updates</h3>
                            <p>Real-time alerts on traffic, construction, weather, and city services.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎪</div>
                            <h3>Local Events</h3>
                            <p>Discover and RSVP to events happening in your neighborhood.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🚨</div>
                            <h3>Safety Alerts</h3>
                            <p>Instant notifications about emergencies and important safety information.</p>
                        </div>
                    </div>
                </section>

                <section className="testimonials-section">
                    <h2 className="section-title">What Citizens Are Saying</h2>
                    <div className="testimonials-container">
                        <div className="testimonial">
                            <p>"CityPulse helped me avoid a major traffic jam and find a community cleanup event in my area!"</p>
                            <div className="testimonial-author">- Sarah K., Downtown Resident</div>
                        </div>
                        <div className="testimonial">
                            <p>"Finally an app that connects me to what's really happening in my city. The forum is amazing!"</p>
                            <div className="testimonial-author">- Miguel T., Westside</div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <h2>Ready to connect with your city?</h2>
                    <button className="cta-large" onClick={() => navigate("/signup")}>Get Started Today</button>
                </section>
            </main>

            <footer className="landing-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>CityPulse</h3>
                        <p>Connecting communities through technology.</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                            <a href="#" aria-label="Instagram">📷</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><button onClick={() => navigate("/about")}>About Us</button></li>
                            <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
                            <li><button onClick={handleEmailUs}>Contact</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li><button>Privacy Policy</button></li>
                            <li><button>Terms of Service</button></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CityPulse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Landing;