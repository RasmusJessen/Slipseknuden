document.querySelector('#submit').addEventListener('click', function (event){
    event.preventDefault();
    validering();
    
    // siger fejl hvis der ikke står noget  
    function fejlbesked(err) {
        if (document.querySelector(err).nextElementSibling === null) {
            let fejl = document.createElement('span');
            let text = document.createTextNode('fejl');
            fejl.setAttribute('class', 'fejl');
            fejl.appendChild(text);
            document.querySelector(err).parentElement.appendChild(fejl);
        }
     }
    
    
    
    function validering () {
    
        // sletter alle fejl
        let allefejl = document.querySelectorAll('.fejl');
        //slette hver fejl hvor der står noget
        allefejl.forEach(function(en_fejl) { //fortæller hvad den skal fjerne
             en_fejl.remove();
        });
    
         
        // hvis der ikke står noget siger den fejl, og hvis der står noget går den videre
        if(document.querySelector('#name').value.length === 0) {
            fejlbesked('#name');
            alert("Skriv dit navn");
        } 
        
        if (document.querySelector('#mail').value.length === 0){
            fejlbesked('#mail');
            alert("Skriv din email")
        } 
        
        if (document.querySelector('#msg').value.length === 0) {
            fejlbesked('#msg');
            alert("Skriv din besked");
        } else {
            alert("Vi har modtaget dine oplysninger");
            window.location.replace("/contact");
        }
    
        
        
        
    
    }
    
    });
    