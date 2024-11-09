
var nav = document.getElementsByClassName("Segmentos");
var nav_li = document.getElementsByClassName("nav-li");

function showMenu(){
    
    
    
    var dp = document.getElementsByClassName("dropdown-nav");
    var nav_p = document.getElementsByClassName("nav-li-active");
    var nav_a = document.getElementsByClassName("nav-anchor");
    var nav_a_active = document.getElementsByClassName("nav-link-active");


    if(nav[0].style.display === "flex"){
        nav[0].style.display = "none";
        return;
    }

    nav[0].style.display = "flex";
    nav[0].style.flexDirection = "column";
    nav[0].style.alignItems = "center";
    nav[0].style.width = "100%";
    nav[0].style.height = "100%";  
    
    
    var width = dp[0].offsetWidth;
    var height = width + dp[0].clientLeft * 2;

    dp[0].style.height = height + "px";

    for(var i=0; i<nav_li.length; i++){
        nav_li[i].style.width = "50%";
    }

}

function trocarImagens(elementoClicado) {
    const imagemPrincipal = document.getElementsByClassName("ImagemPrincipal");
    const caminhoPrincipal = imagemPrincipal[0].src;
    const caminhoLista = elementoClicado.src;
    
    imagemPrincipal[0].src = caminhoLista;
    elementoClicado.src = caminhoPrincipal;
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 750) {
      nav[0].style.display = 'block';
      for(var i=0; i<nav_li.length; i++){
        nav_li[i].style.width = "auto";
        }
    }else {
        
        nav[0].style.display = 'none';
        
    }
});