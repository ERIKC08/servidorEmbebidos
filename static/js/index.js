//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "erikccushpa10@gmail.com/tema1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led on";
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "erikccushpa10@gmail.com/tema1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function ERIKC(){	
	//alert("led off");
	console.log("ERIKC");
	message = new Paho.MQTT.Message("HOLA SOY ERIKC");
    	message.destinationName = "erikccushpa10@gmail.com/tema1";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "erikccushpa10@gmail.com",
    password: "realmadrid07",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado....");
	
    client.subscribe("erikccushpa10@gmail.com/tema1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "erikccushpa10@gmail.com/tema2";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  //document.getElementById("sensor").innerHTML="LISTO";
	  document.getElementById("sensor").innerHTML=message.payloadString;
	  document.getElementById("sensor1").innerHTML=message.payloadString;
	  document.getElementById("FIN_E").innerHTML=message.payloadString;
  }
  
