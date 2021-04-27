//________________ VARIABLES ________________//
const buttonBack = document.querySelector('#back')
const buttonToOne = document.querySelector('#overview-one')
const buttonToTwo = document.querySelector('#overview-two')
const buttonToThree = document.querySelector('#overview-three')

const buttonWelcome = document.querySelector('#welcome');

const buttonArticleOneOne = document.querySelector('#article-one-one');
const buttonArticleOneTwo = document.querySelector('#article-one-two');
const buttonDedicon = document.querySelector('#dedicon');
const buttonGroenHandicap = document.querySelector('#groenhandicap');

const buttonArticleTwo = document.querySelector('#article-two');
const buttonCrowdfund = document.querySelector('#crowdfund')

const buttonArticleThree = document.querySelector('#article-three');
const buttonWebinar = document.querySelector('#webinar')


//________________ BACK BUTTON ________________//
if (buttonBack) {
  buttonBack.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets als je terug wilt naar het overzicht, of druk op de TAB toets om verder te navigeren.'
    ];
    enableSpeech(explanation);
  })
};


//________________ HOME PAGE ________________//
// focus
if (buttonWelcome) {
  buttonWelcome.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets als je uitleg wilt over de website, of druk op de TAB toets om verder te navigeren.'
    ];
    enableSpeech(explanation);
  })
};

// click/enter
if (buttonWelcome) {
  buttonWelcome.addEventListener('click', (e) => {
    const explanation = [
      'Hoi Rosjee! Welkom op deze website.',
      'Het voorlezen van deze tekst duurt ongeveer 30 seconden.',
      'Deze website is een verbeterde versie van een deel van de website van de MaculaVereniging.',
      'Op deze website staan artikelen die ook op de website van de MaculaVereniging zijn verschenen.',
      'Je kunt met de TAB toets door de website navigeren.',
      'Als je op ENTER drukt, kun je een stuk tekst laten voorlezen.',
      'Veel plezier op deze website.',
      'Druk op de TAB toets om verder te gaan.'
    ];
    enableSpeech(explanation);
  })
};

// overview - first article
if (buttonToOne) {
  buttonToOne.addEventListener('focus', (e) => {
    const explanation = [
      'Artikel een.',
      'Dit artikel gaat over activiteiten in de buitenlucht.',
      'Druk op de ENTER toets om naar dit artikel te gaan, of druk op de TAB toets om verder te navigeren.'
    ];
    enableSpeech(explanation);
  })
};

// overview - second article
if (buttonToTwo) {
  buttonToTwo.addEventListener('focus', (e) => {
    const explanation = [
      'Artikel twee.',
      'Dit artikel gaat over de campagne stop stargardt.',
      'Druk op de ENTER toets om naar dit artikel te gaan, of druk op de TAB toets om verder te navigeren.'
    ];
    enableSpeech(explanation);
  })
};

// overview - third article
if (buttonToThree) {
  buttonToThree.addEventListener('focus', (e) => {
    const explanation = [
      'Artikel drie.',
      'Dit artikel gaat over de aankomende webinar.',
      'Druk op de ENTER toets om naar dit artikel te gaan.',
      'Dit is het laatste artikel op deze pagina.'
    ];
    enableSpeech(explanation);
  })
};


//________________ FIRST ARTICLE ________________//
// First part - focus
if (buttonArticleOneOne) {
  buttonArticleOneOne.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om het artikel te laten voorlezen.'
    ];
    enableSpeech(explanation);
  })
};

// First part - click
if (buttonArticleOneOne) {
  buttonArticleOneOne.addEventListener('click', (e) => {
    const explanation = [
      'Hoi Rosjee',
      'Het voorlezen van deze hele tekst duurt ongeveer 3 minuten.',
      'Deze tekst bestaat uit 4 delen.',
      'Het voorlezen van het eerste stuk duurt ongeveer 30 seconden.',
      'Dit artikel gaat over genieten in de buitenlucht en begint hier.',
      ' ',
      'Het mooie weer komt eraan. Maar wat doe je in coronatijd?',
      'Wel, een van de mogelijkheden is wandelen.',
      'Op de website van Dedicon vindt je een aantal tips voor buitenactiviteiten.',
      'Om te horen over het artikel op de website van Dedicon, kun je op de TAB toets drukken'
    ];
    enableSpeech(explanation);
  })
};

// Dedicon button - focus
if (buttonDedicon) {
  buttonDedicon.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om te horen waar het artikel van Dedicon over gaat.'
    ];
    enableSpeech(explanation);
  })
};

// Dedicon button - click
if (buttonDedicon) {
  buttonDedicon.addEventListener('click', (e) => {
    const explanation = [
      'Het artikel van Dedicon.',
      'Het voorlezen van deze tekst duurt ongeveer 30 seconden.',
      'In het artikel van Dedicon worden en aantal buitenactiviteiten besproken.',
      'Zo wordt er gesproken over meerdere wandelroutes, gemaakt voor mensen die blind of slechtziend zijn.',
      'Ook wordt er gesproken over speciale routes en rondleidingen in botanische tuinen en dierentuinen.',
      'Om verder te gaan, kun je op de TAB toets drukken.'
    ];
    enableSpeech(explanation);
  })
};

// Second part - focus
if (buttonArticleOneTwo) {
  buttonArticleOneTwo.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om het artikel verder te laten voorlezen.'
    ];
    enableSpeech(explanation);
  })
};

// Second part - click
if (buttonArticleOneTwo) {
  buttonArticleOneTwo.addEventListener('click', (e) => {
    const explanation = [
      'Verder voorlezen.',
      'Het voorlezen van deze tekst duurt ongeveer 30 seconden.',
      'Een andere site voor wandelingen is van het kenniscentrum Groen en Handicap.',
      'Om te horen over het artikel op de website van Groen en Handicap, kun je op de TAB toets drukken'
    ];
    enableSpeech(explanation);
  })
};

// Groen handicap button - focus
if (buttonGroenHandicap) {
  buttonGroenHandicap.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om te horen waar het artikel van Groen en Handicap over gaat.'
    ];
    enableSpeech(explanation);
  })
};

// Groen handicap button - click
if (buttonGroenHandicap) {
  buttonGroenHandicap.addEventListener('click', (e) => {
    const explanation = [
      'Het artikel van Groen en Handicap.',
      'Het voorlezen van deze tekst duurt ongeveer 1 minuut.',
      'Het artikel van Groen en Handicap benoemt twee wandelroutes, die ook toegankelijk zijn voor mensen die blind of slechtziend zijn.',
      'In het artikel van Groen en Handicap staat niet zo veel informatie over de routes. Beetje jammer.',
      'Ik ga daarom hier de twee routes aan je vertellen, en wat deze routes in grote lijnen inhouden.',
      'De eerste route is bij het Biesbosch bij Werkendam.',
      'Ze hebben bij het Biesbosch een belevingspad voor mensen die blind of slechtziend zijn.',
      'Het wandelpad is ongeveer 600 meter lang en heeft een geleiding.',
      'Ook is er een braille-reliëfkaart zodat je zelf je weg kunt vinden over dit wandelpad.',
      'Ook de route langs de Koninklijke Weg schijnt leuk te zijn.',
      'Dit is een wandelroute van het Koninklijk Paleis Noordeinde in Den Haag, via Paleis Soestdijk, naar Paleis Het Loo in Apeldoorn.',
      'Misschien ook wel een leuk stuk om hard te lopen met Running Blaajnd?',
      ' ',
      'Dit is het einde van het artikel.',
      'Om terug gaan naar het overzicht met artikelen, kun je met de muis bovenaan het scherm klikken',
      'Maar je kunt ook drie keer op de TAB toets drukken.'
    ];
    enableSpeech(explanation);
  })
};


//________________ SECOND ARTICLE ________________//
// focus
if (buttonArticleTwo) {
  buttonArticleTwo.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om het artikel te laten voorlezen.'
    ];
    enableSpeech(explanation);
  })
};

// click
if (buttonArticleTwo) {
  buttonArticleTwo.addEventListener('click', (e) => {
    const explanation = [
      'Hoi Rosjee',
      'Het voorlezen van deze hele tekst duurt ongeveer 1 minuut.',
      'Deze tekst bestaat uit 1 deel',
      'Dit artikel gaat over de campagne Stop Stargardt en begint hier.',
      ' ',
      'De Stichting Oogfonds Nederland start een crowdfundingactie voor het inzamelen van geld voor het onderzoek van professor Rob Collin: de moleculaire pleister.',
      'Professor Collin is verbonden aan de Radboud UMC.',
      'Centraal in deze crowdfunding staat Corné, een twaalfjarige jongen wiens droom het is schrijver te worden.',
      'Corné heeft de ziekte van Stargardt. Hij heeft al meerdere kinderboeken geschreven, maar zijn boek Pak ’t bot is speciaal voor deze campagne naar de drukker gegaan.',
      'De aftrap van deze crowdfunding is de overhandiging op 29 april van het boek aan Corné door Ronald Giphart.',
      'De campagne zal in de maanden mei en juni in de lucht zijn.',
      ' ',
      'Dit is het einde van het artikel.',
      'Om naar de crowdfunding pagina te gaan, kun je op de TAB toets drukken'
    ];
    enableSpeech(explanation);
  })
};

// crowdfund
if (buttonCrowdfund) {
  buttonCrowdfund.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om naar de crowdfunding pagina te gaan',
      'Je kunt ook terug gaan naar het overzicht met artikelen.',
      'Om terug gaan naar het overzicht met artikelen, kun je met de muis bovenaan het scherm klikken',
      'Maar je kunt ook drie keer op de TAB toets drukken.'
    ];
    enableSpeech(explanation);
  })
};


//________________ THIRD ARTICLE ________________//
// focus
if (buttonArticleThree) {
  buttonArticleThree.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om het artikel te laten voorlezen.'
    ];
    enableSpeech(explanation);
  })
};

// click
if (buttonArticleThree) {
  buttonArticleThree.addEventListener('click', (e) => {
    const explanation = [
      'Hoi Rosjee',
      'Het voorlezen van deze hele tekst duurt ongeveer 1 minuut.',
      'Deze tekst bestaat uit 1 deel',
      'Dit artikel gaat over de aankomende webinar en begint hier.',
      ' ',
      'Save the date! Op zaterdag 5 juni aanstaande is er weer een webinar met boeiende lezingen.',
      'We zijn nog volop bezig met het programma, maar dokter Yara Lechanteur, oogarts in het Radboud UMC, in Nijmegen, zal een van de sprekers zijn.',
      'Heeft u de vorige webinar met onder andere de lezing "Kijkend naar de medische ontwikkelingen op het gebied van Macula Degeneratie" van professor dokter Camiel Boon gemist?',
      'Deze kunt u nog zien en beluisteren op de website.',
      ' ',
      'Dit is het einde van het artikel.',
      'Om naar de crowdfunding pagina te gaan, kun je op de TAB toets drukken'
    ];
    enableSpeech(explanation);
  })
};

// webinar
if (buttonWebinar) {
  buttonWebinar.addEventListener('focus', (e) => {
    const explanation = [
      'Druk op de ENTER toets om naar de video van de vorige webinar te gaan',
      'Je kunt ook terug gaan naar het overzicht met artikelen.',
      'Om terug gaan naar het overzicht met artikelen, kun je met de muis bovenaan het scherm klikken',
      'Maar je kunt ook drie keer op de TAB toets drukken.'
    ];
    enableSpeech(explanation);
  })
};


//________________ SPEECH FUNCTION ________________//
function enableSpeech(explanation) {
  explanation.forEach((explainedPart) => {
    const speech = new SpeechSynthesisUtterance(explainedPart);
    speech.rate = 0.95;
    speech.pitch = 0.95;
    window.speechSynthesis.speak(speech);
  })
};
