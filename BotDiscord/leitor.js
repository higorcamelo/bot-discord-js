const fs = require('fs');
const diretorio = "./Comandos/";
module.exports = (prefix) => {
    var comandos = {};

    const scripts = fs.readdirSync(diretorio);
    scripts.forEach(script =>{
        comandos[prefix + script.split(".")[0]] = require(diretorio + script);
    });

    return comandos;
    
};