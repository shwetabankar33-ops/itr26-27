import heroImage from "../assets/hero.png";

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-text">
          <h1>Welcome To My Website</h1>
          <p>
            This is a simple React website made using components, CSS, router,
            and a responsive navbar.
          </p>
          <a className="button" href="#contact">Contact Me</a>
        </div>

        <img src={heroImage} alt="Website banner" />
      </section>

      <section className="section" id="about">
        <h2>About Us</h2>
        <p>
          Our website is created to show basic web page sections like home,
          about, services, and contact. It uses React for structure and CSS for
          styling.
        </p>
      </section>

      <section className="section" id="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Design</h3>
            <p>We create simple and attractive website designs.</p>
          </div>

          <div className="card">
            <h3>Responsive Page</h3>
            <p>The website can adjust on mobile and desktop screens.</p>
          </div>

          <div className="card">
            <h3>Easy Contact</h3>
            <p>Users can easily find contact information on the page.</p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Contact Us</h2>
        <p>Email: mywebsite@example.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </>
  );
}

export default Home;
