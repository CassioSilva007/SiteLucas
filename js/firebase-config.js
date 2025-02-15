
    
  
  // Importação das funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Configuração do Firebase (copie as suas configurações)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEgNc0JOU8eLzoAcCDHufNf5l5tCdklwE",
  authDomain: "sitelucas-32095.firebaseapp.com",
  databaseURL: "https://sitelucas-32095-default-rtdb.firebaseio.com",
  projectId: "sitelucas-32095",
  storageBucket: "sitelucas-32095.firebasestorage.app",
  messagingSenderId: "786828789901",
  appId: "1:786828789901:web:efb2849ff588c2a973bac4",
  measurementId: "G-VLT0FW52RH"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Exportando as instâncias para serem usadas em outros módulos
export { auth, database };

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



