const fs = require('fs');
const findFriend = require('./findFriend');

const file = fs.readFileSync('./friends.json', 'UTF-8');

const makeNoteFile= (friend) => {
  const noteTo = (friend) => {
    return ( 
    `Dear ${friend.name},
      I hope this finds you well. I was thinking about how special you are. 
    You are my one and only true ${friend.relation}. A gem at a young ${friend.age}.

    I am thinking of you,
    Dashie`
    )
  };

  fs.writeFile(`${friend.name}.txt`, noteTo(friend),  err => {
    if (err) throw err;
    console.log('file created');
  });
};

const shlomo = findFriend("shlomo", file);

makeNoteFile(shlomo);