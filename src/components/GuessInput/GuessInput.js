import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          id="guess-input"
          type="text"
          value={tentativeGuess}
          minLength={5} //not working as of now because of toUpperCase(), so pattern is being used
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word (Use alphabets only)"
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
