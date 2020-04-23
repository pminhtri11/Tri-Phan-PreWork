var pokemonCapture = 0;
function myFunction() {
    var lifeRemain = 15;
    //Array of POkemon to be randomize.
    var pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

    //Randomize the Pokemon and Pick one.
    var randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    var pokemonLowercase = randomPokemon.toLowerCase();

    var inCorrect = ["_"];
    document.getElementById('wrongWord').innerHTML = inCorrect;

    document.getElementById('lifeLeft').innerHTML = lifeRemain;

    document.getElementById('pokemonCapture').innerHTML = pokemonCapture;

    console.log(randomPokemon);
    console.log(pokemonLowercase);

    //Create the _ for the number of characters.
    var underScore = [];
    for (var u = 0; u < randomPokemon.length; u++) {
        underScore.push('_') //add a new '_' into the empty array base on the number of characters.

    }

    var userInputArray = [];

    console.log(underScore);
    //sent the file back to html
    document.getElementById('emptyWord').innerHTML = underScore;

    document.onkeyup = function (event) {
        if (lifeRemain == 0) {
            return;
        }
        userInput = event.key;
        console.log("The character you entered is " + userInput);

        var location = [];
        // Array a will store the location of the correct chracter into an Array.        


        var n = userInput.charCodeAt();
        if (n >= 97 && n < 123) {
            //Test for both upper and lower case
            if (randomPokemon.indexOf(userInput) > -1 || pokemonLowercase.indexOf(userInput) > -1) {
                //push the location of the correct answer to Array A
                var b = pokemonLowercase.indexOf(userInput);
                location.push(b);

                //Maybe 2nd word the same?
                if (pokemonLowercase.indexOf(userInput, b + 1) > -1) {
                    var c = pokemonLowercase.indexOf(userInput, b + 1)
                    location.push(c);

                    //Maybe 3rd word the same?
                    if (pokemonLowercase.indexOf(userInput, c + 1) > -1) {
                        var d = pokemonLowercase.indexOf(userInput, c + 1)
                        location.push(d);

                        //Maybe 4th word the same?
                        if (pokemonLowercase.indexOf(userInput, d + 1) > -1) {
                            var e = pokemonLowercase.indexOf(userInput, d + 1)
                            location.push(e);
                        }
                    }
                }
            }
            else {
                inCorrect.push(userInput);
                document.getElementById('wrongWord').innerHTML = inCorrect;
                lifeRemain = lifeRemain - 1;
                document.getElementById('lifeLeft').innerHTML = lifeRemain;
            }
            console.log(location);

            if (lifeRemain == 5) {
                alert("If Ash Ketchup can win a league, then you can guess some POKEMON NAME!!")
            }

            if (lifeRemain == 0) {
                alert("Your out of Life, Please reset the program to retry.");
                return;
            }

            // replace the underScore with the correct character.
            for (var o = 0; o < location.length; o++) {
                //splice(location, # of remove, replace)
                underScore.splice(location[o], 1, userInput);
                document.getElementById('emptyWord').innerHTML = underScore.join(' ');
            }

            console.log(underScore)
            // join allow us to make it a string, which allow us to compare.
            if (underScore.join('') == pokemonLowercase) {
                pokemonCapture++;
                document.getElementById('pokemonCapture').innerHTML = pokemonCapture;
                myFunction();
            }
            console.log(pokemonCapture);
        }

    }
}

function resetFunction() {
    var pokemonCapture = 0;
    myFunction();
}


