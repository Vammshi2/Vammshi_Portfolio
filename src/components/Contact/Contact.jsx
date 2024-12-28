import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Enter your own web3 forms access key below
    formData.append("access_key", "c9452fa1-8932-42d8-8a39-1f9e18f0ce6a");

    // Send the form data using fetch
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    alert(res.message);

    // Clear the form after submission
    form.reset();
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Contact Me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            I'm open to full-stack development and data science roles. I'm seeking
            job opportunities where I can apply my skills in web technologies, data
            analysis, and machine learning. If you're looking for a passionate and
            dedicated developer, I'd love to contribute to your team!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" /> <p>t.vamshikrishna2@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" /> <p>+91 9848366562</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" /> <p>Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="project">Project/Job Inquiry</label>
          <select name="project" id="project" required>
            <option value="">--Please choose an option--</option>
            <option value="full-stack-project">Full-Stack Development Project</option>
            <option value="data-science-project">Data Science Project</option>
            <option value="job-opportunity">Job Opportunity</option>
            <option value="connection">Nothing, just for connection</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter your message here"
            id="message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
