import "../AboutContact.css";

function Contact() {
  return (
    <div className="container-page">

      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you. Reach out to us for
        volunteering opportunities, partnerships, donations,
        or any queries regarding NayePankh Foundation.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>info@nayepankh.org</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Mumbai, Maharashtra</p>
        </div>

      </div>

      <iframe
        title="map"
        height="400"
        src="https://maps.google.com/maps?q=VilleParle&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>

      <div className="impact-banner">
        <h2>Let's Create Change Together</h2>

        <p>
          Every volunteer, donor and supporter plays an
          important role in transforming lives and building
          stronger communities.
        </p>
      </div>

    </div>
  );
}

export default Contact;