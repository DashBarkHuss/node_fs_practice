const fs = require('fs');

const rename = (fileName, newName)=>{
  console.log('hi');
  fs.rename(`./${fileName}.txt`, `./${newName}.txt`, err => {
    if(err) throw err;
  });
}


const remove = (fileName) => {
  fs.unlink(`./${fileName}.txt`, err=>{
    if(err) throw err;
  });
};

remove("buttnote");