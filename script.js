// all variables for the html id's
const startButton = document.getElementById("start-quiz-btn");
const welcomeText = document.getElementById("welcome-text");
const containerDiv = document.getElementById("section-container");
const codingTitle = document.getElementById("coding-title");
const codingQuestions = document.getElementById("welcome-text");
//html id end

//adding question 1 dynamically
let firstQuestionPara = document.createElement("h3");
firstQuestionPara.innerText =
  "Which tag is used to create a paragraph in HTML?";
firstQuestionPara.className = "firstQ-para";
firstQuestionPara.style.display = "none";
containerDiv.appendChild(firstQuestionPara);
//question 1 end

//event listener to start a quiz (start quiz button)
startButton.addEventListener("click", () => {
  if (welcomeText.style.display === "none") {
    welcomeText.style.display = "block";
    codingTitle.style.display = "block";
  } else {
    welcomeText.style.display = "none";
    codingTitle.style.display = "none";
  }
});
//start quiz btn end
