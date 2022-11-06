function getBotResponse(input) {
     // Simple responses
    if (input == "hello") {
        return "Hello there! how can I help you";
    } 
    
    else if (input == "bye") {
        return "Talk to you later!";
    }
    else if(input == "thank you"){
        return "happy to help";
    }
    else if(input == "thank you so much"){
        return "happy to help";
    } 
    else if(input == "thanks"){
        return "happy to help";
    }
    else if(input == "how to donate blood?"){
        return "to donate blood you have to register first on our page as a donor and then check for nearby available blood banks.";
    }
    else if(input == "nearby blood banks"){
        return "you have to register/login first on our page as a donor and then can check for nearby available blood banks.";
    }

    else if(input == "how to receive blood?"){
        return "to receive you have to check for blood availability on our website.";
    }
    else if(input == "how to add my blood bank onto your website?"){
        return "you have to register/login first on our page as a blood bank and then you will get your blood bank on our website.";
    }
    else if(input == "can I get your helpline number?"){
        return "sure, here it is: toll-free: 1800-372-344/6700-948-434";
    }
    else if(input == "helpline number"){
        return "sure, here it is: toll-free: 1800-372-344/6700-948-434";
    }
    else if(input == "helpline"){
        return "sure, here it is: toll-free: 1800-372-344/6700-948-434";
    }
    else {
        return "Try asking something else!";
    }
}