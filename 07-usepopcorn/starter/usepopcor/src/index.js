import React from "react";
import { useState } from "react";

import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setRating} />
      <p>the movuie was rated {rating} star</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      // maxRating={5}
      messages={["terriable", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    {/* <App /> */}
    <Test />
  </React.StrictMode>
);
