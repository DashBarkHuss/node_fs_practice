const fs = require('fs');

fs.mkdir('letters', err=>{
  if(err) throw err;
})