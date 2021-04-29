# Screenreader 2.0

---

_Al mijn testplannen, notulen, testverslagen en concepten zijn te vinden in [de Wiki](https://github.com/lisaoude/human-centered-design-2021/wiki)._

---

<!-- Screenreader hel -->
## :fire::computer::speech_balloon::fire: De screenreader hel

Als ik tijdens dit vak 1 ding heb geleerd is het wel dat **_screenreaders verschrikkelijke dingen zijn, die nooit echt doen wat je wil_**. Tuurlijk, het is super goed dat ze er zijn, maar de manier waarop ze werken is mij tot op de dag van vandaag een mysterie. De ene keer leest 'ie alleen dit, dan weer dat - en dat allemaal op dezelfde pagina. Ik kan zelfs verdwaald raken op een pagina als ik de screenreader gebruik, en dan kan ik nog 'gewoon' de pagina zien. 

</br>

Om elke week mijn gebruiker weer zó ontzettend te zien worstelen met onze testen, door die screenreader - het heeft echt m'n hart gebroken. Telkens verontschuldigde hij zich: _'Sorry, ik doe het fout.'_, _'Dat lukt me gewoon echt niet.'_. Ik kon wel gillen. Nee Roger, nee nee nee. Het ligt **_niet_** aan jou, maar aan ons. Wij als developers hebben jou gewoonweg gefaald. 

</br>

Deze worsteling met de screenreader trok elke week weer meer mijn aandacht. Het probleem lag niet bij Roger, die zijn werk niet meer kan doen omdat zijn ogen, maar boven al de technologie hem in de steek laat. De technologie is hier het probleem en wel het probleem dat ik ga oplossen.

</br>

---

<!-- Over de gebruiker -->
## :adult: Roger Ravelli  
Mijn exclusive design voor de oplossing van dit probleem is geheel ontworpen voor **_Roger Ravelli_**.  
Roger is 54 jaar. Hij houdt van hardlopen, beeldhouwen en lees graag een boek. Verder is hij fan van U2, Simple Minds en ook Reggae vindt hij leuk. Roger was tot maart 2021 werkzaam als Adviseur Duurzame Energie bij de Rijksdienst voor Ondernemend Nederland.  

</br>

Dertien jaar geleden werd er bij Roger maculadegeneratie vastgesteld. Dit is een oogaandoening waarbij de kegeltjes in de gele vlek (de macula lutea) in het centrale gedeelte van het netvlies van het oog afsterven. Hierdoor neemt de gezichtsscherpte af, maar er blijft wel sprake van rest visus: aan de zijkanten van het oog behoudt men zicht.  
Hieronder is te zien hoe maculadegeneratie zich uit bij Roger.

![hcd_macula_roger](https://user-images.githubusercontent.com/57795294/116569236-7ce34100-a909-11eb-8b12-6ad46eb2a314.png)

</br>

---

<!-- User Scenario -->
## :computer::speech_balloon: Roger's scenario  
_Alle punten zijn ook terug te vinden in de Wiki, bij [Testverslag week 1](https://github.com/lisaoude/human-centered-design-2021/wiki/%E2%9C%A8-Testverslag#wat-heb-ik-geleerd)._

- Roger wil graag weer data - wat dat dan ook mag zijn - kunnen 'zien'. Hij wil kunnen begrijpen wat er op een website staat, het overzicht behouden en weten wat hij kan verwachten. 
- Roger is aan het overstappen van inzoom software naar screenreaders - naar geheel geluid/spraak gericht dus.
- Roger wil graag informatie zien op een donkere achtergrond, wit is voor hem verblindend. Hierbij kan hij felle kleuren nog goed onderscheiden van de donkere achtergrond. 
- Omdat Roger nog iets kan zien met zijn linkeroog, is het fijn als alle content links staat. Op deze manier kan hij zich volledig focussen op links.
- Als Roger zijn computer gebruikt, gebruikt hij een combinatie van zijn toetsenbord, muis en screenreader. Het liefst wil hij zijn muis niet meer hoeven gebruiken. 

</br>

---

<!--  Exclusive Design Principles -->
## :dart: Exclusive Design Principles  
_[Alle Exclusive Design Principles kunnen ook hier worden teruggevonden](https://exclusive-design.vasilis.nl/)_

<!-- Study Situation -->
### :mag: Study Situation  
#### Wat?
Wat is de context van de persoon waarvoor wordt ontworpen? Wat speelt er precies? Wat vindt de persoon leuk

</br>

#### In mijn eindproduct
Mijn eindproduct is geheel ontworpen voor de situatie die is opgebouwd met de volgende punten:
- Roger, 54 jaar 
- Leergierig & open persoon
- Progressieve oogaandoening
- Kan redelijk goed overweg met technologie 
- Worstelt nog vaak met zijn screenreader
- Wil graag gaan overstappen naar spraak/geluid alleen en zo min mogelijk gebruiken **hoeven** te maken van zijn rest visus
- Betrokken als ambassadeur bij de MaculaVereniging 

</br>

<!-- Ignore Conventions -->
### :no_entry: Ignore Conventions  
#### Huh?
Negeer de standaard regels! Uit het raam ermee! Omdenken!

</br>

#### In mijn eindproduct
**Kleuren**
Binnen mijn eindproduct maak ik gebruik van een aantal kleuren die ik [het getest met Roger](https://github.com/lisaoude/human-centered-design-2021/wiki/%E2%9C%A8-Testverslag-%232). Ik gebruik kleuren die goed werken voor Roger, maar volgens het W3C een complete no-go zouden moeten zijn.  

</br>

**Plaatsing & Vergroting**
Daarnaast plaats ik alles aan de linkerkant van het scherm en is alles standaard zo'n 200% ingezoomd. Door alles aan de linkerkant van het scherm te plaatsen, kan Roger met de rest visus in zijn linkeroog focussen op 1 plek. Door alles 200% in te zoomen, zijn de letters groot en knoppen opvallend en makkelijk te vinden.

</br>

**Zicht ter ondersteuning**
Waar het normaliter op een website voor 90% draait om wat er te zien is, is daar binnen mijn eindproduct geen sprake van. Roger is aan het overstappen van een combinatie tussen zicht & geluid, naar alleen geluid. Mijn eindproduct overbrugt deze stap, omdat zicht hier puur ter ondersteuning is toegevoegd. Zicht is niet nodig om door de pagina te kunnen navigeren en deze te kunnen gebruiken, omdat alles op de pagina zijn eigen instructie heeft en alles wordt voorgelezen aan Roger.

</br>

**Navigatie**
Om soepel door een reguliere pagina te kunnen navigeren, is het gebruik van een muis bijna noodzakelijk. Binnen mijn eindproduct is dit echter niet zo: de muis is geheel overbodig geworden. Voor de optimale ervaring, is een toetsenbord juist het hoofdmiddel om te navigeren.

</br>

<!-- Prioritise Identity  -->
### :adult::woman: Prioritise Identity  
#### Watte?
Hoe komen Roger's identiteit en mijn identiteit terug in het eindproduct?

</br>

**Roger's identiteit**
In mijn eindproduct is allereerst een heel belangrijk stukje Roger terug te vinden: zijn naam wordt goed uitgesproken. Andere screenreaders zeiden zijn naam vaker wel dan niet verkeerd, waardoor het 'Rodger' werd in plaats van 'Rosjee'.

</br>

Ook is Roger terug te vinden in de tekstjes die worden voorgelezen, nog voordat de échte tekst wordt voorgelezen. In dit eerste tekstje wordt een Roger vertelt hoelang het stuk dat zal worden voorgelezen ongeveer duurt. Roger vond het [lastig om het overzicht te kunnen behouden op een website](https://github.com/lisaoude/human-centered-design-2021/wiki/%E2%9C%A8-Testverslag-%232#algemeen), vooral als alles ingezoomd is. Als er dan een tekst werd voorgelezen, had hij geen idee hoelang het zou duren. 

</br>

Verder is Roger terug te vinden in de content in mijn eindproduct: de content van de website van de MaculaVereniging waar hij bij aangesloten is.

</br>

**Mijn identiteit**
Dit eindproducuct is voortgekomen uit een ontzettend gevoel van compassie, pure frustratie en 'dit **MOET** toch beter kunnen?'. Ik heb er dan ook alles aan gedaan en zoveel mogelijk liefde gegeven aan de monotone Chrome mevrouw om het geheel zo prettig mogelijk te kunnen maken voor Roger. Er is ook een stukje van mij terug te vinden in de poging tot het eindproduct nog een beetje aantrekkelijk voor het oog te maken, maar ook in de consistentie, structuur en overzicht - drie punten waar ik zelf altijd veel baat bij heb en zelfs gelukkig van word.

</br>

<!-- Add Nonsense -->
### :crystal_ball: Add Nonsense  
#### Heh?
Niet alles hoeft altijd maar functioneel te zijn! Voeg er een beetje :sparkles:onzin:sparkles: aan toe.

</br>

#### In mijn eindproduct
Aan de ene kant is het hele visuele deel van mijn eindproduct nonsense - Roger kan het grootste deel ervan niet zien. Aan de andere kant is dit deel niet helemaal nonsense, omdat het Roger wat houvast kan bieden tijdens de overstap van de combinatie tussen zicht en geluid naar alleen geluid. 

</br>

Een stukje nonsense kan ook worden teruggevonden onder de knop voor het artikel van Groen en Handicap [in mijn eindproduct](https://lisaoude.github.io/human-centered-design-2021/artikel1). Hier wordt verteld dat het 'een beetje jammer' is dat er zo weinig informatie op de website wordt gegeven.

</br>

Ik wilde niet te veel nonsense toevoegen om het geheel duidelijk en overzichtelijk te houden voor Roger. Roger is een vrij serieuze, nette man en het zou voor hem niet prettig zijn als er bijvoorbeeld iets aan de rechterkant van het scherm zou gebeuren. Dit zou zijn aandacht hiernaartoe trekken, voor verwarring zorgen en weer veel energie vragen door zijn rest visus te moeten gebruiken om te kunnen zien wat er gebeurt.

</br>

---

<!-- Testen -->
## :mag: Testen

Al mijn testplannen, notulen en testverslagen zijn terug te vinden in de [Wiki](https://github.com/lisaoude/human-centered-design-2021/wiki)

</br>

---

<!--  Live Link -->
## :globe_with_meridians: Live Link

[Mijn eindproduct is hier te vinden](https://lisaoude.github.io/human-centered-design-2021/overzicht)

</br>

---