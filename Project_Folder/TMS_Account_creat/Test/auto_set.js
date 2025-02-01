const data = {
    "Province 1": {
        "District A": ["Municipality 1", "Municipality 2"],
        "District B": ["Municipality 3", "Municipality 4"]
    },
    "Province 2": {
        "District C": ["Municipality 5", "Municipality 6"],
        "District D": ["Municipality 7", "Municipality 8"]
    },
    // Add other provinces and districts here
};

function updateDistricts(type) {
    const stateSelect = document.getElementById(`${type}-state`);
    const districtSelect = document.getElementById(`${type}-district`);
    const municipalitySelect = document.getElementById(`${type}-municipality`);

    const selectedState = stateSelect.value;
    districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';
    municipalitySelect.innerHTML = '<option value="" disabled selected>Select Municipality</option>';

    if (selectedState) {
        const districts = data[selectedState];
        for (const district in districts) {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        }
    }
}

function updateMunicipalities(type) {
    const stateSelect = document.getElementById(`${type}-state`);
    const districtSelect = document.getElementById(`${type}-district`);
    const municipalitySelect = document.getElementById(`${type}-municipality`);

    const selectedState = stateSelect.value;
    const selectedDistrict = districtSelect.value;
    municipalitySelect.innerHTML = '<option value="" disabled selected>Select Municipality</option>';

    if (selectedState && selectedDistrict) {
        const municipalities = data[selectedState][selectedDistrict];
        municipalities.forEach(municipality => {
            const option = document.createElement('option');
            option.value = municipality;
            option.textContent = municipality;
            municipalitySelect.appendChild(option);
        });
    }
}

window.onload = function() {
    const states = Object.keys(data);
    const permanentStateSelect = document.getElementById('permanent-state');
    const temporaryStateSelect = document.getElementById('temporary-state');

    states.forEach(state => {
        const permanentOption = document.createElement('option');
        permanentOption.value = state;
        permanentOption.textContent = state;
        permanentStateSelect.appendChild(permanentOption);

        const temporaryOption = document.createElement('option');
        temporaryOption.value = state;
        temporaryOption.textContent = state;
        temporaryStateSelect.appendChild(temporaryOption);
    });
};
