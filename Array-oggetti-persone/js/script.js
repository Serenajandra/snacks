// 2. Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il /
// nome e cognome e l'indicazione se può guidare, in base all'età.

peopleArray = [
    {
        nome: "Serena", 
        cognome: "Parapappa",
        età: 25
    },
    {
        nome: "David",
        cognome: "Piripippi",
        età: 35
    },
    {
        nome: "Michele",
        cognome: "Perepeppe",
        età:7
    },
    {
        nome: "Elias",
        cognome: "Poropoppo",
        età: 13
    },
]

stringArray=[];
puòGuidare = [];
nonPuòGuidare = [];


    for (let i = 0; i < peopleArray.length; i++) {
        const thisPerson = peopleArray[i];
        if (thisPerson.età >= 18) {
            const patentato = `<li>${thisPerson.nome} ${thisPerson.cognome} ha ${thisPerson.età} anni quindi può guidare</li>`
            puòGuidare.push(patentato)
        } else{
            const nonPatentato = `<li>${thisPerson.nome} ${thisPerson.cognome} ha ${thisPerson.età} anni quindi non può guidare</li>`
            nonPuòGuidare.push(nonPatentato)
        };
    };
console.log(puòGuidare, nonPuòGuidare);

puòGuidare.forEach(element => {
    stringArray.push(element)    
});


nonPuòGuidare.forEach(element => {
    stringArray.push(element)
});

console.log(stringArray);
const paragrafo = document.getElementById("paragrafo");
paragrafo.innerHTML = stringArray;
