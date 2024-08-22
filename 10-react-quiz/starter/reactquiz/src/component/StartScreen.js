function StartScreen({ questionNo, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questionNo} question to test your Reat mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
