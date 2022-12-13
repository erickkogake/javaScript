import chalk from "chalk";
import fs from "fs";

const trataErro = (erro) => {
    throw new Error(chalk.red.bold(erro.code, "Não há arquivo no diretório"));
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

// Métodos assíncronos!

// const pegaArquivo = (caminhoDoArquivo) => {
//     const encoding = "utf-8"
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//         .then((texto)=>{console.log(chalk.blue(texto))})
//         .catch(trataErro)
// }

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.red(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow("Operação concluída"))
    }
}

pegaArquivo('./arquivos/texto.md');
// pegaArquivo('./arquivos/texto.m')