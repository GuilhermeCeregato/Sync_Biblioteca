import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";

// 1. Definição do tipo do dado (model)
type Livro = {
    titulo: string;
    autor: string;
    ano: number;
    lido: boolean;
};

// 2. Lista inicial de dados (Mock Data)
const livros: Livro[] = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, lido: true },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, lido: false },
    // adicione mais livros aqui
];

// 3. Verificação e criação do diretório "Dados"
const pasta = "./dados";
if (!existsSync(pasta)) {
    mkdirSync(pasta);
}

// 4. Salvando os dados convertidos na pasta em JSON
const caminho = `${pasta}/livros.json`;
writeFileSync(caminho, JSON.stringify(livros, null, 2));
console.log("Dados salvos com sucesso!");

// 5. Lendo os dados de volta e convertendo em objetos
const textoLido = readFileSync(caminho, "utf-8");
const livrosRecuperados: Livro[] = JSON.parse(textoLido);

// 6. Exibição formatada do conteúdo recuperado
console.log("\n === 📚 LIVROS RECUPERADOS ===");

livrosRecuperados.forEach((Livro, index) => {
    const status = Livro.lido ? "Lido ✅" : "Não lido";
    console.log(
        `${index + 1}. ${Livro.titulo} - ${Livro.autor} (${Livro.ano}) - ${status}`
    );
});