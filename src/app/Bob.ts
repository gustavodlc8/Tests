function askResponse(asnwer:string):string{
    if(asnwer.includes("?")){
        return "Sure.";
    }else if(asnwer === asnwer.toUpperCase()){
        return "Whoa, chill out!";  
    }else if(asnwer.includes("?") && asnwer === asnwer.toUpperCase()){
        return "Calm down, I know what I'm doing!";
    }else if(asnwer.trim() === ""){
        return "Fine. Be that way!";
    }else{
        return "Whatever.";
    }
}