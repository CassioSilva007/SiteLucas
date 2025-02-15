import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";



document.addEventListener("DOMContentLoaded", () => {
    // Limpa os campos ao carregar a página
    document.getElementById("formLogin").reset();
});




document.getElementById('formLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const mensagem = document.getElementById('mensagemLogin');

    try {
        await signInWithEmailAndPassword(auth, email, senha);
        mensagem.textContent = 'Login realizado com sucesso!';
        mensagem.style.color = 'green';

        // Redireciona para a página de boas-vindas
        setTimeout(() => {
            window.location.href = 'boasvindas.html';
        }, 2000); // Redireciona após 2 segundos
    } catch (error) {
        mensagem.textContent = `Erro: ${error.message}`;
    }
});
