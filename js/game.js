var salud_jugador=100
var salud_enemigo=100
var ataque_jugador=0
var defensa_jugador=0
var ataque_enemigo=Math.floor(Math.random()*3+1)
var escudo_enemigo=Math.floor(Math.random()*3+1)


/*function mostrarVida(){
    defensa_jugador=parseInt(prompt("Con que quiere defender: 1 , 2, 3"))
    if(ataque_enemigo==1 && defensa_jugador==1){
        salud_jugador-=10
        document.write("Ha sido atacado con agua, se ha defendido con agua y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==1 && defensa_jugador==2) {
        salud_jugador-=20
        document.write("Ha sido atacado con agua, se ha defendido con fuego y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==1 && defensa_jugador==3){
         salud_jugador
        document.write("Ha sido atacado con agua, se ha defendido con electricidad y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==2 && defensa_jugador==1){
        salud_jugador
        document.write("Ha sido atacado con fuego, se ha defendido con agua y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==2 && defensa_jugador==2){
        salud_jugador-=10
        document.write("Ha sido atacado con fuego, se ha defendido con fuego y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==2 && defensa_jugador==3){
        salud_jugador-=20
        document.write("Ha sido atacado con fuego, se ha defendido con electricidad y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==3 && defensa_jugador==1){
        salud_jugador-=20
        document.write("Ha sido atacado con electricidad, se ha defendido con agua y su nivel de vida es:"+salud_jugador)
    }else if(ataque_enemigo==3 && defensa_jugador==2){
        salud_jugador
        document.write("Ha sido atacado con electricidad, se ha defendido con fuego y su nivel de vida es:"+salud_jugador)  
    }else{
        salud_jugador-=10
        document.write("Ha sido atacado con electricidad, se ha defendido con fuego y su nivel de vida es:"+salud_jugador)  
    }     
}

document.write(ataque_enemigo)*/


function ataqueDeAgua(){
    var escudo_enemigo=Math.floor(Math.random()*3+1)
    if( escudo_enemigo==1){
        salud_enemigo-=10
        if(salud_jugador<=0){
            document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
            desactivarBotones()
              
        }else{
            document.getElementById("b1").innerHTML="Has atacado con ataque de agua, el enemigo se ha defendido con escudo de agua, le has quitado 10 de salud y tu nivel de vida es:"+salud_jugador
        }
        if(salud_enemigo<=0){
            document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
            desactivarBotones()
            
        }else{
            document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo 
        }   
             
    }else if(escudo_enemigo==2) {
        salud_enemigo-=20
        if(salud_jugador<=0){
            document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
            desactivarBotones()
            
        }else{
            document.getElementById("b1").innerHTML="Has atacado con ataque de agua, el enemigo se ha defendido con escudo de fuego, le has quitado 20 de salud y tu nivel de vida es:"+salud_jugador
        }
        if(salud_enemigo<=0){
            document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
            desactivarBotones()
            
        }else{
            document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo 
        }

    }else{
        salud_enemigo
        if(salud_jugador<=0){
            document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
            desactivarBotones()
           
        }else{
            document.getElementById("b1").innerHTML="Has atacado con ataque de agua, el enemigo se ha defendido con escudo electrico, no le has restado salud y tu nivel de vida es:"+salud_jugador
        }
        if(salud_enemigo<=0){
            document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
            desactivarBotones()
            
        }
        else{
            document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo 
        }
    
    }  
      
    }

function ataqueDeFuego(){
        var escudo_enemigo=Math.floor(Math.random()*3+1)
        if( escudo_enemigo==1){
            salud_enemigo
            if(salud_jugador<=0){
                document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                desactivarBotones()
               
            }else{
                document.getElementById("b1").innerHTML="Has atacado con ataque de fuego, el enemigo se han defendido con escudo de agua, no le has restado salud y tu nivel de vida es:"+salud_jugador
            }
            if(salud_enemigo<=0){
                document.getElementById("b2").innerHTML="GANASTE!CONGRATULATIONS"
                desactivarBotones()
                
            }
            else{
                document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo 
            }
            
        }else if(escudo_enemigo==2) {
            salud_enemigo-=10
            if(salud_jugador<=0){
                document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                desactivarBotones()
                
            }else{
                document.getElementById("b1").innerHTML="Has atacado con ataque fuego, el enemigo se han defendido con escudo de de fuego, le has quitado 10 de salud y tu nivel de vida es:"+salud_jugador
            }
            if(salud_enemigo<=0){
                  document.getElementById("b2").innerHTML="GANASTE!CONGRATULATIONS"
                  desactivarBotones()
                  
            }else{
                document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo 
            }
            
        }else{
            salud_enemigo-=20
            if(salud_jugador<=0){
                document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                desactivarBotones()
                
            }else{
                document.getElementById("b1").innerHTML="Has atacado con ataque de fuego, el enemigo se han defendido con escudo de electricidad, le has quitado 20 de salud y tu nivel de vida es:"+salud_jugador
            }
            if(salud_enemigo<=0){
                document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                desactivarBotones()
                
            }
            else{
                document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
            }
            
            
        }  
          
        }

    function ataqueElectrico(){
            var escudo_enemigo=Math.floor(Math.random()*3+1)
            if( escudo_enemigo==1){
                salud_enemigo-=20
                if(salud_jugador<=0){
                    document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                    desactivarBotones()
                    
                }else{
                    document.getElementById("b1").innerHTML="Has atacado con ataque electrico, el enemigo se ha defendido con escudo de agua,le has quitado 20 de salud y tu nivel de vida es:"+salud_jugador
                }if(salud_enemigo<=0){
                    document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                    desactivarBotones()
                    
                }
                else{
                    document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                }
                  
            }else if(escudo_enemigo==2) {
                salud_enemigo
                if(salud_jugador<=0){
                    document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                    desactivarBotones()
                    
                }else{
                    document.getElementById("b1").innerHTML="Has atacado con ataque electrico, el enemigo se ha defendido con escudo de fuego, no le has restado salud y tu nivel de vida es:"+salud_jugador
                }if(salud_enemigo<=0){
                    document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                    desactivarBotones()
                     
                }
                else{
                    document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo 
                }
            }else{
                salud_enemigo-=10
                if(salud_jugador<=0){
                    document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                    desactivarBotones()
                   
                }else{
                    document.getElementById("b1").innerHTML="Has atacado con ataque electrico,el enemigo se ha defendido con escudo electrico, le has quitado 10 de salud y tu nivel de vida es:"+salud_jugador
                }
                if(salud_enemigo<=0){
                    document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                    desactivarBotones()
                    
                }else{
                    document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                }
                
            } 
             
            }

    function escudoDeAgua(){
                var ataque_enemigo=Math.floor(Math.random()*3+1)
                if( ataque_enemigo==1){
                    salud_jugador-=10
                    if(salud_jugador<=0){
                        document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                        desactivarBotones()
                       
                    }else{
                        document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque de agua, te has defendido con escudo de agua, te ha quitado 10 de salud y tu nivel de vida es:"+salud_jugador
                    }if(salud_enemigo<=10){
                        document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                        desactivarBotones()
                      
                    }else{
                        document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                    }
                     
                }else if(ataque_enemigo==2) {
                    salud_jugador
                    if(salud_jugador<=0){
                        document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                        desactivarBotones()
                        
                    }else{
                        document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque de fuego, te has defendido con escudo de agua,no te ha restado salud y tu nivel de vida es:"+salud_jugador
                    }
                    if(salud_enemigo<=0){
                        document.getElementById("b2").innerHTML="GANASTE!CONGRATULATIONS"
                        desactivarBotones()
                        
                    }
                    else{
                        document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                    }
                        
                         
                }else{
                    salud_jugador-=20
                    if(salud_jugador<=0){
                        document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                        desactivarBotones()
                        
                    }else{
                        document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque electrico, te has defendido con escudo de agua, te ha quitado 20 de salud y tu nivel de vida es:"+salud_jugador
                    }
                    if(salud_enemigo<=0){
                        document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                        desactivarBotones()
                        
                    }
                    else{
                        document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                    }
                    
                    
                }
               
               
                }
                
    function escudoDeFuego(){
                    var ataque_enemigo=Math.floor(Math.random()*3+1)
                    if( ataque_enemigo==1){
                        salud_jugador-=20
                        if(salud_jugador<=0){
                            document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                            desactivarBotones()
                           
                        }else{
                            document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque de agua, te has defendido con escudo de fuego, te ha quitado 20 de salud y tu nivel de vida es:"+salud_jugador
                        }if(salud_enemigo<=0){
                            document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                            desactivarBotones()
                            
                        }else{
                            document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                        }
                        
                    }else if(ataque_enemigo==2) {
                        salud_jugador-=10
                        if(salud_jugador<=0){
                            document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                            desactivarBotones()
                            
                        }else{
                            document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque de fuego, te has defendido con escudo de fuego, te ha quitado 10 de salud y tu nivel de vida es:"+salud_jugador
                        }if(salud_enemigo<=0){
                            document.getElementById("b2").innerHTML="GANASTE!CONGRATULATIONS" 
                            desactivarBotones()
                             
                        }else{
                            document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                        }
                        
                    }else{
                        salud_jugador
                        if(salud_jugador<=0){
                            document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                            desactivarBotones()
                            
                        }else{
                            document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque electrico, te has defendido con escudo de fuego, no te ha restado salud y tu nivel de vida es:"+salud_jugador
                        }if(salud_enemigo<=0){
                            document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                            desactivarBotones()
                            
                        }else{
                            document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                        }
                        
                    }
        
                    
                    }

    function escudoElectrico(){
                        var ataque_enemigo=Math.floor(Math.random()*3+1)
                        if( ataque_enemigo==1){
                            salud_jugador
                            if(salud_jugador<=0){
                                document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                                desactivarBotones()
                               
                            }else{
                                document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque de agua, te has defendido con escudo electrico, no te ha restado salud y tu nivel de vida es:"+salud_jugador
                            }
                            if(salud_enemigo<=0){
                                document.getElementById("b2").innerHTML="GANASTE! CONGRATULATIONS"
                                desactivarBotones()
                                 
                            }else{
                                document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                            }
                        
                        }else if(ataque_enemigo==2) {
                            salud_jugador-=20
                            if(salud_jugador<=0){
                                document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                                desactivarBotones()
                               
                            }else{
                                document.getElementById("b2").innerHTML="El enemigo te ha atacado con ataque de fuego, te has defendido con escudo electrico, te ha quitado 20 de salud y tu nivel de vida es:"+salud_jugador
                            }
                            if(salud-enemigo<=0){
                                document.getElementById("b2").innerHTML="GANASTE!CONGRATULATIONS"
                                desactivarBotones()
                                 
                                
                            }else{
                                document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                            }
                            
    
                        }else{
                            salud_jugador-=10
                            if(salud_jugador<=0){
                                document.getElementById("b1").innerHTML="GAME OVER !INTENTALO DE NUEVO¡"
                                desactivarBotones()
                                

                            }else{
                                document.getElementById("b1").innerHTML="El enemigo te ha atacado con ataque electrico, te has defendido con escudo electrico, te ha quitado 10 de salud y tu nivel de vida es:"+salud_jugador
                            }
                            if(salud_enemigo<=0){
                                document.getElementById("b2").innerHTML="GANASTE!CONGRATULATIONS" 
                                desactivarBotones()
                              
                            }else{
                                document.getElementById("b2").innerHTML="Salud enemigo es:"+salud_enemigo
                            }
                           
                        }
                        
                        } 

    /*function cambiarTurno(){
        if(ataqueDeAgua || ataqueDeFuego|| ataqueElectrico){
            //console.log("Cambiar al jugador 2")
            document.getElementById("b3").innerHTML="Cambiar el turno al jugador 2"

        }
        }

    function cambiarTurno2(){
            if(escudoDeAgua || escudoDeFuego|| escudoElectrico){
                //console.log("Cambiar al jugador 1") 
                document.getElementById("b3").innerHTML="Cambiar el turno al jugador 1"
             
            }
            }*/
        

    let desp_ataque = document.getElementById("ataque")
    let desp_defensa = document.getElementById("defensa")

    function ocultarAtaque(){
            desp_ataque.style.display = "none"
            desp_defensa.style.display = "inline"
            }

    function ocultarDefensa(){
            desp_defensa.style.display = "none"
            desp_ataque.style.display = "inline"
            }

    function desactivarBotones(){
        var buttons=document.getElementsByClassName("desactivar");
        for(var i=0; i<buttons.length;i++){
            buttons[i].style.display="none"
        }

    }   
             
        

   
             
    
