import "../Home.css";
import { useNavigate } from "react-router-dom";
import { FaHandsHelping, FaGraduationCap, FaHeartbeat } from "react-icons/fa";

function Home() {
     const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>NayePankh Foundation</h1>

          <p>
            Empowering Lives Through Education, Healthcare,
            Women Empowerment & Community Development.
          </p>

          <button>Join Our Mission</button>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Volunteers</p>
        </div>

        <div className="stat-card">
          <h2>2000+</h2>
          <p>Lives Impacted</p>
        </div>

        <div className="stat-card">
          <h2>150+</h2>
          <p>Events Conducted</p>
        </div>

      </section>

      {/* Initiatives */}
      <section className="initiatives">

        <h2>Our Initiatives</h2>

        <div className="initiative-grid">

          <div className="initiative-card">
            <FaGraduationCap className="icon" />
            <h3>Education</h3>
            <p>
              Supporting children's education through
              books, mentoring and scholarships.
            </p>
          </div>

          <div className="initiative-card">
            <FaHeartbeat className="icon" />
            <h3>Healthcare</h3>
            <p>
              Conducting health camps and awareness
              programs for underprivileged communities.
            </p>
          </div>

          <div className="initiative-card">
            <FaHandsHelping className="icon" />
            <h3>Community Support</h3>
            <p>
              Helping families through volunteering,
              donations and social initiatives.
            </p>
          </div>

        </div>

      </section>

      {/* Gallery */}
     <section className="gallery">
  <h2>Our Impact</h2>

  <div className="gallery-grid">

    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
            alt="Education"
          />
        </div>

        <div className="flip-card-back">
          <h3>Education Drive</h3>
          <p>
            Distributed books and educational
            resources to over 500 students.
          </p>
        </div>

      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Healthcare"
          />
        </div>

        <div className="flip-card-back">
          <h3>Healthcare Camp</h3>
          <p>
            Organized free health checkups
            and awareness sessions.
          </p>
        </div>

      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900"
            alt="Community"
          />
        </div>

        <div className="flip-card-back">
          <h3>Community Support</h3>
          <p>
            Empowered local communities through
            volunteering and outreach programs.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
      {/* Call To Action */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#f97316",
          color: "white"
        }}
      >
        <h2>Become A Volunteer Today</h2>

        <p style={{ marginTop: "15px" }}>
          Together we can create meaningful change.
        </p>

        <button 
          onClick={() => navigate("/volunteer")}

          style={{
            marginTop: "20px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer"
          }}
        >
          Register Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">

        <h3>NayePankh Foundation</h3>

        <p>
          Creating Better Communities Through Service,
          Education and Empowerment.
        </p>

        <p style={{ marginTop: "10px" }}>
          © 2026 NayePankh Foundation. All Rights Reserved.
        </p>

      </footer>
    </>
  );
}

export default Home;