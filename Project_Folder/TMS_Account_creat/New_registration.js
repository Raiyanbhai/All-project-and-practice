
// Address state section
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

const banks={
    "Everest Bank Limited": ["Chandranigahapur Branch","Jorpati Branch","Gorkha Branch","Bauniya Branch","Krishnanagar Branch","Dipayal Branch","Tikapur Branch","Tulsipur Branch","Rukum Branch","Baglung Branch","Birgunj Branch","Battar Branch","Garuda Branch","Khadbari Branch","Tandi Branch","Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch","Gulariya Branch","Dhangadi Branch","Satungal Branch","Lumbini Branch","Bagbazaar Branch","Lazimpat Branch","Biratnagar Branch","Balaju Branch","Butwal Branch","Bhairahawa Branch","Teku Branch","Rajbiraj Branch","Golfutar Branch","Kushma Branch","Itahari Branch","Mahendranagar Branch","Attariya Branch","Nepalgunj Branch","Bhojpur Branch","Amarsingh Chowk Branch","Hetauda Branch","Lamahi Branch","Sukkhad Branch","Gongabu Branch","Lekhnath Branch","Banepa Branch","Tatopani Branch","ICD Branch","Bajhang Branch","Kirtipur Branch","Remitance Branch","Dupcheshor Branch","Lamki Branch","Golbazar Branch","Siraha Branch","Mirchaiya Branch"],
    "Global IME Bank Limited": ["Dhangadi Branch","Koteshwor Branch","Galkot Branch","Pokhara Branch","Beni Branch","Gwarko Branch","Suryabinayak Branch","Siranchowk Branch","Phikkal Branch","Thankot Branch","Kanchanbari Branch","Gongabu Branch","Charali Branch","Dhadingbesi Branch","Mahendranagar Branch","Butwal-Milan Bhowk Branch","Dhalkebar Branch","Parasi Branch","Dillibazar Branch","Rukum Branch","Lamki Branch","Sitapaila Branch","Surkhet Branch","Wami Branch","Khokesimal Branch","Kusma Branch","Bethanchowk Branch","Birtamod Branch","Begnas Branch","Babahil Branch","Dulabari Branch","Terhathum Branch","Baireni Branch","Siraha Branch","Kawasoti Branch","Dadeldhura Branch","Lalbandi Branch","Gaundakot Branch","Tatopani Branch","New Road Branch","Ghorahi Branch","Majuwa Branch","Sundhara 2 Branch","Kalikot Branch","Bahlung Branch","Nakhu Branch","Rajbiraj Branch","Nepalgunj Branch","Thamel Branch","Kuleshwor Branch","Bajura Branch","Gothatar Branch","Khusibu Branch","Mangalbazar Branch","Kantipath Branch","Burtibang Branch","Tulsipur Branch","Pulchowk Branch","Mirchaiya Branch","Lahan Branch","Naraha Branch","Biratnagar Branch"],

    "Himalayan Bank Limited": ["Hile Branch","Kawasoti Branch","Teku Branch","Betrawati Branch","Gorkha Branch","Bhaktapur Branch","Dharan Branch","New Baneshwor Branch","Sorahakhutte Branch","Birgunj Branch","Itahari Branch","Ghorahi Branch","Barabise Branch","Nepalgunj Branch","Lamki Branch","Tandi Branch","Battisputali Branch","Samakhushi Branch","Banepa Branch","Kausaltar Branch","Trishuli Branch","New Rad Brach","Polhara Branch","Dhading Branch","Palpa; Branch","Dhangadhi Branch","Thamel Tridevi Branch","Butwal Branch","Biratnagar Branch","Hetauda Branch","Patan Branch","Lamahi Branch","Janakpur Branch","Kumakha Branch","Madi Branch","Tulsipur Branch","Bhaisepati Branch","Tarkeshwor Branch","Khurkot  Branch","Chhededaha Branch","Myagon Branch","Surkhet Branch","Baragadi Branch","Lohalpur Branch","Jagannath Branch","Pokhara-2 Branch","Raptisonari Branch ","Head Office","Swayambhu Branch","Cabahil Branch","Dillibazar Branch","Kalanki Branch","Bhairahawa Branch","Card Center","Salyan Branch","Parsa Branch","Subarna Branch"],
    "Kumari Bank Limited": ["Jitpur-Bara Branch","Jagati Braanch","Dulegauda Branch","Urlabari Branch","Biratchowk Branch","Sauraha Branch","Koteshwor Branch","Beni Branch","New Baneshwor Branch","Head Office Durbarmarg","Tulsipur Branch","Lhurkot Branch","Bansgadhi Branch","Okhaldhunga Branch","Damauli Branch","Dadedhura Branch","Mahendranagar Branch","Narayanpur Branch","Murgiya-Branch","Kowasoti Branch","Baneshwor Branch","Ridi Branch","Satdobato Branch","Lakeside Branch","Butwal Branch","Putalisadak Branch","Babiyachaur Branch","Chandhani Branch","Surkhet Branch","Attariya Branch","Bhairahawa Branch","Kalimati Branch","Nijgadh Branch","Golbazar Branch","Siraha Branch","Nahara Branch","Mirchaiya Branch","Ithari Branch","Lahan Branch"],

    "NIC Asia Bank Limited": ["Tulsipur Branch","Lhurkot Branch","Bansgadhi Branch","Okhaldhunga Branch","Damauli Branch","Dadedhura Branch","Mahendranagar Branch","Narayanpur Branch","Murgiya-Branch","Kowasoti Branch","Baneshwor Branch","Ridi Branch","Satdobato Branch","Lakeside Branch","Butwal Branch","Putalisadak Branch","Babiyachaur Branch","Chandhani Branch","Surkhet Branch","Attariya Branch","Bhairahawa Branch","Kalimati Branch","Nijgadh Branch","Golbazar Branch","Siraha Branch","Nahara Branch","Mirchaiya Branch","Ithari Branch","Lahan Branch","Baragadi Branch","Lohalpur Branch","Jagannath Branch","Pokhara-2 Branch","Raptisonari Branch ","Head Office","Swayambhu Branch","Cabahil Branch","Dillibazar Branch","Kalanki Branch","Bhairahawa Branch","Card Center","Salyan Branch","Parsa Branch","Subarna Branch"],

    "NMB Bank Limited": ["Baragadi Branch","Lohalpur Branch","Jagannath Branch","Pokhara-2 Branch","Raptisonari Branch ","Head Office","Swayambhu Branch","Cabahil Branch","Dillibazar Branch","Kalanki Branch","Bhairahawa Branch","Card Center","Salyan Branch","Parsa Branch","Subarna Branch","Chandranigahapur Branch","Jorpati Branch","Gorkha Branch","Bauniya Branch","Krishnanagar Branch","Dipayal Branch","Tikapur Branch","Tulsipur Branch","Rukum Branch","Baglung Branch","Birgunj Branch","Battar Branch","Garuda Branch","Khadbari Branch","Tandi Branch","Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch","Gulariya Branch","Dhangadi Branch","Satungal Branch","Lumbini Branch","Bagbazaar Branch","Lazimpat Branch","Biratnagar Branch","Balaju Branch","Butwal Branch","Bhairahawa Branch","Teku Branch","Rajbiraj Branch","Golfutar Branch","Kushma Branch","Itahari Branch"],

    "Nabil Bank Limited": ["Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch","Gulariya Branch","Dhangadi Branch","Satungal Branch","Lumbini Branch","Bagbazaar Branch","Lazimpat Branch","Biratnagar Branch","Balaju Branch","Butwal Branch","Bhairahawa Branch","Teku Branch","Rajbiraj Branch","Golfutar Branch","Kushma Branch","Itahari Branch","Mahendranagar Branch","Attariya Branch","Nepalgunj Branch","Bhojpur Branch","Amarsingh Chowk Branch","Hetauda Branch","Lamahi Branch","Sukkhad Branch","Gongabu Branch","Lekhnath Branch","Banepa Branch","Tatopani Branch","ICD Branch","Bajhang Branch","Kirtipur Branch","Remitance Branch","Dupcheshor Branch","Lamki Branch","Golbazar Branch","Siraha Branch","Mirchaiya Branch"],

    "Nepal Bank Limited": ["Lohalpur Branch","Jagannath Branch","Pokhara-2 Branch","Raptisonari Branch ","Head Office","Swayambhu Branch","Cabahil Branch","Dillibazar Branch","Kalanki Branch","Bhairahawa Branch","Card Center","Salyan Branch","Parsa Branch","Subarna Branch","Tulsipur Branch","Lhurkot Branch","Bansgadhi Branch","Okhaldhunga Branch","Damauli Branch","Dadedhura Branch","Mahendranagar Branch","Narayanpur Branch","Murgiya-Branch","Kowasoti Branch","Baneshwor Branch","Ridi Branch","Satdobato Branch","Lakeside Branch","Butwal Branch","Putalisadak Branch","Babiyachaur Branch","Chandhani Branch","Surkhet Branch","Attariya Branch","Bhairahawa Branch","Kalimati Branch","Nijgadh Branch","Golbazar Branch","Siraha Branch","Nahara Branch","Mirchaiya Branch","Ithari Branch","Lahan Branch","Chandranigahapur Branch","Jorpati Branch","Gorkha Branch","Bauniya Branch","Krishnanagar Branch","Dipayal Branch","Tikapur Branch","Tulsipur Branch","Rukum Branch","Baglung Branch","Birgunj Branch","Battar Branch","Garuda Branch","Khadbari Branch","Tandi Branch","Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch"],

    "Nepal Rastra Bank Limited": ["NRB Dhangadhi","NRB Nepalgunj","NRB Thapathaili","NRB Biratnagar","NRB Sissharthanagar","NRB Birgunj","NRB Pokhara","NRB Janakpur"],

    "Prabhu Bank Limited": ["Baragadi Branch","Lohalpur Branch","Jagannath Branch","Pokhara-2 Branch","Raptisonari Branch ","Head Office","Swayambhu Branch","Cabahil Branch","Dillibazar Branch","Kalanki Branch","Bhairahawa Branch","Card Center","Salyan Branch","Parsa Branch","Subarna Branch","Tulsipur Branch","Lhurkot Branch","Bansgadhi Branch","Okhaldhunga Branch","Damauli Branch","Dadedhura Branch","Mahendranagar Branch","Narayanpur Branch","Murgiya-Branch","Kowasoti Branch","Baneshwor Branch","Ridi Branch","Satdobato Branch","Lakeside Branch","Butwal Branch","Putalisadak Branch","Babiyachaur Branch","Chandhani Branch","Surkhet Branch","Attariya Branch","Bhairahawa Branch","Kalimati Branch","Nijgadh Branch","Golbazar Branch","Siraha Branch","Nahara Branch","Mirchaiya Branch","Ithari Branch","Lahan Branch","Chandranigahapur Branch","Jorpati Branch","Gorkha Branch","Bauniya Branch","Krishnanagar Branch","Dipayal Branch","Tikapur Branch","Tulsipur Branch","Rukum Branch","Baglung Branch","Birgunj Branch","Battar Branch","Garuda Branch","Khadbari Branch","Tandi Branch","Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch","Gulariya Branch","Dhangadi Branch","Satungal Branch","Lumbini Branch","Bagbazaar Branch","Lazimpat Branch","Biratnagar Branch","Balaju Branch","Butwal Branch","Bhairahawa Branch","Teku Branch","Rajbiraj Branch","Golfutar Branch","Kushma Branch","Itahari Branch"],

    "Sanima Bank Limited": ["Lohalpur Branch","Jagannath Branch","Pokhara-2 Branch","Raptisonari Branch ","Head Office","Swayambhu Branch","Cabahil Branch","Dillibazar Branch","Kalanki Branch","Bhairahawa Branch","Card Center","Salyan Branch","Parsa Branch","Subarna Branch","Tulsipur Branch","Lhurkot Branch","Bansgadhi Branch","Okhaldhunga Branch","Damauli Branch","Dadedhura Branch","Mahendranagar Branch","Narayanpur Branch","Murgiya-Branch","Kowasoti Branch","Baneshwor Branch","Ridi Branch","Satdobato Branch","Lakeside Branch","Butwal Branch","Putalisadak Branch","Babiyachaur Branch","Chandhani Branch","Surkhet Branch","Attariya Branch","Bhairahawa Branch","Kalimati Branch","Nijgadh Branch","Golbazar Branch","Siraha Branch","Nahara Branch","Mirchaiya Branch","Ithari Branch","Lahan Branch","Chandranigahapur Branch","Jorpati Branch","Gorkha Branch","Bauniya Branch","Krishnanagar Branch","Dipayal Branch","Tikapur Branch","Tulsipur Branch","Rukum Branch","Baglung Branch","Birgunj Branch","Battar Branch","Garuda Branch","Khadbari Branch","Tandi Branch","Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch"],

    "Siddhartha Bank Limited": ["Chandranigahapur Branch","Jorpati Branch","Gorkha Branch","Bauniya Branch","Krishnanagar Branch","Dipayal Branch","Tikapur Branch","Tulsipur Branch","Rukum Branch","Baglung Branch","Birgunj Branch","Battar Branch","Garuda Branch","Khadbari Branch","Tandi Branch","Sandhikharka Branch","Pulchowk Branch","Chandrauta Counter","Bhaktapur Branch","Shikhar Branch","Sitapaila Branch","Satdobato Branch","Gulariya Branch","Dhangadi Branch","Satungal Branch","Lumbini Branch","Bagbazaar Branch","Lazimpat Branch","Biratnagar Branch","Balaju Branch","Butwal Branch","Bhairahawa Branch","Teku Branch","Rajbiraj Branch","Golfutar Branch","Kushma Branch","Itahari Branch","Okhaldhunga Branch","Damauli Branch","Dadedhura Branch","Mahendranagar Branch","Narayanpur Branch","Murgiya-Branch","Kowasoti Branch","Baneshwor Branch","Ridi Branch","Satdobato Branch","Lakeside Branch","Butwal Branch","Putalisadak Branch","Babiyachaur Branch","Chandhani Branch","Surkhet Branch","Attariya Branch","Bhairahawa Branch","Kalimati Branch","Nijgadh Branch","Golbazar Branch","Siraha Branch","Nahara Branch","Mirchaiya Branch","Ithari Branch","Lahan Branch","Chandranigahapur Branch","Jorpati Branch","Gorkha Branch"],
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
// const stepValueContainer =[1];
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
    
    const BANKS=Object.keys(banks);
    const selectBank=document.getElementById("Bank");
    selectBank.setAttribute("name","bank");

    BANKS.forEach(BANK=>{
        let BankOption=document.createElement("option");
        BankOption.value=BANK;
        BankOption.textContent=BANK;
        selectBank.appendChild(BankOption);
    });


    // adding document Element section
    let addBtn=document.querySelectorAll("#adding-new");
    let documentPage=document.querySelector("#document-page1");
    addBtn.forEach((elm)=>{
        elm.addEventListener("click",function(){
            elm.style.backgroundColor="red";
            let newDiv1, newDiv2, newDiv3, newSpan1, newSup1, newSpan2,newLabel, newDiv4, newSvg, newPath, newInput, newDiv5, newSpan3, newI, newText="Upload", newSpan4;
            newDiv1 = document.createElement("div");
            newDiv1.setAttribute("id","document-page1");
            newDiv1.setAttribute("class", "input-data");

            newDiv2=document.createElement("div");
            newDiv2.setAttribute("class","form-group document-upload");

            newDiv3=document.createElement("div");
            newDiv3.setAttribute("class","document-upload-info");

            newSpan1=document.createElement("span");
            newSpan1.setAttribute("class","document-Type");
            newSpan1.innerText="Citizenship";

            newSup1=document.createElement("sup");
            newSup1.innerText="*";
            newSup1.style.color="red";

            newSpan2=document.createElement("span");
            newSpan2.setAttribute("class","document-help-text");
            newSpan2.innerText="(Should be in .pdf format only)";

            newLabel=document.createElement("label");
            newLabel.setAttribute("class","btn-outline upload-button");

            newDiv4=document.createElement("div");
            newDiv4.setAttribute("class","leading-icon");

            newSvg=document.createElement("svg");
            newSvg.setAttribute("fill","#0078d7");
            newSvg.setAttribute("height","18")
            newSvg.setAttribute("viewBox","0 0 24 24");
            newSvg.setAttribute("width","18");

            newPath=document.createElement("path");
            newPath.setAttribute("fill","inherit");
            newPath.setAttribute("d","M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM18 20V9H13V4H6V20H18ZM12 12L16 16H13.5V19H10.5V16H8L12 12Z");

            newInput=document.createElement("input");
            newInput.hidden = true;
            newInput.setAttribute("multiple","");
            newInput.setAttribute("type","file");
            newInput.setAttribute("accept",".pdf");

            newDiv5=document.createElement("div");
            newDiv5.setAttribute("class","adding-new");

            newSpan3=document.createElement("span");
            newSpan3.setAttribute("class","Icon-btn");

            newI=document.createElement("i");
            newI.setAttribute("class","fa-solid fa-plus fa-plus2");

            newSpan4=document.createElement("span");
            newSpan4.setAttribute("class","errors");
            newSpan4.textContent="The field is mandatory.";

            newDiv1.appendChild(newDiv2);
            newDiv2.appendChild(newDiv3);
            newDiv3.appendChild(newSpan1);
            newSpan1.appendChild(newSup1);
            newSpan1.after(newSpan2);

            newLabel.appendChild(newDiv4);
            newDiv4.appendChild(newSvg);
            newSvg.appendChild(newPath);
            newSvg.after(newText);
            newDiv4.after(newInput)
            newDiv5.appendChild(newSpan3);
            newSpan3.appendChild(newI);
            newDiv2.appendChild(newLabel);
            newDiv2.after(newSpan4);
            newDiv2.append(newDiv5);

            documentPage.after(newDiv1);
            
        });
    });

    
    // -----------------form2 design
    const selectElement = document.querySelectorAll('#country');
    selectElement.forEach((evnt) =>{
        evnt.addEventListener('mousedown', (e) => {
            e.preventDefault();
        });
    });
    

    //form changing navigation section
    const steps = document.querySelectorAll(".steps");
    steps.forEach(step => {
        step.addEventListener("click", function() {
            let valu=step.getAttribute("stepvalue");
            formDisplayed(valu);
        });
    });

    const Nexts=document.querySelectorAll("#Nexts");
    Nexts.forEach(nexts => {
        nexts.addEventListener("click", () =>{
            let changeData=nexts.getAttribute("nextData");
            tempError(changeData);
            formDisplayed(changeData);
        });
    });
    const Backs=document.querySelectorAll("#Backs");
    Backs.forEach(backs => {
        backs.addEventListener("click", () =>{
            let backData=backs.getAttribute("backData");
            formDisplayed(backData);
        });
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
    // Boid validation
    let boidElement=document.getElementById("boid");
    let boidError=document.getElementById("boiderrors");
    boidElement.addEventListener("input", ()=>{
        if(boidElement.value=="" || !boidElement.value )
            {
                boidError.style.display="block";
            }
            else{
                boidError.style.display="none";
            }
    });
    boidElement.addEventListener("blur", ()=>{
        if(boidElement.value=="" || !boidElement.value )
        {
            boidError.style.display="block";
        }
        else{
            boidError.style.display="none";
        }
    });

}; // end of windows.onload functions

const errorValidation1=[ //general details
    {codeId:"ClientType",   codeError:"clienttypeerror"},
    {codeId:"MobileNumber", codeError:"mobilenumbererror"},
    {codeId:"MemberBranch", codeError:"memberbrancherror"},
    {codeId:"Email", codeError:"emailerror"},
];
const errorValidation2=[ //address details
    {codeId:'permanent-state', codeError:'permanent-state-error'},
    {codeId:'permanent-district', codeError:'permanent-district-error'},
    {codeId:'permanent-municipality', codeError:'permanent-municipality-error'},
    {codeId:'parmanent-wardno', codeError:'parmanent-wardno-error'},
    {codeId:'permanent-street', codeError:'permanent-street-error'}
];
const errorValidation3=[ //bank details
    {codeId:"Bank", codeError:"bankError"},
    {codeId:"Branch", codeError:"branchError"},
    {codeId:"AccountType", codeError:"accountTypeError"},
    {codeId:"AccountNumber", codeError:"accountNumberError"},
];
const errorValidation4=[{codeId:"boid", codeError:"boiderrors"}]; //depository details

const errorValidation5=[ //document upload
    {codeId: "Citizenship", codeError: "CitizenshipError"},
    {codeId: "ppPhoto", codeError: "ppPhotoError"},
];
const addressDataTr=[
    {codeId:'temporary-state', codeError:'temporary-state-error'},
    {codeId:'temporary-district', codeError:'temporary-district-error'},
    {codeId:'temporary-municipality', codeError:'temporary-municipality-error'},
    {codeId:'temporary-wardno', codeError:'temporary-wardno-error'},
    {codeId:'temporary-street', codeError:'temporary-street-error'}
];
errorValidation1.forEach(validValue => {
    const validElement=document.getElementById(validValue.codeId);
    const errorElement=document.getElementById(validValue.codeError);
    validElement.addEventListener("input",()=>{
        validateField(validElement, errorElement, validValue);
    });
    validElement.addEventListener("blur",()=>{
        validateField(validElement, errorElement, validValue);
    });
});

errorValidation2.forEach(validValue => {
    const validElement = document.getElementById(validValue.codeId);
    const invalidElement = document.getElementById(validValue.codeError);
    validElement.addEventListener("input", () => {
        validateField(validElement, invalidElement, validValue);
    });
    validElement.addEventListener("blur", () => {
        validateField(validElement, invalidElement, validValue);
    });
});

errorValidation3.forEach(function (validValue){
    const validElement=document.getElementById(validValue.codeId);
    const errorElement=document.getElementById(validValue.codeError);
    validElement.addEventListener("input", ()=>{
        validateField(validElement,errorElement, validValue);
    });
    validElement.addEventListener("blur", ()=>{
        validateField(validElement,errorElement, validValue);
    });
});

errorValidation5.forEach(uploadFile => {
    let uploadElement = document.getElementById(uploadFile.codeId);
    let uploadError = document.getElementById(uploadFile.codeError);

    const validateUpload = () => {
        if (uploadElement.files.length === 0) {
            uploadError.style.display = "block";  // No file uploaded
        } else if (uploadElement.files[0].type !== "application/pdf") {
            uploadError.innerText = "Only PDF files are allowed.";  // Invalid file type
            uploadError.style.display = "block";
        } else {
            uploadError.style.display = "none";  // Valid file
        }
    };
    uploadElement.addEventListener("input", validateUpload);
    uploadElement.addEventListener("blur", validateUpload);
});

addressDataTr.forEach(validValue => {
    const validElement = document.getElementById(validValue.codeId);
    const invalidElement = document.getElementById(validValue.codeError);
    validElement.addEventListener("input", () => {
        validateField(validElement, invalidElement, validValue);
    });
    validElement.addEventListener("blur", () => {
        validateField(validElement, invalidElement, validValue);
    });
});

function validateField(validElement, invalidElement, validValue) {
    if(validValue.codeId=="Email")
    {
        // console.log("Email reseived");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailPattern.test(validElement.value))
        {
            invalidElement.style.display = "none";
        }
        else if(validElement.value.trim()==="")
        {
            invalidElement.style.display = "block";
        }
        else if(!emailPattern.test(validElement.value))
        {
            invalidElement.style.display = "block";
            invalidElement.textContent="Please enter a valid email";
        }
    }
    else if(validValue.codeId=="MobileNumber")
    {
        // console.log("Mobile reseived");
        let mobileNumber=validElement;
        let mobilenumbererror=invalidElement;
        if (mobileNumber.value.length === 10 && /^\d{10}$/.test(mobileNumber.value)) {
            mobilenumbererror.style.display = "none";
        }
        if (mobileNumber.value=="")
        {
            mobilenumbererror.style.display = "block";
        }
        else if (mobileNumber.value.length != 10 || !/^\d{10}$/.test(mobileNumber.value))
        {
            mobilenumbererror.style.display = "block";
            mobilenumbererror.innerText = "Please enter a valid 10-digit mobile number.";
        }
    }
    else
    {
        // console.log('nothing to be received');
        if (validElement.value.trim() === "" || validElement.value === validValue.codeId) {
            invalidElement.style.display = "block";
        } else {
            invalidElement.style.display = "none";
        }
    }
}

function checkAddressError(sms){
    errorValidation2.forEach(codeTags =>{
        let data=document.getElementById(codeTags.codeId);
        let addressError=document.getElementById(codeTags.codeError);
        if(sms==1 || sms==2){}
        else{
            if(data.value==codeTags.codeId || !data.value || data.value==""){
                addressError.style.display="block";
            }
            else{
                addressError.style.display="none";
            }
        }
    });
}

function tempError(sms){
    addressDataTr.forEach(codeTag =>{
        let tempData=document.getElementById(codeTag.codeId);
        let tempErrorData=document.getElementById(codeTag.codeError);
        if(sms==1 || sms==2){}
        else if(sms=="Yes")
            {
                tempData.value="";
                tempErrorData.style.display="none";
            }
        else{
            if(tempData.value==codeTag.codeId || !tempData.value || tempData.value==""){
                tempErrorData.style.display="block";
            }
            else{
                tempErrorData.style.display="none";
            }
        }
    });
}

function prAddressValidation() {
    allFieldsValid = 10;
    errorValidation2.forEach(field => {
        const element = document.getElementById(field.codeId);
        const erElement=document.getElementById(field.codeError);
        if (element.value==field.codeId || element.value== "" ||!element.value) {
            // console.log("password is",--allFieldsValid);
            erElement.style.display="block";
            --allFieldsValid
        }
    });
    sameAddress(allFieldsValid);
}
let sameAsPr=document.getElementById("check_box");
sameAsPr.addEventListener("change", ()=>{
    if (sameAsPr.checked){
        prAddressValidation();
    }
});
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

let activeForm=['1'];
function finalValidation(values){
    activeForm.forEach(add =>{
        let validcheck=true;
        if(add==='1')
        {
            // let validation=getValidationArray(values);
            errorValidation1.forEach(checks =>{
                let dataElement=document.getElementById(checks.codeId);
                let errorDataElement=document.getElementById(checks.codeError);
                if(dataElement.value==="" || dataElement.value==checks.codeId || !dataElement.value)
                {
                    errorDataElement.style.display="block";
                    validcheck=false;
                }
                else
                {
                    errorDataElement.style.display="none";
                }
            });
            activeColor(validcheck, add);
        }
        else if(add==='2')
        {
            errorValidation2.forEach(checks =>{
                let dataElement=document.getElementById(checks.codeId);
                let errorDataElement=document.getElementById(checks.codeError);
                if(dataElement.value==="" || dataElement.value==checks.codeId || !dataElement.value)
                {
                    errorDataElement.style.display="block";
                    validcheck=false;
                }
                else
                {
                    errorDataElement.style.display="none";
                }
            });
            activeColor(validcheck, add);
        }
        else if(add==='3')
        {
            errorValidation3.forEach(checks =>{
                let dataElement=document.getElementById(checks.codeId);
                let errorDataElement=document.getElementById(checks.codeError);
                if(dataElement.value==="" || dataElement.value==checks.codeId || !dataElement.value)
                {
                    errorDataElement.style.display="block";
                    validcheck=false;
                }
                else
                {
                    errorDataElement.style.display="none";
                }
            });
            activeColor(validcheck, add);
        }
        else if(add==='4')
        {
            errorValidation4.forEach(checks =>{
                let dataElement=document.getElementById(checks.codeId);
                let errorDataElement=document.getElementById(checks.codeError);
                if(dataElement.value==="" || dataElement.value==checks.codeId || !dataElement.value)
                {
                    errorDataElement.style.display="block";
                    validcheck=false;
                }
                else
                {
                    errorDataElement.style.display="none";
                }
            });
            activeColor(validcheck, add);
        }
        else if(add==='5')
        {
            errorValidation5.forEach(checks =>{
                let dataElement=document.getElementById(checks.codeId);
                let errorDataElement=document.getElementById(checks.codeError);
                if(dataElement.value==="" || dataElement.value==checks.codeId || !dataElement.value)
                {
                    errorDataElement.style.display="block";
                    validcheck=false;
                }
                else
                {
                    errorDataElement.style.display="none";
                }
            });
            activeColor(validcheck, add);
        }
        else if(add==='6')
        {
            activeColor(true, add);
        }
    });
}

function activeColor(color, callValue){
    let steps = document.querySelector(`.step${callValue}`);
    let nameText = document.querySelector(`.step-name${callValue}`);
    let svgLine = callValue <= 5 ? document.querySelector(`.svgLine${callValue}`) : null;
    if(color)
    {
        steps.style.backgroundColor="green";
        steps.style.color="white";
        nameText.style.color="green";
        if(svgLine)
        {
            svgLine.style.stroke="green";
        }
    }
    else{
        steps.style.backgroundColor="red";
        steps.style.color="white";
        nameText.style.color="red";
        if(svgLine)
        {
            svgLine.style.stroke="red";
        }
    }
}

function activeStatus(color){
    activeForm.forEach(add =>{
        if(add!=color)
        {
            let steps=document.querySelector(`.step${color}`);
            steps.style.backgroundColor="#0078d7";
            steps.style.color="white";
            let nameText=document.querySelector(`.step-name${color}`);
            nameText.style.color="#0078d7";
            if(color<=5)
            {
                let svgLine=document.querySelector(`.svgLine${color}`);
                svgLine.style.stroke="#0078d7";
            }
        }
    });
}

function formDisplayed(fData){
    let forms=document.querySelectorAll(".forms");
    forms.forEach(form => {
        let formData=form.getAttribute("dataValue");
        if(formData==fData){
            form.style.display="block";
            finalValidation();
            if(!activeForm.includes(formData))
            {
                activeStatus(formData);
                activeForm.push(formData);
            }
        }
        else{
            form.style.display="none";
        }
    });
    
}