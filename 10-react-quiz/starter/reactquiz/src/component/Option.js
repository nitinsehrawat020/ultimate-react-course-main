function Option({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className="btn btn-option"
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
