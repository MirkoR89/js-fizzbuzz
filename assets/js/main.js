//Scrivi un programma che stampi i numeri da 1 a 100.
for (i=1; i < 101; i++) {
  console.log(i);

  //Per i multipli di 3 stampi “Fizz” al posto del numero.
  if ((i % 3) === 0) {
    i = "Fizz";
    console.log(i);

    //Per i multipli di 5 stampi Buzz.
  } else if ((i % 5) === 0) {
    i = "Buzz";
    console.log(i);
  } else {
  }
}
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
