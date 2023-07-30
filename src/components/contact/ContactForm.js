import axios from "axios";
import { useState } from "react";
const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      await axios({
        method: "post",
        url: "/api/hello",
        data: {
          email: email,
          name: name,
          message: message,
        },
      });
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="fields w-full float-left clear-both h-auto">
      <form
        className="contact_form"
        id="contact_form"
        onSubmit={(e) => onSubmit(e)}
      >
        <div
          className={error ? "empty_notice" : "returnmessage"}
          style={{ display: error == null ? "none" : "block" }}
        >
          <span>
            {error
              ? "Please Fill Required Fields"
              : "Your message has been received, We will contact you soon."}
          </span>
        </div>
        <div className="first w-full float-left">
          <ul className="list-none">
            <li className="w-full mb-[30px] float-left">
              <input
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
                id="name"
                type="text"
                placeholder="Name"
              />
            </li>
            <li className="w-full mb-[30px] float-left">
              <input
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
                id="email"
                type="email"
                placeholder="Email"
              />
            </li>
          </ul>
        </div>
        <div className="last">
          <textarea
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
            id="message"
            placeholder="Message"
          />
        </div>
        <div className="tokyo_tm_button" data-position="left">
          <button type="submit">Send Message</button>
        </div>
        {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
      </form>
    </div>
  );
};
export default ContactForm;
