// Funktion zum Anzeigen der Cocktail-Daten in der index.html
const displayCocktailData = (data) => {
  const cocktailContainer = document.getElementById('cocktailContainer');

  // Löschen des aktuellen Inhalts des Cocktail-Containers
  cocktailContainer.innerHTML = '';

  // Überprüfen, ob Daten vorhanden sind
  if (data && data.drinks && data.drinks.length > 0) {
    const cocktail = data.drinks[0];

    // Erstellen von HTML-Elementen zur Anzeige der Cocktail-Daten
    const cocktailDiv = document.createElement('div');
    cocktailDiv.classList.add('cocktail');

    const cocktailName = document.createElement('h3');
    cocktailName.textContent = cocktail.strDrink;
    cocktailDiv.appendChild(cocktailName);

    const cocktailImageContainer = document.createElement('div');
    cocktailImageContainer.classList.add('cocktail-image-container');
    cocktailDiv.appendChild(cocktailImageContainer);

    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktail.strDrinkThumb;
    cocktailImage.alt = cocktail.strDrink;
    cocktailImage.classList.add('cocktail-image');
    cocktailImageContainer.appendChild(cocktailImage);

    const cocktailInstructions = document.createElement('p');
    cocktailInstructions.textContent = cocktail.strInstructions;
    cocktailDiv.appendChild(cocktailInstructions);

    cocktailContainer.appendChild(cocktailDiv);
  } else {
    // Anzeige einer Nachricht, wenn keine Daten vorhanden sind
    const noDataMessage = document.createElement('p');
    noDataMessage.textContent = 'Keine Daten gefunden.';
    cocktailContainer.appendChild(noDataMessage);
  }
};

// API-Schlüssel (test key '1')
const apiKey = '1';

// Funktion zum Durchführen von API-Anfragen
async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fehler bei der API-Anfrage:', error);
    return null;
  }
}

// Beispielaufruf für den "After sex" Cocktail
const exampleSearchCocktailByName = async () => {
  const cocktailName = 'After sex';
  const url = `https://www.thecocktaildb.com/api/json/v1/${apiKey}/search.php?s=${cocktailName}`;
  const data = await fetchAPI(url);
  displayCocktailData(data);
};

// Aufruf des Beispielaufrufs
exampleSearchCocktailByName();

// Funktion zum Laden der Bewerberdaten
async function loadBewerberdaten() {
  try {
    const response = await fetch('/Bewerberdaten');
    const result = await response.json();

    const bewerber = result.data[0];

    // Administrative Daten
    document.getElementById('name').textContent = bewerber.nachname + ' ' + bewerber.vorname;
    document.getElementById('geburtsdatum').textContent = bewerber.geburtsdatum;
    document.getElementById('adresse').textContent = bewerber.adresse;
    document.getElementById('email').textContent = bewerber.email;
    document.getElementById('telefon').textContent = bewerber.telefon;

    // Beruflicher Werdegang
    document.getElementById('position').textContent = bewerber.position;
    document.getElementById('unternehmen').textContent = bewerber.unternehmen;
    document.getElementById('zeitraum').textContent = bewerber.zeitraum;
    document.getElementById('beschreibung').textContent = bewerber.beschreibung;

    // Akademischer Werdegang
    document.getElementById('abschluss').textContent = bewerber.abschluss;
    document.getElementById('universitaet').textContent = bewerber.universitaet;
    document.getElementById('akadem_zeitraum').textContent = bewerber.akadem_zeitraum;
    document.getElementById('akadem_beschreibung').textContent = bewerber.akadem_beschreibung;

    // Fähigkeiten
    document.getElementById('faehigkeiten').textContent = bewerber.faehigkeiten;


  } catch (err) {
    console.log("Fehler: " + err);
  }
}

loadBewerberdaten();
