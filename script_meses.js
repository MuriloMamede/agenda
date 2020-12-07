

var firebaseConfig = {
    apiKey: "AIzaSyBMasMxL8BhY9OSyNkAmMZqfMtSlaYDEp8",
    authDomain: "weebdario.firebaseapp.com",
    databaseURL: "https://weebdario.firebaseio.com",
    projectId: "weebdario",
    storageBucket: "weebdario.appspot.com",
    messagingSenderId: "742261135078",
    appId: "1:742261135078:web:67e5be9399087e69efcd27"
};


var user = {};

var mes = new Date().getMonth();
var ano = new Date().getFullYear();
var diaDaSemanaQueOMesComeca = new Date(2020, mes,1).getDay();
var diasNosMeses = [31,28,31,30,31, 30,31,31,30,31,30,31];
var meses = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'];
function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}


