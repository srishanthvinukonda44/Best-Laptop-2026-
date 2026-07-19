var STEPS = [
  {
    title: "Run an AI language model locally",
    desc: "Install Ollama and download the Gemma model — this executes a real AI model directly on your laptop, no internet required after setup.",
    speech: "First, we install Ollama and pull down the Gemma model. This is the engine that runs entirely on your machine — nothing gets sent to the cloud."
  },
  {
    title: "Build your own chatbot interface",
    desc: "Set up VS Code with Python to create a personalized messaging environment for talking to your local model.",
    speech: "Next, open VS Code and set up a small Python interface — this is the chat window you'll actually type your questions into."
  },
  {
    title: "Add your lecture notes to the knowledge base",
    desc: "Use AnythingLLM to import your course materials — PDFs, slides, notes — into the system.",
    speech: "Now we feed it your own lecture notes and slides using AnythingLLM, so it has real course material to draw from."
  },
  {
    title: "Connect the chatbot to those lecture notes",
    desc: "Enable retrieval so the model pulls relevant information from your notes when it answers, instead of guessing.",
    speech: "This step links the chatbot to your notes through retrieval — so its answers are grounded in what you actually studied."
  },
  {
    title: "Ask questions about your syllabus",
    desc: "Get answers using only your own lecture notes — accurate to your specific course, not generic internet answers.",
    speech: "Now you can ask it anything about your syllabus, and it answers using only your own material — no generic internet guesses."
  },
  {
    title: "Everything runs completely offline",
    desc: "No internet connection required once it's set up — your notes and questions never leave your laptop.",
    speech: "And the best part: once it's set up, this runs completely offline. Your notes and questions never leave your laptop."
  }
];

var stepsGrid = document.getElementById('stepsGrid');
var speechText = document.getElementById('speechText');
var progressFill = document.getElementById('progressFill');
var activeIndex = -1;

STEPS.forEach(function (step, i) {
  var card = document.createElement('div');
  card.className = 'step-card';
  card.innerHTML =
    '<div class="step-num">' + (i + 1) + '</div>' +
    '<div>' +
      '<div class="step-title">' + step.title + '</div>' +
      '<div class="step-desc">' + step.desc + '</div>' +
    '</div>';
  card.addEventListener('click', function () { selectStep(i); });
  stepsGrid.appendChild(card);
});

function selectStep(i) {
  activeIndex = i;
  var cards = stepsGrid.querySelectorAll('.step-card');
  cards.forEach(function (c, idx) {
    c.classList.toggle('active', idx === i);
  });

  speechText.style.opacity = 0;
  setTimeout(function () {
    speechText.textContent = STEPS[i].speech;
    speechText.style.opacity = 1;
  }, 150);

  var progress = ((i + 1) / STEPS.length) * 100;
  progressFill.style.width = progress + '%';
}

// Auto-select the first step after a short delay so the page doesn't feel static.
setTimeout(function () { selectStep(0); }, 600);