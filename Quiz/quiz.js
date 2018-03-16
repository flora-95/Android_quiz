(function() {
  const myQuestions = [
    {
      question: "Once installed on a device, each Android application lives in_______?",
      answers: {
        a: "device memory ",
        b: "external memory ",
        c: "security sandbox"
      },
      correctAnswer: "c"
    },
    {
      question: "What are the Direct subclasses of Activity?",
      answers: {
        a: "ListActivity",
        b: "ActivityGroup",
        c: "FragmentActivity",
        d: "all the above"
        
      },
      correctAnswer: "d"
    },
    {
      question: "Which are the  screen densities in Android?",
      answers: {
        a: "low density",
        b: "medium density",
        c: "extra high density",
        d: "all of the above"
      },
      correctAnswer: "d"
    },
 {
      question: "Which Android version had the greatest share of the market as of January 2011?",
      answers: {
        a: "1.1",
        b: "1.5",
        c: "2.3",
        d: "3.4"
      },
      correctAnswer: "b"
    },
 {
      question:"What is a funny fact about the start of Android?",
      answers: {
        a: "It was orginaly going to be called UFO ",
        b: "The first version of Android was released without an actual phone on the market ",
        c: "Androids main purpose was to unlock your car door when you left the keys inside of it ",
        d: "Was going to be a closed source application to make more money for its company "
      },
      correctAnswer: "b"
    },
 {
      question: "What is contained within the manifest xml file?",
      answers: {
        a: "The permissions the app requires ",
        b: "The list of strings used in the app",
        c: " The source code ",
        d: "All other choices"
      },
      correctAnswer: "a"
    },
 {
      question: "What was the first phone released that ran the Android OS?",
      answers: {
        a: "Google gPhone",
        b: "T-Mobile G1",
        c: "Motorola Droid",
        d: "HTC Hero"
      },
      correctAnswer: "b"
    },
 {
      question: "what does .apk extension stand for?",
      answers: {
        a: "Application Package",
        b: "Application Programming Kit",
        c: "Android Proprietary Kit",
        d: "Android Package"
      },
      correctAnswer: "a"
    },
 {
      question: "The ___________ file specifies the layout of your screen?",
      answers: {
        a: "Layout file	",
        b: "Manifest file",
        c: "Strings XML",
        d: "R file"
      },
      correctAnswer: "a"
    },
{
      question: "What is Android-Positron?",
      answers: {
        a: "A command line tool to create Android project files 	",
        b: " A framework to create unit tests for Android projects ",
        c: " A resource editor to create user interface for Android applications ",
        d: "A tool to generate Android byte code from .class files "
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
