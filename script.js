document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate").onclick = () => {
    const text = document.getElementById("prompt").value;

    if (!text.trim()) {
      alert("Please type something first!");
      return;
    }

    // Fake summary
    document.getElementById("summary").innerText = "Summary: " + text.slice(0, 100) + "...";

    // Fake flashcards
    document.getElementById("flashcards").innerText = `
Flashcard 1: Q: What is this about? A: ${text.slice(0, 30)}...
Flashcard 2: Q: Another question? A: ${text.slice(30, 60)}...
`;

    // Fake quiz
    document.getElementById("quizzes").innerText = `
Quiz 1: Q: What is the main point? Options: A,B,C Answer: A
Quiz 2: Q: What is a detail? Options: A,B,C Answer: B
`;

    alert("AI results simulated!");
  };
});