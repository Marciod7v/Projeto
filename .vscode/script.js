function toggleMode(){
  const html = document.documentElement
    html.classList.toggle("light")
    const img= document.querySelector("#profile img")
  if(html.classList.contains("light")){
   img.setAttribute("src", "./assets/avatar-light.png")  
   img.setAttribute("alt", "uma ponte vista para belem")                    
  }

        else{
    img.setAttribute("src","./assets/avatar.png")
    mg.setAttribute("alt", "foto de Márcio, de costa com visa para o rio")
  }
    
    //pegar a tag img


    //substituir a imagem do avatar
  }
  
