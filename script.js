document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let score = 0;
  const answers = {
    q1: "Blue",
    q2: "8"
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  localStorage.setItem("quizScore", score);
  window.location.href = "result.html";
});
