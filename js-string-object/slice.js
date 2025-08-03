const address = "andorkilla";
const part = address.slice(0, 5);
console.log(part);

const sentence = "I am a good and hard working person";
// console.log(sentence.split(" "))
console.log(sentence.split("a"));

const friendsStr = "Rahim, Kahim, Dahim, Jahim, Sahim, Fahim"
const friends = friendsStr.split(",");
console.log(friends);
const realFriend = [ 'Rahim', ' Kahim', ' Dahim', ' Jahim', ' Sahim', ' Fahim' ];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));