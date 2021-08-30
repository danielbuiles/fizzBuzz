const pelicula = {
  nombre:'Candyman',
  director:'Nia Costa',
  genero:'Thriller',
  sipnosis:'Una secuela de la película de terror Candyman (1992) que regresa al ahora aburguesado vecindario de Chicago donde comenzó la leyenda.',
  duracion:80,
  url:'https://www.imdb.com/title/tt9347730/?ref_=rvi_tt',
  personajes:['candyman','Niga','Angela'],

};

function fizzBuzz(){
  for(let i=1;i<=200;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }else if(i%3 == 0){
        console.log("Fizz")
    }
    else if(i%5 == 0){
        console.log("Buzz")
    }else{
        console.log(i);
    }
  }
}

fizzBuzz();
console.log(pelicula);