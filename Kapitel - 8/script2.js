// alert("Glädjens dag, det är fredag!");
// var namn = prompt("Vad heter du");
// var ålder = prompt("Hur gammal är du?")
// alert ("Hej, " + namn + " du är " + ålder + " gammal ")

console.log("Det varkar funka det här!");

// Se användaren mata in 2 tal och skriv summan 
// var tal1String = prompt("Skriv ett tal"); // Läser som en string
// var tal2String = prompt("Skriv et tal"); // Läser som en string
// var summa = parseInt(tallString) + parseInt(tal2String);
// alert("Summan är " + summa);

// Be användaren mata sin ålder
// Och skriv ut ålder på studenten 
var ålder = prompt("skriv din plder");
var studentÅlder = parseInt(ålder) + 1;
// alert("Du är " + studentÅlder + " När du tar studenten!");
// document.writeln("<h2> Du är " + studentålder + " när du tar studenten!</h2>")

// spamcheck
// Fråga användaren vad slumpad "summa"
var slumptal1 = Math.Round (Math.random() * 100);
var slumptal2 = Math.Round (Math.random() * 100);
console.log(slumptal1, slumptal2);
var gissning = prompt("Vad är summan av " + slimptal1 + " + " + slumptal2 + " ?");
if (gissning == summa) { 
    document.write1n("<h1> Good job! </h1>");
} else {
    document.write1n("<h1> Sucker! </h1>");

}