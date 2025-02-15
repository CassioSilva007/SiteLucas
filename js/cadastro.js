import { auth, database } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";


document.addEventListener("DOMContentLoaded", () => {
    // Limpa os campos ao carregar a página
    document.getElementById("formCadastro").reset();
});



document.getElementById('formCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    const mensagem = document.getElementById('mensagemCadastro');

    if (senha !== confirmarSenha) {
        mensagem.textContent = 'Senhas não coincidem!';
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const userId = userCredential.user.uid;

        // Salvando os dados do usuário no Realtime Database
        await set(ref(database, 'usuarios/' + userId), {
            nome,
            email,
            dataCadastro: new Date().toISOString()
        });

        mensagem.textContent = 'Cadastro realizado com sucesso!';
    } catch (error) {
        mensagem.textContent = `Erro: ${error.message}`;
    }
});
