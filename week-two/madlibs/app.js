const adjectiveInput = document.getElementById("adjective-1");
const verbInput = document.getElementById("verb-1");
const nounInput = document.getElementById("noun-1");
const submit = document.getElementById("submit");

submit.onclick = function() {
    
    verb = verbInput.value;
    noun = nounInput.value;
    adjective = adjectiveInput.value;
    
    
    if (!verb && !noun && !adjective){
        const error = document.createElement("p");
        document.body.appendChild(error);

        error.textContent = "Please fill out all fields.";
        
    } else {
        const message = document.createElement("p");
        document.body.appendChild(message);

        message.textContent = "The " + adjective + " man was " + verb + " down the block when he tripped over a " + noun + ".";
    }
    
};

