const fs = require('fs');

const thoughts = (thoughts) => {
  fs.appendFile('thoughts.js', `${thoughts} \n`, err => {
    if (err) throw err;
  });
};

thoughts("feeling good");