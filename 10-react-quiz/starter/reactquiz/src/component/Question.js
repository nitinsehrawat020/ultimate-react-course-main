import { useQuiz } from "../context/QuizContext";
import Option from "./Option";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Option />
    </div>
  );
}

export default Question;
