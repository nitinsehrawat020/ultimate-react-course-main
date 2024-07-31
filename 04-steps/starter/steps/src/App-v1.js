import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#fff" };
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  function HandlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function HandlNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button style={btnStyle} onClick={HandlePrevious}>
              previous
            </button>
            <button style={btnStyle} onClick={HandlNext}>
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
