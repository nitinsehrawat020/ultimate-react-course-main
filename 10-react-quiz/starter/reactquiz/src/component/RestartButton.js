import { useQuiz } from "../context/QuizContext";

function RestartButton() {
  const { dispatch } = useQuiz();
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default RestartButton;
