import { useState } from "react";

import HeroIMG from "./images/illustration-woman-online-mobile.svg";
import Box from "./images/illustration-box-desktop.svg";
import MobileBackground from "./images/bg-pattern-mobile.svg";
import Down from "./images/icon-arrow-down.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="accordion-container">
        <div className="hero-container">
          <img src={HeroIMG} alt="hero" />
          <img src={MobileBackground} alt=" hero" />
        </div>
        <h1>FAQ</h1>
        <ul>
          <li>
            <h3>How man team members can I invite?</h3>
            <div></div>
            <p>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </li>
          <li>
            <h3>What is the maximum file upload size?</h3>
            <div></div>
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </li>
          <li>
            <h3>How do I reset my password?</h3>
            <div></div>
            <p>
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </li>
          <li>
            <h3>Can I cancel my subscription?</h3>
            <div></div>
            <p>
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </li>
          <li>
            <h3> Do you provide additional support?</h3>
            <div></div>
            <p>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
