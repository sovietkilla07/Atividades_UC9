$(document).ready(function(){

    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    function mudarSlide (){


    }





    $("#barras").click(function(){

        if($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")

        }else{
            $("#menu").addClass("menu-ativo")
        }
        
        
    })
})


function cadastrarNewsletter(){

    let email = document.getElementById("campo-email").value
    alert(email)
}

function mostrarMenu($event){

    let menu = document.getElementById("menu")
    if(getComputedStyle(menu).display == "none"){

        menu.style.display = "flex"
    }
    else{

        menu.style.display = "none"
    }
    event.preventDefault()
    
}