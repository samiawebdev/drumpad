// const tiles = document.querySelectorAll('.key');
// const audios = document.querySelectorAll('audio');
// const touches = ['U', 'Z', 'E', 'Q', 'S', 'D', 'W', 'X', 'C'];
//                 // 0 - 1

// window.addEventListener('keydown', (event) => {
//     for(let i = 0; i < tiles.length; i++) {
//         if(event.key.toUpperCase() === touches[i]) {
//             tiles[i].classList.add('playing');
//             audios[i].play();
//         }
//     }
// });

// window.addEventListener('keyup', (event) => {
//     for(let i = 0; i < tiles.length; i++) {
//         if(event.key.toUpperCase() === touches[i]) {
//             tiles[i].classList.remove('playing');
//             audios[i].pause();
//             audios[i].currentTime = 0;
//         }
//     }
// });

// SOLUTION 2

const tiles = document.querySelectorAll('.key');

window.addEventListener('keydown', (event) => {
    tiles.forEach(tile => {
        const tileDataKey = tile.getAttribute('data-key');
        const tileKbd = tile.querySelector('kbd');
        const audioData = document.querySelector(`audio[data-key="${tileDataKey}"]`)
        console.log(tileDataKey);
        if(event.key.toUpperCase() === tileKbd.textContent) {
            tile.classList.add('playing');
            audioData.play();
        }
    });
});

window.addEventListener('keyup', (event) => {
    tiles.forEach(tile => {
        const tileDataKey = tile.getAttribute('data-key');
        const tileKbd = tile.querySelector('kbd');
        const audioData = document.querySelector(`audio[data-key="${tileDataKey}"]`)
        console.log(tileDataKey);
        if(event.key.toUpperCase() === tileKbd.textContent) {
            tile.classList.remove('playing');
            audioData.pause();
            audioData.currentTime = 0;
        }
    });
});

// asynchrone => execution d'une fonction en tache de fond et ne bloque pas le reste de l'execution du code
// synchrone => s'arrête en attendant la fin de la tache et bloque tout le reste du code

// ASYNCHRONE LA Troisième force de javascript
// async function => function asynchrone 
async function test() {
    const response = await fetch('https://tyradex.vercel.app/api/v1') // await => attends la réponse https://github.com/G404-DWWM/Vanilla-Front-PromessesJSavant d'éxecuter la suite de la fonction
    const pokemon = await response.json();
    return pokemon; // Ne retourne pas la variable, la valeur SEULEMENT
}

const api = test(); // Récupère la valeur de la fonction qui est une promesse
console.log(api);


// Autre syntaxe pour les promesses
function testPromise() {
    return new Promise(function(resolve, reject) {
        if(4 === 4) {
            resolve('La promesse est tenue'); // resolve => si la promesse a pu aboutir
        } else {
            reject("La promesse n'est pas tenue"); // reject => si la promesse n'a pas pu aboutir
        }
    }
)}

testPromise()
.then(message => console.log(message)) // on affiche le resolve si la promesse a abouti
.then(message => message = 2)
.then(test => console.log('TEST est égale à ', test)) // test "devient" message
.catch(erreur => console.log(erreur)); // on affiche le message d'erreur si la promesse n'a pas abouti








