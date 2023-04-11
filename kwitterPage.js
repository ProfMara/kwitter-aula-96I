//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyD-GxWJxYciaM8XdrEgSubEaK_qNe8Z2bk",
    authDomain: "banco-de-dados-database.firebaseapp.com",
    databaseURL: "https://banco-de-dados-database-default-rtdb.firebaseio.com",
    projectId: "banco-de-dados-database",
    storageBucket: "banco-de-dados-database.appspot.com",
    messagingSenderId: "97828710716",
    appId: "1:97828710716:web:1604dcd1c7a51046d45639",
    measurementId: "G-FDGY8V42QV"
};   
firebase.initializeApp(firebaseConfig);  
//FACILITAR A SUA VIDA
var db = firebase.database();

//ler do banco de dados as mensagens e mostrar na tela
db.ref(nomeSala).on("value", (data)=>{
  //limpa a div
  document.getElementById("output").innerHTML = '';
  //repete comando para cada valor
  data.forEach((dados)=>{
    if(dados.key != 'proposito'){
      var id = dados.key;
      var valores = dados.val();

      var mensagem = valores['msg'];
      var nome = valores['nome'];
      var likes = valores['like'];
      //faz uma tag html para a mensagem
      var msghtml  =  "<h4>"+ mensagem +"</h4>";
      //faz uma tag html para o nome
      var nomehtml = "<h4>"+nome+"</h4>";
      //faz um botão para os likes
      var botaoLike = "<button class='btn btn-warning' id="+id+" value="+likes+" onclick='attLike(this.id)'>";
      var likeshtml = "<span class='glyphicon glyphicon-thumbs-up'></span>Likes:"+likes+"</button>";
      linha = msghtml + nomehtml + botaoLike + likeshtml;
      document.getElementById("output").innerHTML += linha
    }
  })
})

