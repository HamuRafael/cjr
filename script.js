const wrapper = document.querySelector('.wrapper');
const hometext = document.querySelector('.home-text');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnHome = document.querySelector('.btnHome');
const MissPassword = document.querySelector('.miss-password');
const loginLinkS = document.querySelector('.logins-link');

MissPassword.addEventListener('click',()=>{ // pra clicar no esqueci a senha
    wrapper.classList.add('misspass'); 
});
loginLinkS.addEventListener('click',()=>{ //voltar pra tela de login
    wrapper.classList.remove('misspass');
    wrapper.classList.remove('active');
    
});
registerLink.addEventListener('click', ()=>{  // quando clica em cadastro
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{ // pra voltar pra tela de login
    wrapper.classList.remove('active');
});
btnHome.addEventListener('click', ()=>{ //clica no botao la em cima home fazendo login sumir
    wrapper.classList.add('active-popup');
});
btnPopup.addEventListener('click', ()=>{ //clica no botao la em cima login fazendo login aparecer
    wrapper.classList.remove('active-popup');
});


