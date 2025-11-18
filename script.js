document.getElementById("generate").onclick = () => {
  const text = document.getElementById("prompt").value;

  // Fake AI results
  document.getElementById("summary").innerText = "Summary: " + text.slice(0, 50) + "...";
  document.getElementById("flashcards").innerText = "Flashcard 1: Q: Example? A: Example";
  document.getElementById("quizzes").innerText = "Quiz 1: Q: Example? Options: A,B,C Answer: A";

  alert("AI results simulated!");
};
