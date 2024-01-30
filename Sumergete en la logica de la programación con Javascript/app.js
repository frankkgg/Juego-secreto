                     //estas son las variables 
                     let numeroSecreto = Math.floor(Math.random()*100)+1;
                     let numeroUsuario = 0;
                     let intentos = 1;
                     //let palabraVeces = 'vez';
                     let maximosIntentos = 6; 
                        while (numeroUsuario != numeroSecreto) {
                           numeroUsuario = parseInt(prompt('Me indicas un número entre 1 y 100 por favor:'));


                     console.log(typeof(numeroUsuario));

                     // este codigo realiza la comparación

                     if(numeroUsuario == numeroSecreto) {
                        // acertamos fue verdadera la condición 
                     alert(`El número es el correcto, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} 
                     ${intentos == 1 ? 'vez' : 'veces' }`);

                     } else {
                           if (numeroUsuario > numeroSecreto){
                              alert('El número secreto es menor');
                           }     else{
                              alert('El número secreto es mayor');
                           }
                           //incrementamos el contador cuando no acierta
                           //intentos = intentos + 1; 
                           //intentos += 1;
                           intentos++;

                           //palabraVeces = 'Veces';
                           if (intentos > 3){
                              alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
                              break;
                           }
                        // la condición no se cumplió
                        //alert('Lo siento, tu número no es el correcto');
                     }
                  } 