// Dynamically assign options to the select fields
const states = ['California', 'Texas', 'Florida', 'New York'];
const countries = ['USA', 'Canada', 'Mexico', 'UK'];

function populateSelectOptions(selectElement, options) {
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        selectElement.appendChild(opt);
    });
}

window.onload = () => {
    const permanentState = document.getElementById('permanentState');
    const permanentCountry = document.getElementById('permanentCountry');
    const temporaryState = document.getElementById('temporaryState');
    const temporaryCountry = document.getElementById('temporaryCountry');

    populateSelectOptions(permanentState, states);
    populateSelectOptions(permanentCountry, countries);
    populateSelectOptions(temporaryState, states);
    populateSelectOptions(temporaryCountry, countries);
};

// Copy Permanent Address to Temporary Address
document.getElementById('sameAsPermanentBtn').addEventListener('click', () => {
    document.getElementById('temporaryStreet').value = document.getElementById('permanentStreet').value;
    document.getElementById('temporaryCity').value = document.getElementById('permanentCity').value;
    document.getElementById('temporaryState').value = document.getElementById('permanentState').value;
    document.getElementById('temporaryCountry').value = document.getElementById('permanentCountry').value;
});
