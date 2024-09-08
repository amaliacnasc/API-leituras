const userName = document.querySelector('#userName').value;
const email = document.querySelector('#email').value; 
const password = document.querySelector('#password').value; 
const botao = document.querySelector('#botao'); 
const form = document.querySelector('#register-form');
botao.addEventListener('click', clicou); 

async function clicou (){

    try {
        const response = await fetch('http://127.0.0.1:3000/api/auth/register', { // Certifique-se de que a rota da API está correta
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, email, password })
        });
    
        if (response.ok) {
           form.reset();
           alert('usuário registrado com sucesso');
        } else {
            console.error('Erro ao adicionar usuário:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao conectar com a API:', error);
    }
    
}; 

clicou();