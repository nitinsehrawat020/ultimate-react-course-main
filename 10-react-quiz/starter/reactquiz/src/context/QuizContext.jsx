import { createContext, useContext } from "react";

const QuizContext = createContext();
function QuizProvider({ children }) {
  return <QuizProvider.Provider>{children}</QuizProvider.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("your are trying to use context at the wrong place");
  return context;
}

export { useQuiz, QuizContext };
