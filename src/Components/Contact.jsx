import "./Contact.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <span>GET IN TOUCH</span>

        <h2>
          Contact <b>Me</b>
        </h2>

        <p>
          Feel free to contact me for internships, projects or collaborations.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-content">

          <div className="contact-left">

            <h3>Let's Connect</h3>

            <p>
              Whether you have a question, a project idea, or just want to say
              hello, feel free to contact me.
            </p>

            <div className="contact-card">
              <div className="contact-icon email">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>

                <a href="mailto:yourmail@gmail.com">
                  yourmail@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon whatsapp">
                <FaWhatsapp />
              </div>

              <div>
                <h4>WhatsApp</h4>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 9876543210
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon github">
                <FaGithub />
              </div>

              <div>
                <h4>GitHub</h4>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/yourusername
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon linkedin">
                <FaLinkedin />
              </div>

              <div>
                <h4>LinkedIn</h4>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>

          </div>

          <div className="contact-right">

            <h3>Send a Message</h3>

            <form>

              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
              />

              <label>Message</label>

              <textarea
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">
                <FaPaperPlane /> &nbsp; Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;