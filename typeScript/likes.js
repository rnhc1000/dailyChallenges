function likes(names) {
  // TODO

  let phraseOne = "likes this";
  let phraseTwo = "like this";
  let connector = " and ";
  let phraseFour = " others like this";
  let phraseNone = "no one likes this"

  let length = names.length;
  console.log(length)
  let adjust = length-2;

  if (length === 0) return phraseNone;

  switch (length) {

    case 1:
      return names[0] + " " + phraseOne;

    case 2:
      return names[0] + connector + names[1] + " " + phraseTwo;

    case 3:
      return names[0]+"," + names[1] + connector + names[2] + " " + phraseTwo;

    case 4:
      return names[0]+"," + names[1] + connector + adjust + phraseFour;

    default:
      return names[0]+"," + names[1] + connector + adjust  + phraseFour;
  }
}

let names = ['Alex', 'Jacob', 'Mark', 'Richard', 'Paul'];

console.log(likes(names))


