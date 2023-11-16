const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id:1, nome:"nome do produto", preco:"000,00", descricao:"texto qualquer", imagem:"/imagens/imagem.jpg"},
  {id:2, nome:"nome do produto", preco:"000,00", descricao:"texto qualquer", imagem:"/imagens/imagem.jpg"},
  {id:3, nome:"nome do produto", preco:"000,00", descricao:"texto qualquer", imagem:"/imagens/imagem.jpg"}
]

function buscarProdutoPorId(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}
console.log(buscarProdutoPorId(3))

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});