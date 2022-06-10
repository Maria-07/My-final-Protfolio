import emailjs from "@emailjs/browser";
import React from "react";
import { toast } from "react-toastify";

// import contact data
import { contact } from "../data";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(
        `service_oxolyqq`,
        "template_9i0515t",
        e.target,
        "e-ERKG1TT9e2OsvUw"
      )
      .then(
        (result) => {
          console.log(result);
          toast.dark(
            "Message Sent, We will get back to you shortly",
            result.text
          );
        },
        (error) => {
          toast.dark("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle"></p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-8 w-full max-w-[780px]"
          >
            <div className="flex gap-8">
              <input
                className="input"
                name="name"
                type="text"
                placeholder="Your name"
              />
              <input
                className="input"
                type="email"
                name="user_email"
                placeholder="Your email"
              />
            </div>
            <input className="input" type="text" placeholder="Subject" />
            <textarea
              name="message"
              className="textarea"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg text-primary hover:text-accent bg-accent hover:bg-secondary-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
