function progress({ index, numQuestion, points, maxPossiblePoint, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question
        <strong>
          {index + 1} /{numQuestion}
        </strong>
      </p>
      <p>
        <strong>
          {" "}
          {points}/{maxPossiblePoint}
        </strong>
      </p>
    </header>
  );
}

export default progress;
