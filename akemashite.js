const container = document.querySelector('.container');

makeEnvelope();

function makeEnvelope() {
    container.innerHTML = '';
    container.classList.add('envelope');
    const envelopeBox = createNewElement('div', ['envelopeBox']);
    container.appendChild(envelopeBox);

    container.addEventListener('click', () => {
        container.classList.add('clicked');
        setTimeout(makeCard, 2000);
    })
}


function makeCard(){
    container.innerHTML = '';
    container.classList.remove('envelope');
    container.style.pointerEvents = 'none';
    
    const mouse1 = createNewElement('div', ['mouse1']);
    const mouse2 = createNewElement('div', ['mouse2']);
    const decoration = createNewElement('div', ['decoration']);
    const mochi = createNewElement('div', ['mochi']);
    const mouse4 = createNewElement('div', ['mouse4']);
    const mouse5 = createNewElement('div', ['mouse5']);
    const mouse6 = createNewElement('div', ['mouse6']);
    const mouse7 = createNewElement('div', ['mouse7']);
    const fan = createNewElement('div', ['fan']);
    const daruma = createNewElement('div', ['daruma']);
    const message = createNewElement('div', ['messageBox']);
    const text = createNewElement('h1', ['text'], '明けましておめでとう');
    const tiger = createNewElement('div', ['tiger']);
    
    container.append(mouse1, decoration, mochi, mouse6, mouse7, message);
    
    decoration.appendChild(mouse2);
    mochi.append(mouse4, mouse5);
    mouse6.appendChild(fan);
    mouse7.appendChild(daruma);
    message.append(tiger, text);
}


function createNewElement ( 
    type, classes = null, text = null, attributes = null) {

let createdElement = document.createElement(type);

if (classes) {
createdElement.classList.add(...classes);
}

if (text) {
createdElement.textContent = text;
}

if (attributes) {
for (let key in attributes) {
    createdElement.setAttribute(key, attributes[key])
}
}

return createdElement;
}