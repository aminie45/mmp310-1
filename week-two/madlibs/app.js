const adjective = document.getElementById("adjective-1");
const verb = document.getElementById("verb-1");
const noun = document.getElementById("noun-1");
const submit = document.getElementById("submit");

submit.onclick = function() {
    
    const message = document.createElement("p");
    document.body.appendChild(message);
    
    message.textContent = "The " + adjective.value + " man was " + verb.value + " down the block when he tripped over a " + noun.value + ".";
};

