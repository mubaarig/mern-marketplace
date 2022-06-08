import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  usePrompt,
  useBlocker,
  Routes
} from "react-router-dom";

// Sometimes you want to prevent the user from
// navigating away from a page. The most common
// use case is when they have entered some data
// into a form but haven't submitted it yet, and
// you don't want them to lose it.

export default function PreventingTransitionsExample() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/two">Two</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" exact children={<BlockingForm />} />
        <Route path="/one" children={<h3>One</h3>} />
        <Route path="/two" children={<h3>Two</h3>} />
      </Routes>
    </Router>
  );
}

function BlockingForm() {
  let [isBlocking, setIsBlocking] = useState(false);

  usePrompt(
    "Hello from usePrompt -- Are you sure you want to leave?",
    isBlocking
  );
  // useBlocker(
  //   () => "Hello from useBlocker -- are you sure you want to leave?",
  //   isBlocking
  // );

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <p>
        Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
      </p>

      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={event => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  );
}
