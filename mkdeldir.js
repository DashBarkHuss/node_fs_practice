const fs = require('fs');

const mkdeldir = (dirName) => {
  if (!fs.existsSync(`${dirName}`)){
    fs.mkdir(`${dirName}`, err => {
      if(err) throw err;
    })
  } else {
    console.log(`${dirName} exists`);
  }

  setTimeout(()=>{

    fs.rmdir(dirName, err => {
      if(err) throw err;
    });
  
  }, 5000);
}

mkdeldir("buttfolder");

