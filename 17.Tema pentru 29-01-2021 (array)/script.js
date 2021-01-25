let singular = ["Tomato", "Mango", "Potato"]

////////////////////////////////////////////////////////////

let plural = [singular[0].concat("es"), singular[1].concat("s"), singular[2].concat("es")]

////////////////////////////////////////////////////////////

let sixLetterWords = []
var j = 0
for (let i = 0; i < singular.length; i++) {
    if (singular[i].length === 6) {
      sixLetterWords[j] =  singular[i]
      j++
    }
}

////////////////////////////////////////////////////////////

let pluralSixLetterWords = []
var j = 0
for (let i = 0; i < plural.length; i++) {
    if (plural[i].length === 6) {
      pluralSixLetterWords[j] =  plural[i]
      j++
    }
}

////////////////////////////////////////////////////////////

let pluralSixLetterWordsOrdered = []
var j = 0
for (let i = 0; i < plural.length; i++) {
    if (plural[i].length === 6) {
      pluralSixLetterWordsOrdered[j] =  plural[i]
      j++
    }
}
pluralSixLetterWordsOrdered.sort()

////////////////////////////////////////////////////////////

console.log(

    singular,

    plural,

    sixLetterWords,

    pluralSixLetterWords,

    pluralSixLetterWordsOrdered

    )

