document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generate").onclick = () => {
    const text = document.getElementById("prompt").value;
    const files = document.getElementById("fileUpload").files;
    const tags = document.getElementById("tags").value;

    if (!text && files.length === 0) {
      alert("Please type text or upload files first!");
      return;
    }

    // Fake summary
    document.getElementById("summary").innerText =
      "Summary: " + (text ? text.slice(0, 100) + "..." : "Uploaded files will be summarized here.");

    // Fake flashcards
    document.getElementById("flashcards").innerText =
      "Flashcard 1: Q: Example? A: Example\n" +
      "Flashcard 2: Q: Another? A: Example";

    // Fake quizzes
    document.getElementById("quizzes").innerText =
      "Quiz 1: Q: What is the main point? Options: A,B,C Answer: A\n" +
      "Quiz 2: Q: What is a detail? Options: A,B,C Answer: B";

    // Optional: show files uploaded in console (can be used later)
    if (files.length > 0) {
      console.log("Uploaded files:");
      for (let i = 0; i < files.length; i++) {
        console.log(files[i].name);
      }
    }

    // Optional: alert
    alert("AI results simulated!");
  };
});
