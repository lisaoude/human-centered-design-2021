// variables
const buttonWelcome = document.querySelector('#welcome');
const buttonDedicon = document.querySelector('#dedicon');
const buttonGroenHandicap = document.querySelector('#groenhandicap');

// welcome explanation
buttonWelcome.addEventListener('focus', (e) => {
  const explanation = [
    'Druk op enter voor uitleg over de website',
  ];
  enableSpeech(explanation);
});

buttonWelcome.addEventListener('click', (e) => {
  const explanation = [
    'Hoi Rosjee! Welkom op deze website.',
    'Het voorlezen van deze tekst duurt ongeveer 30 seconden.',
    'Deze website is een verbeterde versie van een deel van de website van de MaculaVereniging.',
    'Je kunt met de TAB toets door de website navigeren.',
    'Als je op ENTER drukt, kun je een stuk tekst laten voorlezen.',
    'Veel plezier op deze website.',
    'Druk op de TAB toets om verder te gaan.',
  ];
  enableSpeech(explanation);
});

// article - dedicon
buttonDedicon.addEventListener('click', (e) => {
  const explanation = [
    'Hoi Rosjee.',
    'Het voorlezen van deze tekst duurt ongeveer 30 seconden.',
    'In het artikel van Dedicon worden en aantal buitenactiviteiten besproken.',
    'Zo wordt er gesproken over meerdere wandelroutes, gemaakt voor mensen die blind of slechtziend zijn.',
    'Ook wordt er gesproken over speciale routes en rondleidingen in botanische tuinen en dierentuinen.',
    'Als je dit artikel wilt bezoeken, kun je klikken op de blauwe knop hieronder.',
  ];
  enableSpeech(explanation);
});

// article - groen handicap
buttonGroenHandicap.addEventListener('click', (e) => {
  const explanation = [
    'Hoi Rosjee.',
    'Het voorlezen van deze tekst duurt ongeveer 1 minuut.',
    'Het artikel van Groen en Handicap benoemt twee wandelroutes, die ook toegankelijk zijn voor mensen die blind of slechtziend zijn.',
    'In het artikel van Groen en Handicap staat niet zo veel informatie over de routes. Beetje jammer.',
    'Ik ga daarom hier de twee routes aan je vertellen, en wat deze routes in grote lijnen inhouden.',
    'De eerste route is de Koninklijke Weg.',
    'Dit is een wandelroute van het Koninklijk Paleis Noordeinde in Den Haag, via Paleis Soestdijk, naar Paleis Het Loo in Apeldoorn.',
    'Ook het Biesbosch bij Werkendam schijnt leuk te zijn.',
    'Ze hebben bij het Biesbosch een belevingspad voor mensen die blind of slechtziend zijn.',
    'Het wandelpad is ongeveer 600 meter lang en heeft een geleiding.',
    'Ook is er een braille-reliëfkaart zodat je zelf je weg kunt vinden over dit wandelpad.',
    'In het artikel van Groen en Handicap staat niet zo veel,',
    'Maar als je dit artikel wilt bezoeken, kun je klikken op de rode knop hieronder.',
  ];
  enableSpeech(explanation);
});

// general speech function
function enableSpeech(explanation) {
  explanation.forEach((explainedPart) => {
    const speech = new SpeechSynthesisUtterance(explainedPart);
    speech.rate = 0.95;
    speech.pitch = 0.95;
    window.speechSynthesis.speak(speech);
  });
}