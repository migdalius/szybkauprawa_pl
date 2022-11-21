import { useRef, useState } from "react";
import "./contactContainer.css";
import emailjs from "@emailjs/browser";

export const ContactContainer = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bisivyp",
        "template_9jcj0aw",
        formRef.current,
        "GKUjY_XFtCoXyLzdx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="app__contact-main-container">
      <div className="app__contact-contact-container">
        <div className="app__contact-form-container">
          <h1 className="app__contact-contact-title">Masz pytania?</h1>
          <p>Na każde pytanie odpowiadamy w ciągu 24h</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Imię lub Login użytkownika"
              name="user_name"
              className="app__contact-input"
              required
            />
            <input
              type="text"
              placeholder="Temat Rozmowy"
              name="user_subject"
              className="app__contact-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="app__contact-input"
              required
            />
            <textarea
              rows="5"
              placeholder="Treść wiadomości"
              name="message"
              className="app__contact-textarea"
              required
            />

            <button className="app__contact-button">Wyślij</button>
          </form>
        </div>
        {done && (
          <span class="app__contact-success-alert">
            Dziękujemy za wiadomość
          </span>
        )}
      </div>
    </div>
  );
};

export default ContactContainer;
