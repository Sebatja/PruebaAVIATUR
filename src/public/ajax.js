// Datos de inptus 
 var nombre_hotel = $('#nombre_hotel').focusout(function() {
    var x = $(this).val();
   
    // Recomiendo usar la consola en lugar de alerts
    console.log(x);

 // Funciones 


      
document.querySelector('#boton').addEventListener('onclick',loadDoc);
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", '/data.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       
      let datos = JSON.parse(this.responseText);
      var newArr = datos.filter(function(el){
        return ((el.name.toLowerCase()).includes(x.toLowerCase()))
  });
  console.log(newArr);
     
    
       let cartas = document.querySelector('#cartas');
       cartas.innerHTML ='';
            let contador = 0;
      for(let item of newArr){
         contador++;

        //  comienzo de armamiento
         
        
        // Estrellas
  if (condition) {
      
  }
      
         
         cartas.innerHTML+= `
         <div class="col s12 m12 l10 offset-l4 offset-xl3 ">
         <div class="row">
           <div class="col s12 m12 l10">
             <div class="card  darken-1">
               <div class="card-content black-text row">
               <div class=" col s12 m6 l5 xl5">
               <img class="Estrellas_imagen" src="/assets/images/hotels/${item.image}" alt="" width="100%" height="250px">
               <br>
               
               </div>
               <div class=" col s12 l3 xl3 name_hotel">
                 ${item.name} 
               </div>
               <div class=" col s12 l3 xl3 Precio hide-on-small-only" >
                 Precio por Noche por habitacion 
                 <a class="waves-effect waves-light btn">button</a>
               </div>
 
               <div class=" col s12  hide-on-med-and-up arriba"  >
                 pequeño
                 <a class="waves-effect waves-light btn">button</a>
               </div>
 
               </div>
              
             </div>
           </div>
         </div>
       </div>
         `




        // Fin
        if(contador == 2 ){
            break;
        }

      }
          
      }
    };
   
  }
loadDoc();

});
//   $('#nombre_hotel').focusout(function() {
//     var x = $(this).val();
//     alert(x);
   
//     // Recomiendo usar la consola en lugar de alerts
//     console.log(x)
// });