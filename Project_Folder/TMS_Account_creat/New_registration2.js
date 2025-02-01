const data = {
    "Province 1": {
        "Bhojpur": ["Aamchok","Arun","Bhojpur","Hatuwagadhi","Sadananda","Salpasilichho","Temkemaiyung"],
        "Dhankuta": ["Mahalaxmi","Pakhribas","Chhathar Jorpati","Shahidbhumi","Dhankuta","Sangurigadhi","Chaubise"],
        "Illam": ["Sandakpur","Phakphokthum","Deumai","Illam","Maijogmai","Suryodaya","Mangsebung","Rong","Mai","Chulachuli"],
        "Jhapa": ["Damak","Kamal","Shivasatakshi","Kankai","Arjundhara","Birtamod","Buddhashanti","Mechinagar","Gauradaha","Gaurigunj","Jhapa","Bahradashi","Haldibari","Bhadrapur","Kachankawal"],
        "Khotang": ["Ainselukharka","Kepilasgadhi","Rawabesi","Halesi Tuwachung","Diktel Rupakot Majhuwagadhi","Sakela","Diprung Chuichumma","Khotehang","Jantedhunga","Barahapokhari"],
        "Morang": ["Kerabari","Letang","Miklajung","Sundarharaincha","Belbari","Kanepokhari","Pathari Sh","Urlabari","Rangeli","Sunbarsi","Ratuwamai","Dhanpalthan","Katahari","Jahada","Biratnagar","Gramthan","Budhiganga"],
        "Okhaldhunga": ["Khijidemba","Likhu","Molung","Champadevi","Siddhicharan","Sunkoshi","Manebhanjyang","Chishankhugadhi"],
        "Panckthar": ["Yangwarak","Hikihang","Phalelung","Phidim","Kummayak","Phalgunanda","Tumbewa","Miklajung"],
        "Sankhuwasabha": ["Bhotkhola","Makalu","Silichong","Chichila","Khandbari","Sabhapokhari","Panchkhapan","Chainpur","Madi","Dharmadevi"],
        "Solukhumbu": ["Khumbu Pasanglhamu","Mahakulung","Likhupike","Solu Dudhkunda","Mapya Dudhkoshi","Sotang","Thulung Dudhkoshi","Nechasalyan"],
        "Sunsari": ["Dharan","Barahakshetra","Ramdhuni","Itahari","Inaruwa","Gadhi","Duhabi","Harinagar","Dewangunj","Barju","Bhokraha Narsingh","Koshi","Koshi Tappu Wildlife Reserve"],
        "Taplehung": ["Maiwakhola","Phaktanglung","Meringden","Mikwakhola","Phungling","Aathri Triveni","Pathibhara","Sidingwa"],
        "Terathum": ["Aathari","Menchhayayem","Phedap","Laligurans","Myanglung","Chhathar"],
        "Udaypur": ["Katari","Tapli","Udaypurgadhi","Limchungbung","Rautamai","Triyuga","Chaudandigadhi","Belaka"],
    },
    "Province 2": {
        "Bara": ["Nijgadh", "Jitpur Simra","Kolhawi","Parwanipur","Prasauni","Kalaiya","Karaiyamai","Bishrampur","Pheta","Devtal","Mahagadhimai","Baragadhi","Aadarsha Kotwal","Suvarna","Pachrauta","Simraungadh"],
        "Dhanusa": ["Mithila","Ganeshman Charnath","Kshireshwornath","Dhanusadham","Laxminiya","Mithila Bihari","Janakpurdham","Hansapur","Sabaila","Aurahi","Shahidnagar","Mukhiya","Nagarain","Dhanauji","Bidha","Janaknandini","Kamala"],
        "Mahottari": ["Bardibas","Gaushala","Sonma","Aurahi","Bhangaha","Samsi","Ramgopalpur","Balawa","Loharpatti","Ekdara","Mahottari","Pipara","Jaleshwor","Matihani"],
        "Parsa": ["Chitwan National Park","Thori","Parsa Wildlife Reserve","Jirabhawan","Jagarnathpur","Paterwa Sugauli","Sakhuwa Prasauni","Parsagadhi","Dhobini","Pokhariya","Bahudarmai","Birgunj","Chhipaharmai","Kalikamai","Pakaha Mainpur","Bindabasini"],
        "Rauthat": ["Chandrapur","Gujara","Phatuwa Bijayapur","Katahariya","Brindaban","Maulapur","Baudhimai","Dewahi Gonahi","Garuda","Madhavnarayan","Gadhimai","Paroha","Rajpur","Ishnath","Gaur","Rajdevi"],
        "Saptari": ["Surunga","Balanbihul","Bodebarsain","Khadak","Shambhunath","Rupani","Dakneshwori","Rajgadh","Bishnupur","Chhinnamasta","Rajbiraj","Mahadeva","Tilathi Koiladi","Tirahut","Hanumannagar Kankalini","Agnisair K","Kanchanrup","Saptakoshi","Koshi Tappu Wildlife Reserve"],
        "Sarlahi": ["Hariwan","Lalbandi","Bagmati","Haripur","Ishworpur","Barahathawa","Basbariya","Dhanakaul","Ramnagar","Balara","Godaita","Bishnu","Kaudena","Malangawa","Chakraghatta","Kabilasi","Chandranagar","Brahmapuri","Parsa","Haripurwa"],
        "Siraha": ["Karjanaha","Mirchaiya","Kalyanpur","Naraha","Golbazar","Dhangadhimai","Lahan","Bishnipur","Siraha","Arnama","Aurahi","Sukhipur","Bariyarpatti","Laxmipur Patari","Sakhuwa Na","Navarajpur","Bhagwanpur"],
    },
    "Province 3 ": {
        "Bhaktapur": ["Changunarayan","Madhyapur Thimi","Bhaktapur","Suryabinayak"],
        "Chitwan": ["Ichchhakamana","Kalika","Rapti","Bharatpur","Ratnanagar","Khairahani","Chitwan National Park","Madi"],
        "Dhading": ["Rubivalley","Gangajamuna","Khaniyabas","Tripurasundari","Netrawati Dabjong","Jwalamukhi","Nilkantha","Siddhalek","Benighat Rorang","Gajuri","Galchhi","Thakre","Dhunibesi"],
        "Dolakha": ["Bigu","Gaurishankar","Kalinchok","Bhimeshwor","Shailung","Melung","Tamakoshi","Baiteshwor","Jiri"],
        "Kathmandu": ["Dakashinkali","Kirtipur","Chandragiri","Nagarjun","Kathmandu","Tarakeshwor","Tokha","Budhanilkantha","Gokarneshwor","Kageshwori Manohara","Shankharapur"],
        "Kavrepalanchok": ["Mandan Deupur","Banepa","Panauti","Dhulikhel","Namobuddha","Bhumlu","Chauri Deurali","Bethanchok","Khanikhola","Mahabharat","Roshi","Temal"],
        "Lalitpur": ["Lalitpur","Mahalaxmi","Godawari","Konjyosom","Bagmati","Mahankal"],
        "Makwanpur": ["Raksirang","Kailash","Thaha","Indrasarowar","Chitwan National Park","Parsa Wildlife Reserve","Manahari","Bhimphedi","Makwanpurgadhi","Hetaunda","Bakaiya","Bagmati"],
        "Nuwakot": ["Kispang","Myagang","Tarakeshwor","Bidur","Belkotgadhi","Suryagadhi","Likhu","Kakani","Tadi","Panchakanya","Langtang National Park","Dupcheshwor","Shivapuri","Shivapuri Watershed & Wildlife Reserve"],
        "Ramechhap": ["Doramba","Sunapati","Khandadevi","Manthali","Ramechhap","Likhu Tamakoshi","Gokulganga","Umakunda"],
        "Rasuwa": ["Parbatikunda","Gosainkunda","Uttargaya","Kalika","Naukunda"],
        "Sindhuli": ["Hariharpurgadhi","Marin","Ghyanglekh","Sunkoshi","Kamalamai","Golanjor","Tinpatan","Phikkal","Dudhauli"],
        "Sindhupalchok": ["Lisankhupakhar","Sunkoshi","Balephi","Bahrabise","Tripurasundari","Khotekoshi","Jugal","Panchpokhari Thangpal","Helambu","Melamchi","Indrawati","Chautara Sangachokgadhi"],
    },
    "Province 4": {
        "Baglung": ["Dhorpatan Wildlife Reserve","Nisikhola","Dhorpatan","Tamankhola","Badigad","Tarakhola","Galkot","Kathekhola","Bareng","Jaimini","Baglung"],
        "Gorkha": ["Chumnubri","Dharche","Ajirkot","Siranchok","Barpak Sulikot","Aarughat","Palungtar","Gorkha","Shahid Lakhan","Gandaki","Bhimsen Thapa"],
        "Kaski": ["Annapurna","Machhapuchchhre","Madi","Pokhara","Rupa"],
        "Lamjung": ["Marsyangdi","Kwholasothar","Dordi","Madhyanepal","Besishahar","Dundarbazar","Rainas","Dudhpokhari"],
        "Manang": ["Manang Ngisyang","Narpabhumi","Nason","Chame"],
        "Mustang": ["Lomanthang","Lo-Ghekar Damodarkunda","Baragung Muktikshetra","Gharpajhong","Thasang"],
        "Myagdi": ["Dhorpatan Hunting Reserve","Dhawalagiri","Raghuganga","Annapurna","Malika","Mangala","Beni"],
        "Nawalparasi(purba)": ["Baudikali","Bulingtar","Hupsekot","Devchuli","Gaindakot","Kawasoti","Binayi Triveni","Madhyabindu"],
        "Parbat": ["Jaljala","Modi","Kushma","Phalebas","Mahashila","Bihadi","Paiyun"],
        "Syangja": ["Arjunchaupari","Phedikhola","Aandhikhola","Putalibazar","Bhirkot","Waling","Biruwa","Harinas","Chapakot","Kaligandaki","Galyang"],
        "Tanahun": ["Shuklagandaki","Bhimad","Ghiring","Myagde","Rishing","Byas","Bhanu","Bandiur","Devghat","Aanbukhaireni"],
    },
    "Province 5": {
        "Arghakhanchi": ["Malarani","Bhumikasthan","Sandhikharka","Chhatradev","Panini","Shitganga"],
        "Banke": ["Baijanath","Khajura","Janaki","Nepalgunj","Duduwa","Rapti Sonari","Kohalpur","Narainapur"],
        "Bardiya": ["Geruwa","Rajpur","Thakurbaba","Bardiya National Park","Barbardiya","Gulariya","Badhaiyatal","Bansgadhi"],
        "Dang": ["Babai","Shantinagar","Dangisharan","Tulsipur","Ghorahi","Lamahi","Rajpur","Bangalachuli","Rapti","Gadhawa"],
        "Gulmi": ["Malika","Madane","Dhurkot","Isma","Resunga","Musikot","Gulmidarbar","Chandrakot","Kaligandaki","Satyawati","Ruru","Chhatrakot"],
        "Kapilvastu": ["Bijayanagar","Shivaraj","Krishnanagar","Maharajgunj","Buddhabhumi","Banganga","Kapilbastu","Yashodhara","Mayadevi","Shuddhodan"],
        "Nawalparasi(pashichim)": ["Sunwal","Ramgram","Palhinandan","Sarawal","Bardaghat","Pratappur","Susta"],
        "Palpa": ["Rainadevi Chhahara","Ribdikot","Tinau","Tansen","Baganaskali","Rambha","Mathagadhi","Purbakhola","Rampur","Nisdi"],
        "Pyuthan": ["Naubahini","Gaumukhi","Jhimruk","Swargadwari","Pyuthan","Mandavi","Airawati","Mallarani","Airawati"],
        "Rolpa": ["Gangadev","Triveni","Madi","Parivartan","Rolpa","Thawang","Sunchhahari","Lungri","Sunil Smriti","Runtigadhi"],
        "Rukum(Eastern)" : ["Bhume","Sisne","Putha Uttarganga","Dhorpatan Wildlife Reserve"],
        "Rupandehi": ["Sainamaina","Butwal","Devdaha","Kanchan","Shuddhodan","Tilottama","Gaidahawa","Siyari","Rohini","Omsatiya","Siddharthanagar","Mayadevi","Kotahimai","Lumbini Sanskritik","Sammarimai","Marchawari"],
    },
    "Province 6": {
        "Dailekh": ["Aathbis","Thantikandh","Chamunda Bindrasaini","Bhairvi","Dullu","Mahabu","Naumule","Narayan","Bhagawatimai","Dungeshwor","Gurans"],
        "Dolpa": ["Jagadulla","Mudkechula","Tripurasundari","Thulibheri","Kaike","Shey Phoksundo","Dolpobuddha","Chharka Tangsong"],
        "Humla": ["Namkha","Simkot","Kharpunath","Chankheli","Sarkegad","Adanchuli","Tanjakot"],
        "Jajarkot": ["Barekot","Junichande","Kushe","Nalgad","Chhedagad","Shivalaya","Bheri"],
        "Jumla": ["Kanakasundari","Sinja","Hima","Tila","Tatopani","Chandannath","Guthichaur","Patarasi"],
        "Kalikot": ["Sanni Triveni","Naraharinath","Raskot","Pachaljharna","Palata","Khandachakra","Shuvakalika","Tilagupha","Mahawai"],
        "Mugu": ["Khatayad","Soru","Chhayanatha Rara","Mugum Karmarong"],
        "Rukum(western)": ["Triveni","Musikot","Chaurjahari","Sanibheri","Banphikot","Aathbiskot"],
        "Salyan": ["Kumakh","Darma","Bangad Kupinde","Siddhakumakh","Bagchaur","Sharada","Chhatreshwori","Kalimati","Triveni","Kapurkot"],
        "Surkhet": ["Chaukune","Panchapuri","Barahatal","Birendranagar","Lekbesi","Chingad","Simta","Gurbhakot","Bheriganga"],
    },
    "Province 7": {
        "Achham": ["Chaurpati","Sanphebagar","Mellekh","Ramaroshan","Bannigadhi Jayagadh","Mangalsen","Dhakari","Turmakhand","Kamalbazar","Panchdeval Binayak"],
        "Baitadi": ["Dilasaini","Dogadakedar","Purchaudi","Sigas","Surnaya","Patan","Dasharath Chand","Melauli","Shivanath","Pancheshwor"],
        "Bajhang": ["Kedarsyun","Durgathali","Chhabis Pathibhera","Jayaprithvi","Masta","Khaptadchhanna","Khaptad National Park","Thalara","Bitthadchir","Bungal","Surma","Talkot","Saipal"],
        "Bajura": ["Triveni","Budhiganga","Khaptad Chhededaha","Gaumul","Badimalika","Jagannath","Budhinanda","Swamikartik Khapar","Himali"],
        "Dadeldhura": ["Ajayameru","Navadurga","Bhageshwor","Amargadhi","Ganyapdhura","Aalital","Parashuram"],
        "Darchula": ["Lekam","Malikarjun","Shailyashikhar","Marma","Naugad","Mahakali","Duhun","Apihimal","Vyans"],
        "Doti": ["Khaptad National Park","Aadarsha","Sayal","Shikhar","Dipayal Dilgadhi","Purbichauki","K.I Singh","Jorayal","Badikedar","Bogatan Phudsil"],
        "Kailali": ["Chure","Godawari","Dhangadhi","Gauriganga","Kailari","Ghodaghodi","Mahanyal","Bardgoriya","Joshipur","Bhajani","Tikapur","Janaki","Lamkichuha"],
        "Kanchanpur":["Dodharachandani","Bhimdatta","Bedkot","Shuklaphanta National Park","Shuklaphanta","Krishnapur","Laljhadi","Beldandi","Belauri","Punarbas"],
    },
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

function updateBranch(){
    const selectBank=document.getElementById("Bank");
    const selectBranch=document.getElementById("Branch");
    const selectedBank=selectBank.value;
    selectBranch.innerHTML='<option value="" disabled selected>Select Branch</option>';
    if(selectedBank){
        const setBranches=banks[selectedBank];
        setBranches.forEach(branch=>{
            const BranchName=document.createElement("option");
            BranchName.value=branch;
            BranchName.textContent=branch;
            selectBranch.appendChild(BranchName);
        });
    }
}
function dataFilling(){
    document.getElementById("temporary-state").value=document.getElementById("permanent-state").value;
    document.getElementById("temporary-district").value=document.getElementById("permanent-district").value;
    document.getElementById("temporary-municipality").value=document.getElementById("permanent-municipality").value;
    document.getElementById("temporary-wardno").value=document.getElementById("parmanent-wardno").value;
    document.getElementById("temporary-street").value=document.getElementById("permanent-street").value;
}
function sameAddress(addressPara){
    let TempSection=document.getElementById("Temporary_Address"); // navigation for add or same as pr address FUN for POPUP
    let deVisionSec=document.getElementById("dive-division-section");//new field for add temp address
    let sameAsPr=document.getElementById("check_box");
    let errorPop=document.getElementById("fill_error");
    let errorPopNone=document.querySelector(".error_cross");
    if(addressPara=="10"){
        TempSection.style.display="none";
        deVisionSec.style.display="block";
        dataFilling();
    }
    else if(addressPara=="Yes"){sameAsPr.checked=false;}
    else{
        setTimeout(()=>{sameAsPr.checked=false;},500);
        TempSection.style.display="block";
        deVisionSec.style.display="none";
        errorPop.style.display="block";
        errorPopNone.onclick=function(){errorPop.style.display="none";};
        setTimeout(()=> {
            errorPop.style.display="none";
        },2000);
    }
}
window.onload=function(){
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

    let TempAddBtn=document.getElementById("add_btn");
    let TempSection=document.getElementById("Temporary_Address");
    let deVisionSec=document.getElementById("dive-division-section");
    let deVisionDel=document.getElementById("Address_delete");
    TempAddBtn.onclick=function(){
        TempSection.style.display="none";
        deVisionSec.style.display="block";
        tempError("Yes");
    }
    deVisionDel.onclick=function(){
        TempSection.style.display="block";
        deVisionSec.style.display="none";
        tempError("Yes");
        sameAddress("Yes");
    }
}

