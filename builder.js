const fs = require('fs');

const numberOfFolders = 10; // número de pastas a serem criadas

for(let i = 1; i <= numberOfFolders; i++) {
  const folderName = `exercicio${i}`; // nome da pasta a ser criada
  const fileName = `exercicio${i}.ts`
  const fileContent = "//Escreve seu codigo aqui"
  fs.mkdir(folderName, (err) => { // cria a pasta usando o método mkdir
    if (err) {
      console.error(err);
    } else {
      console.log(`Pasta ${folderName} criada com sucesso!`);
      fs.writeFile(`${folderName}/${fileName}`, fileContent, (err) => { // cria o arquivo dentro da pasta
        if (err) {
          console.error(err);
        } else {
          console.log(`Arquivo ${fileName} criado dentro da pasta ${folderName} com sucesso!`);
        }
      });
      
    }
  });
}
