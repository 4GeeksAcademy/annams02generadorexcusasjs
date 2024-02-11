window.onload = () =>	
{
	let who = new Array(); 
		who[0] = "El perro";
		who[1] = "El tigre";
		who[2] = "El gato";

	let action = new Array();				
		action[0] = "se volvió rosa";
		action[1] = "escapó por el mar";
		action[2] = "me habló";

	let when = new Array();		
		when[0] = "hace 1 minuto";
		when[1] = "justo ahora";
		when[2] = "hace un rato";
	{
    document.querySelector("#message1").innerHTML = who
    [Math.floor(Math.random()*who.length)]; 	
    document.querySelector("#message2").innerHTML = action
    [Math.floor(Math.random()*action.length)];	
    document.querySelector("#message3").innerHTML = when
    [Math.floor(Math.random()*when.length)]; 

    }
    var person = document.querySelector("#message1").innerHTML = who
    [Math.floor(Math.random()*who.length)]; 
    var accion1 = document.querySelector("#message2").innerHTML = accion
    [Math.floor(Math.random()*accion.length)];
    var tiempo1 = document.querySelector("#message3").innerHTML = when
    [Math.floor(Math.random()*when.length)]; 
    console.log(person);
    console.log(action2);
    console.log(when1);
  
  
  
  }