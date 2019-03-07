// select the calculation button
const calculateDensityButton = document.querySelector('#calculateDensityButton');

// when the button is clicked, execute the code below
calculateDensityButton.addEventListener('click', function() {
    // select the textbox where the user enters the mass
    const inputMass = document.querySelector('#inputMass');

    // select the unit of the radio button chosen by the user
    const unitMass = document.querySelector('input[name=unitMass]:checked');

    // the mass is the value entered in the textbox, times the unit multiplier
    // (the default unit is g, so the multiplier is in terms of g. For example: 1 kg = 1000 g)
    const mass = inputMass.value * unitMass.value;



    // do the same as above for the volume
    const inputVolume = document.querySelector('#inputVolume');
    const unitVolume = document.querySelector('input[name=unitVolume]:checked');
    const volume = inputVolume.value * unitVolume.value;



    // calculate the density
    const density = mass / volume;



    // get the ID of the mass unit selected by the user
    const unitMassId = unitMass.getAttribute('id');

    // get the label associated with that ID
    const unitMassLabel = document.querySelector(`label[for=${unitMassId}]`).innerHTML;

    // do the same for the volume unit
    const unitVolumeId = unitVolume.getAttribute('id');
    const unitVolumeLabel = document.querySelector(`label[for=${unitVolumeId}]`).innerHTML;
    


    // if the result is valid (a number), write the result below in the HTML
    if (typeof density === 'number') {
        calculateDensityResult.innerHTML = `The density of your object is ${density} ${unitMassLabel} / ${unitVolumeLabel}.`;
    }

    // otherwise, write error
    else {
        calculateDensityResult.innerHTML = `Error.`;
    }

});
