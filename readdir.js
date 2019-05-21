const fs = require('fs');

fs.readdir('./directory', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
})