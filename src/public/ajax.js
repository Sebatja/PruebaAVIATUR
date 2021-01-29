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
       
        //
        
      let datos = JSON.parse(this.responseText);
     
      
      var newArr = datos.filter(function(el){
  
        return el.name.toLowerCase().includes(x.toLowerCase())
  });
  console.log(newArr);
     
    
       let cartas = document.querySelector('#cartas');
       cartas.innerHTML ='';
            let contador = 0;
      for(let item of newArr){
         contador++;

        //  comienzo de armamiento
         
        
        // Estrellas
      
  function cantidadEstrellas(estrellas){
       if(estrellas == 1){

      return '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'
       }
       if(estrellas == 2){
  return  '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'+
  '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'
        
      }
      if(estrellas == 3){
        return  '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px"> '+
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'+
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'
              
        
      }
      if(estrellas == 4){
        return  '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px"> '+
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'+
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">' +
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'
              
      }
      if(estrellas == 5){
        return  '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px"> '+
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'+
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">' +
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">' +
        '<img class="Estrellas_imagen" src="../assets/icons/filters/star.svg" alt="" width="20px" height="20px">'
              
      }

     
    
  }

  //Icoconos
     function cantidadIconos(valor){

      imagenes = '';


     for (x of valor) {
   console.log(x);
   if (x == 'bathrobes') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/bathrobes.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'bathtub') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/bathtub.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'beach-pool-facilities') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/beach-pool-facilities.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'beach') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/beach.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'business-center') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/business-center.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'coffe-maker') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/coffe-maker.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'children-club') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/children-club.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'deep-soaking-bathtub') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/deep-soaking-bathtub.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'fitness-center') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/fitness-center.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'gardenr') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/gardenr.svg" alt="" width="20px" height="20px">'
   }
    if (x == 'kitchen-facilities') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/kitchen-facilities.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'newspaper') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/newspaper.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'nightclub') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/nightclub.svg" alt="" width="20px" height="20px">'
   }

   if (x == 'restaurant') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/restaurant.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'separate-bredroom') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/separate-bredroom.svg" alt="" width="20px" height="20px">'
   }

 

   if (x == 'safety-box') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/safety-box.svg" alt="" width="20px" height="20px">'
   }
   if (x == 'sheets') {
    imagenes+= '<img class="Estrellas_imagen" src="../assets/icons/amenities/sheets.svg" alt="" width="20px" height="20px">'
   }
}
return imagenes;
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
               <div class=" col s12 l5 xl5 name_hotel">
                 ${item.name} 
                 <br>
                 ${cantidadEstrellas(item.stars)}
                 <br>
               <div class="separador_iconos">  ${cantidadIconos(item.amenities)}</div>
               
               </div>
               <div class=" col s12 l2 xl2 Precio hide-on-small-only center-align" >
              
               <h7 class=" texto-habitacion "  >  Precio por noche por habitacion </h7>
                 
                 <br>
                 <br>
                 
                 <div class ="ars ">
                 
                 ARS 
                 <strong> ${item.price}</strong>

                 
                 </div>
              <br>
                 <a class="waves-effect waves-light btn blue darken-4">VER HOTEL</a>
               </div>
               <br>
               <br>
               <br>
                   <br>
                   <br>
 
               <div class=" col s12  hide-on-med-and-up row center-align "  >
                 <h7 class=" texto-habitacion col s12 "  >  Precio por noche por habitacion </h7>
                 
                 <br>
                 <br>
                 
                 <div class ="ars col s12  ">
                 
                 ARS 
                 <strong> ${item.price}</strong>
                 <a class="waves-effect waves-light btn blue darken-4 col s12">VER HOTEL</a>
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






