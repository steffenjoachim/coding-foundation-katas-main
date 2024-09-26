function extractClassName(sessionTitle) {
  const pattern = /\bClass\s(\d{4})\s(Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)\b/;
  const monthMapping = {
    Januar: '01', Februar: '02', März: '03', Maerz: '03', April: '04', Mai: '05', Juni: '06', Juli: '07',
    August: '08', September: '09', Oktober: '10', November: '11', Dezember: '12'
  };

  // Teste, ob der Titel das Muster enthält
  const match = sessionTitle.match(pattern);
  if (!match) return null;

  // Extrahiere das Jahr und den Monat
  const year = match[1];
  const month = monthMapping[match[2]];

  // Rückgabe im Format "YYYY-MM"
  return `${year}-${month}`;
}

// Testbeispiele
console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"
console.log(extractClassName("Live-Session Class 2022 März"));      // "2022-03"
console.log(extractClassName("Live-Session Class 2022 Maerz"));     // "2022-03"
console.log(extractClassName("Live-Session 2022 April"));           // null