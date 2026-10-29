import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <form>
          <div>
            <label htmlFor="username">Name</label>
            <input type="text" placeholder="Enter name..." name="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter email..." name="username" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" rows={5}></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
