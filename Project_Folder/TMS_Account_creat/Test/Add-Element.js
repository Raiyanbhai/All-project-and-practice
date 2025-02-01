function getSelectedState() {
    let state = document.getElementById("state");
    let selectedValue = state.value;
    switch(selectedValue) {
        case "Province1":
            setValueProvince1();
            break;
        case "Province2":
            setValueProvince2();
            break;
        case "Province3":
            setValueProvince3();
            break;
        case "Province4":
            setValueProvince4();
            break;
        case "Province5":
            setValueProvince5();
            break;
        case "Province6":
            setValueProvince6();
            break;
        case "Province7":
            setValueProvince7();
            break;
        default:
            console.log("Invalid selected value");
            break;
    }
}

var District = document.getElementById("district");

function setValueProvince1() {
    let Dplaces = ['Bhojpur', 'Dhankuta', 'Illam', 'Jhapa', 'Khotang', 'Morang', 'Okhaldhunga', 'Panckthar', 'Sankhuwasabha', 'Solukhumbu', 'Sunsari', 'Taplejung', 'Terathum', 'Udaypur'];
    setElement(Dplaces);
}

function setValueProvince2() {
    let dPlaces = ['Bara', 'Dhanusa', 'Mahottari', 'Parsa', 'Rautahat', 'Saptari', 'Sarlahi', 'Siraha'];
    setElement(dPlaces);
}

function setValueProvince3() {
    // Add districts for Province 3
    let dPlaces = ['Bhaktapur', 'Chitwan', 'Dhading', 'Dolakha', 'Kathmandu', 'Kavrepalanchok', 'Lalitpur', 'Makwanpur', 'Nuwakot', 'Ramechhap', 'Rasuwa', 'Sindhuli', 'Sindhupalchok'];
    setElement(dPlaces);
}

function setValueProvince4() {
    // Add districts for Province 4
    let dPlaces = ['Baglung', 'Gorkha', 'Kaski', 'Lamjung', 'Manang', 'Mustang', 'Myagdi', 'Nawalparasi(purba)', 'Parbat', 'Syangja', 'Tanahun'];
    setElement(dPlaces);
}

function setValueProvince5() {
    // Add districts for Province 5
    let dPlaces = ['Arghakhanchi', 'Banke', 'Bardiya', 'Dang', 'Eastern Rukum', 'Gulmi', 'Kapilvastu', 'Nawalparasi(pashchim)', 'Parasi', 'Palpa', 'Pyuthan', 'Rolpa', 'Rupandehi'];
    setElement(dPlaces);
}

function setValueProvince6() {
    // Add districts for Province 6
    let dPlaces = ['Dailekh', 'Dolpa', 'Humla', 'Jajarkot', 'Jumla', 'Kalikot', 'Mugu', 'Salyan', 'Surkhet', 'Western Rukum'];
    setElement(dPlaces);
}

function setValueProvince7() {
    // Add districts for Province 7
    let dPlaces = ['Achham', 'Baitadi', 'Bajhang', 'Bajura', 'Dadeldhura', 'Darchula', 'Doti', 'Kailali', 'Kanchanpur'];
    setElement(dPlaces);
}

function setElement(PlaceData) {
    // Remove all options except the first one
    District.options.length = 1;

    for(let i = 0; i < PlaceData.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", PlaceData[i]);
        option.innerText = PlaceData[i];
        District.append(option);
    }
}
