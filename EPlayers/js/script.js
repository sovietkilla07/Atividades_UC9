$(document).ready(function(){

    let slideAtual = 1

    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 2000)

    function mudarSlide (){

        //remover o slide anterior

        if(slideAtual > 0){

            $("#carrossel").removeClass(listaSlides[slideAtual - 1])

        }else{

            $("#carrossel").removeClass(listaSlides[2])
        }

        
        


        //exibir slide atual

        $("#carrossel").addClass(listaSlides[slideAtual])


        //indicar slide atual
        
        console.log(" O slide atual é", slideAtual)

        slideAtual ++

        if(slideAtual > 2){

            slideAtual = 0
        }


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