const supernatural = {
  actors: ["marcus", "jo0", "michel"],
  movies: ["winner the moon", "catch the shadow", "the sorrow"],
  season: 12,
};

const keyValue = "actors";
for (prop in supernatural) {
  if (prop === keyValue) {
    const keyArray = supernatural[prop];
    let changeName = (keyArray[0] = "Lora");
    keyArray.push(changeName);
    keyArray.pop();
  }
  //console.log(keyValue[prop]);
  //console.log(Array.isArray(supernatural[prop]));
  //console.log(prop);
}

for (prop in supernatural.actors) {
  //console.log(supernatural.actors[prop]);
  //console.log(supernatural.movies[prop]);
}

for (movie of supernatural.movies) {
  console.log(movie);
}
