// PLAIN JS

// 1. Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const mammiferiArray = [];
const altroArray = [];
const animalsArray = [
    {
        nome: 'leone', 
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },
      
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    }
    ]
    const item = document.getElementById("mammifero");
    for (let i = 0; i < animalsArray.length; i++) {
        const thisanimal = animalsArray[i];
        // console.log(thisanimal.classe)
        if (thisanimal.classe === "mammiferi"){
            mammiferiArray.push(thisanimal);
        }else{
            altroArray.push(thisanimal)
        }
    }
    console.log(animalsArray, mammiferiArray);
    console.log(altroArray);
    
