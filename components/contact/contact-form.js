import { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  function sendMessageHendler(event) {
    event.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHendler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => {
                setEnteredEmail(event.target.value);
              }}
            ></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              required
              value={enteredName}
              onChange={(event) => {
                setEnteredName(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="message"
            id="message"
            required
            value={enteredMessage}
            onChange={(event) => {
              setEnteredMessage(event.target.value);
            }}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button> Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
