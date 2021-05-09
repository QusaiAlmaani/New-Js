var person = prompt("Please enter your name");
if (person != null) {
  prompt("Hello" + person + ",how are you today?")
}
else if (person == null) {
  person = prompt("please enter a name")
}
window.confirm("I'm not a roboot");

var age = prompt("How old are you")
while (age < 18) {
  age = prompt("too young")
}

var players = prompt("How many French players are at Bayern Munich")

while (players != 6) {
  players = prompt("try again")
}

var Fav = prompt("do you want to see a pic of Muller or Nuer?")

for (var i = 0; i< players ; i++) {



if(Fav === 'Muller'){
  document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/0/02/Thomas_Mueller_Training_2017-05_FC_Bayern_Muenchen-3_%28cropped%29.jpg">')
}else if(Fav === 'Nuer'){
  document.write('<img src="https://img.fcbayern.com/image/upload/v1601353183/cms/public/images/fcbayern-com/homepage/saison-19-20/profis/neuer/01102019_neuer.jpg">')
}else {

  alert('okay you should only pick Muller or Nuer') }
}
  

