/*
1.19 Artikels

De gebruiker typt per artikel de naam, de aankoopprijs en de verkoopprijs.
Hij herhaalt dit tot hij stop typt bij de naam.

Hij tikt daarna een woord.
Toon de namen van de artikels die in hun naam dit woord bevatten.

De gebruiker tikt twee getallen.
Als het tweede getal kleiner is dan het eerste getal toont je een foutmelding.
Anders toon je de namen en verkoopprijzen van de artikels waarvan de verkoopprijs ligt tussen 
deze twee getallen. Als een verkoopprijs gelijk is aan het eerste of het tweede getal neem je het 
ook op in de lijst.

Toon de gemiddelde verkoopprijs van de artikels.
Bezorg je oplossing aan je coach.
*/
function tikArtikels(artikels_array){
  let artikelNaam=prompt("Artikelnaam:");
  while(!(artikelNaam==="stop")){
    const aankoopprijs=+prompt("Aankoopprijs:");
    const verkoopprijs=+prompt("Verkoopprijs:")
    artikels_array.push(
      {
        naam:artikelNaam,
        aankoopprijs,
        verkoopprijs
      }
    )
    artikelNaam=prompt("Naam van artikel:");
  }
  return artikels_array;
}
function toonArtikelsGematchedOpWoord(artikels_array){
  const woord=prompt("Zoek op woord:");
  const result=[];
  const regexp=new RegExp(`(${woord})`,"gi");

  for (const artikel of artikels_array) {
    if(regexp.test(artikel.naam)){
      result.push(artikel.naam);
    }
  }
  return result;
}
function tikGetallen(getallen_array){
  const getal_1=+prompt("Getal 1:");
  const getal_2=+prompt("Getal 2:");
  if(getal_1>getal_2){
    alert("Foutmelding: Eerste getal moet kleiner zijn dan tweede")
  }else{
    getallen_array.push(getal_1,getal_2);
  }
  return getallen_array;
}
function toonOpVerkoopprijs(artikels_array,getallen_array){
  const [getal_1,getal_2]=[...getallen_array];
  const result=[];
  artikels_array.forEach(artikel => {
    if(artikel.verkoopprijs>=getal_1 && artikel.verkoopprijs<=getal_2){
      result.push(artikel.naam,artikel.verkoopprijs)
    }
  });
  console.log(result);
  return result;
}
const artikels=tikArtikels([]);
if(artikels.length>0){
  toonArtikelsGematchedOpWoord(artikels);
  const getallen=tikGetallen([]);
  if(getallen.length>0){
    toonOpVerkoopprijs(artikels,getallen)
  }
}
