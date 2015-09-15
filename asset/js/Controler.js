 var Controle = {
     init:function(){
         Controle.setForm();
     },
     
     
     setForm: function(){
         var form = document.querySelector('form');
         form.addEventListener("submit", function(event){
             Controle.CalcularTotal(form);
             event.preventDefault();
         });
     },
     
     CalcularTotal: function(form) {
         var 
            item = document.getElementsByName("item"),
            result = 0;
            
           
        var  result =  Service.calcular(item);
        Controle.apresentarResultado(result);
     },
     
     apresentarResultado: function(result){
         var resultado = document.querySelector('.result');
         resultado.innerHTML = result.toFixed(2);
     }
     
 };
 
 Controle.init();