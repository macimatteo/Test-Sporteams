function verificaNome(nomeImportato) {
  let nome = nomeImportato;

  let Server = new Promise((resolve, reject) => {
    if (nome.match(/[0-9]/g) != null || nome== '') {
        document.getElementById("risposta").innerHTML = "Nome non inserito correttamente";
        reject("Nome non inserito correttamente");
      //risposta = false;
    } else {
      document.getElementById("cognome").disabled = false;
      resolve("Nome inserito correttamente");
      //risposta = true;
    }
  });

  Server.then((fetchedData) => {
    console.log("then:", fetchedData);
    //return risposta;
  }).catch((err) => {
    console.error("catch:", err);
    // return risposta;
  });
}

function verificaCognome(nomeImportato) {
  let nome = nomeImportato;

  let Server = new Promise((resolve, reject) => {
    if (nome.match(/[0-9]/g) != null || nome== '') {
    document.getElementById("risposta").innerHTML = "Cognome non inserito correttamente";
      reject("Cognome non inserito correttamente");
      //risposta = false;
    } else {
      document.getElementById("età").disabled = false;
      resolve("Cognome inserito correttamente");
      //risposta = true;
    }
  });

  Server.then((fetchedData) => {
    console.log("then:", fetchedData);
    //return risposta;
  }).catch((err) => {
    console.error("catch:", err);
    // return risposta;
  });
}

function verificaEtà(etàimportata) {
  let Anni = etàimportata;

  let Server = new Promise((resolve, reject) => {
    if (isNaN(Anni) || Anni == "") {
      reject("Anni non inseriti correttamente");
      //risposta = false;
    } else {
      document.getElementById("risposta").innerHTML = "Grazie per le informazioni!";
      document.getElementById("demo").innerHTML = "Grazie per le informazioni!";

      resolve("Anni inseriti correttamente");
      //risposta = true;
    }
  });

  Server.then((fetchedData) => {
    console.log("then:", fetchedData);
    //return risposta;
  }).catch((err) => {
    console.error("catch:", err);
    // return risposta;
  });
}


