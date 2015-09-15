var Service = {
    
    calcular: function(item){
        var total = 0.0;
        for(var i = 0;i <= 3;i++){ 
	        if (item[i].checked == true){ 
	             if(item[i].value == '1'){
	                  total = total + 1.00;
	             }
	             else if(item[i].value == '2'){
	                 total = total + 12.00;
	             }
	             else if(item[i].value == '3'){
	                 total = total + 0.50;
	             }
	             else if(item[i].value == '4'){
	                 total = total + 100.00;
	             }
	        } 
        }
        
        return total;
    }
    
    
};