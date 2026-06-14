import "../AboutContact.css";

function About() {
  return (
    <div className="container-page">

      <h1>About NayePankh Foundation</h1>

      <p>
        NayePankh Foundation is committed to empowering
        underprivileged communities through education,
        healthcare, skill development and social welfare.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To create equal opportunities for every
            individual through sustainable initiatives.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            A society where every child and family
            can achieve their full potential.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;