import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feedback.css";
// import Sidebar from "../components/Sidebar";

const Feedback = () => {
  return (
    <div className="feedback-container">
      {/* <Sidebar />  */}

      <h2 className="text-primary">Feedback Page</h2>
      <p className="lead">Monthly feedback on your budget plan</p>

      <div className="card p-4 my-3">
        <h5>How easy was it to navigate and use the website?</h5>
        <div>
          <input type="radio" id="easy" name="navigate" value="easy" />
          <label htmlFor="easy" className="ms-2">
            Easy
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="difficult"
            name="navigate"
            value="difficult"
          />
          <label htmlFor="difficult" className="ms-2">
            Difficult
          </label>
        </div>
      </div>

      <div className="card p-4 my-3">
        <h5>
          How helpful is the website in managing your budget and achieving your
          saving goals? (1 to 5)
        </h5>
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num} className="me-3">
            <input type="radio" name="helpfulness" value={num} /> {num}
          </label>
        ))}
      </div>

      <div className="card p-4 my-3">
        <h5>
          Were there any features you found confusing or difficult to use?
        </h5>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <div className="card p-4 my-3">
        <h5>
          Is there any feature you wish the website had to better support your
          saving goals?
        </h5>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <div className="card p-4 my-3">
        <h5>Would you recommend this website to others? Why or why not?</h5>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <div className="card p-4 my-3">
        <h5>What's one thing you wish this website did better?</h5>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Type your message..."
        ></textarea>
      </div>

      <div className="card p-4 my-3">
        <h5>How satisfied are you with the website overall? (1 to 5)</h5>
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={num} className="me-3">
            <input type="radio" name="satisfaction" value={num} /> {num}
          </label>
        ))}
      </div>

      <button className="btn btn-primary">Confirm</button>
    </div>
  );
};

export default Feedback;
