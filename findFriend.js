const fs = require('fs');

const findFriend = (name, friends)=>{
  
  const data = JSON.parse(friends);
  const friendsArray = data.friends //array of objects
  const friend = friendsArray.filter(friend => friend.name.toLowerCase() == name.toLowerCase());
  return friend[0];
}

module.exports = findFriend;
