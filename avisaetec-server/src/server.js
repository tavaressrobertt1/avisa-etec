/* Importação de packages (bibliotecas): */
const express = require('express'); // Express para criar rotas web 
const http = require('http'); // HTTP para rodar Socket.io 
const { Server } = require('socket.io'); // Socket.io para comunicação em tempo real
const cors = require('cors'); // CORS para comunicação do front-end com back-end 
require('dotenv').config(); // dotEnv para ler variávies sensíveis no arquivo .env

const app = express(); // Cria a instancia do Express
const server = http.createServer(app); // Cria o servidor HTTP utilizando Express
const io = new Server(server, { // Inicializa o Socket.io ligado ao servidor HTTP
    cors: {
        origin: "*", // Aceita conexao em tempo real de qualquer origem ("*") que façam pedidos GET ou POST - obs: restringir para o domínio do frontend
        methods: ["GET", "POST"] 
    }
});

/* Funções que executam no meio do caminho, antes de um pedido chegar as rotas (Middlewares) */
app.use(cors()); // Ativa o CORS para liberar o trafego entre o React e o Node.js 
app.use(express.json()); // Ensina o servidor a ler e entender JSON 

/* Gestão de conexoes em tempo real via WebSocket (Comportamento do servidor quando interagido) */
app.get('/', (req, res) => { // Cria uma rota HTTP do tipo GET 
    res.json({ message: "API do AvisaETEC a funcionar com sucesso! 🚀" });
});

io.on('connection', (socket) => { // Atribui um dado persistente (socket.id) unico para quando o usuario logar
    console.log(`Utilizador conectado via WebSocket: ${socket.id}`);

    socket.on('disconnect', () => { // Fica a espera de quando o usuario deslogar ou perder conexão e imprime um aviso no terminal
        console.log(`Utilizador desconectado: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 5000; // Define a porta onde o servidor vai rodar atraves lendo o arquivo .env - obs: O default é 5000
server.listen(PORT, () => { // Roda o servidor, imprimindo a mensagem abaixo
    console.log(`Servidor rodando na porta ${PORT}`);
});