// language.js
const supportedLanguages = {
  'en': {
    name: 'English',
    flag: 'https://flagcdn.com/w20/gb.png'
  },
  'am': {
    name: 'አማርኛ',
    flag: 'https://flagcdn.com/w20/et.png'
  },
  'om': {
    name: 'Afaan Oromoo',
    flag: 'https://flagcdn.com/w20/et.png'
  },
  'ti': {
    name: 'ትግርኛ',
    flag: 'https://flagcdn.com/w20/er.png'
  }
};

const translations = {
  'en': {
    'welcome': 'Welcome',
    'soil_moisture': 'Soil Moisture',
    'temperature': 'Temperature',
    'humidity': 'Humidity',
    'pump_status': 'Pump Status',
    'quick_actions': 'Quick Actions',
    'water_now': 'Water Now',
    'water_usage': 'Water Usage',
    'today': 'Today',
    'this_week': 'This Week',
    'this_month': 'This Month',
    'system_status': 'System Status',
    'main_controller': 'Main Controller',
    'moisture_sensor': 'Moisture Sensor',
    'water_pump': 'Water Pump',
    'weather_api': 'Weather API',
    'online': 'Online',
    'disabled': 'Disabled',
    'last_updated': 'Last Updated',
    'watering_tip': 'Watering Tip',
    'default_tip': 'Early morning watering reduces evaporation and helps prevent plant diseases.',
    'system_controls': 'System Controls',
    'auto_mode': 'Auto Mode',
    'auto_mode_desc': 'Automatically adjust based on soil moisture',
    'manual_pump': 'Manual Pump Control',
    'manual_pump_desc': 'Override automatic system',
    'schedule_settings': 'Schedule Settings',
    'start_time': 'Start Time',
    'duration': 'Duration',
    'active_days': 'Active Days',
    'save_schedule': 'Save Schedule',
    'notifications': 'Notifications',
    'settings': 'Settings',
    'dark_mode': 'Dark Mode',
    'timezone': 'Timezone',
    'timezone_desc': 'Auto detect device timezone',
    'profile': 'Profile',
    'profile_desc': 'Manage your account',
    'about': 'About',
    'about_desc': 'Version 1.0. Smart Farming System',
    'news_info': 'News & Info',
    'weather': 'Weather',
    'community': 'Community',
    'daily_tip': 'Daily Tip'
  },
  'am': {
    'welcome': 'እንኳን ደህና መጣህ!',
    'soil_moisture': 'የአፈር እርጥበት',
    'temperature': 'ሙቀት',
    'humidity': 'እርጥበት',
    'pump_status': 'የፓምፕ ሁኔታ',
    'quick_actions': 'ፈጣን እርምጃዎች',
    'water_now': 'አሁን አጠግብ',
    'water_usage': 'የውሃ አጠቃቀም',
    'today': 'ዛሬ',
    'this_week': 'ይህ ሳምንት',
    'this_month': 'ይህ ወር',
    'system_status': 'የስርዓት ሁኔታ',
    'main_controller': 'ዋና ኮንትሮለር',
    'moisture_sensor': 'እርጥበት አሳሽ',
    'water_pump': 'የውሃ ፓምፕ',
    'weather_api': 'የአየር ሁኔታ API',
    'online': 'በመስመር ላይ',
    'disabled': 'የሚያገለግል',
    'last_updated': 'የመጨረሻ ዝመና',
    'watering_tip': 'የማጠጥ ምክር',
    'default_tip': 'ጠዋት በጊዜ ማጠጣት የማጣራት መጠን �ቅል ያደርገዋል እና የእርሻ በሽታዎችን ለመከላከል ይረዳል።',
    'system_controls': 'የስርዓት መቆጣጠሪያዎች',
    'auto_mode': 'ራስ-ሰር ሁነታ',
    'auto_mode_desc': 'በአፈር እርጥበት ላይ በመመርኮድ በራስ-ሰር ያስተካክላል',
    'manual_pump': 'እጅ በእጅ የፓምፕ መቆጣጠሪያ',
    'manual_pump_desc': 'ራስ-ሰር ስርዓቱን ይቋረጣል',
    'schedule_settings': 'የመርሃ ግብር ማስተካከያዎች',
    'start_time': 'የመጀመሪያ ሰዓት',
    'duration': 'ቆይታ',
    'active_days': 'ንቁ ቀናት',
    'save_schedule': 'መርሃ ግብሩን አስቀምጥ',
    'notifications': 'ማሳወቂያዎች',
    'settings': 'ማስተካከያዎች',
    'dark_mode': 'ጨለማ ሁነታ',
    'timezone': 'የጊዜ �ለታ',
    'timezone_desc': 'የመሣሪያ የጊዜ ዞን በራስ-ሰር ይገኝ',
    'profile': 'መገለጫ',
    'profile_desc': 'መለያዎን ያስተዳድሩ',
    'about': 'ስለ',
    'about_desc': 'ስሪት 1.0. ዘመናዊ የእርሻ ስርዓት',
    'news_info': 'ዜና እና መረጃ',
    'weather': 'የአየር ሁኔታ',
    'community': 'ማህበረሰብ',
    'daily_tip': 'ዕለታዊ ምክር'
  },
  'om': {
    'welcome': 'Baga nagaan dhuftan!',
    'soil_moisture': 'Qilleensa dhoqqee',
    'temperature': 'Ho\'a',
    'humidity': 'Qilleensa',
    'pump_status': 'Haala paampii',
    'quick_actions': 'Tarkaanfii dafaa',
    'water_now': 'Bishaan dhiqadhu',
    'water_usage': 'Fayyadama bishaanii',
    'today': 'Har\'a',
    'this_week': 'Torban kana',
    'this_month': 'Ji\'a kana',
    'system_status': 'Haala sistamaa',
    'main_controller': 'Kontoroolaa guddaa',
    'moisture_sensor': 'Sensara qilleensaa',
    'water_pump': 'Paampii bishaanii',
    'weather_api': 'API haala qilleensaa',
    'online': 'Online',
    'disabled': 'Kan hin dandeenye',
    'last_updated': 'Garaagarummaa dhiheenya',
    'watering_tip': 'Gorsa bishaan dhiqannoo',
    'default_tip': 'Bishaan dhiqannoo ganamaa yeroo gabaabaa qilleensa dhoqqee ittisuufi dhukkuba biqiltoota hir\'isuuf gargaara.',
    'system_controls': 'To\'annaa sistamaa',
    'auto_mode': 'Moodii otomaatii',
    'auto_mode_desc': 'Qilleensa dhoqqee irratti hundaa\'uun ofii ofii sirreessi',
    'manual_pump': 'To\'annaa paampii harka',
    'manual_pump_desc': 'Sistamaa otomaatii balleessi',
    'schedule_settings': 'Sirna yeroo',
    'start_time': 'Yeroo eegaluu',
    'duration': 'Yeroo guutuu',
    'active_days': 'Guyyawwan hojii',
    'save_schedule': 'Sirna yeroo galii',
    'notifications': 'Beeksisawwan',
    'settings': 'Sirreeffamtoota',
    'dark_mode': 'Moodii gurraacha',
    'timezone': 'Yeroo sa\'aa',
    'timezone_desc': 'Sa\'aa meeshaa ofii ofii beeksi',
    'profile': 'Seenaa',
    'profile_desc': 'Akaawuntii keessan bulchi',
    'about': 'Waa\'ee',
    'about_desc': 'Varsii 1.0. Sistama qonnaa geessisaa',
    'news_info': 'Oduu fi odeeffannoo',
    'weather': 'Haala qilleensaa',
    'community': 'Hawaasa',
    'daily_tip': 'Gorsa guyyaa'
  },
  'ti': {
    'welcome': 'እንቋዕ ብደሓን መጻእኩም!',
    'soil_moisture': 'ርጥብ ሓመድ',
    'temperature': 'ሙቐት',
    'humidity': 'ርጥብነት',
    'pump_status': 'ስታተስ ፓምፕ',
    'quick_actions': 'ቅልጡፍ ተግባራት',
    'water_now': 'ሕጂ ማይ ምእታው',
    'water_usage': 'ጥቕሚ ማይ',
    'today': 'ሎሚ',
    'this_week': 'ዝሓለፈ ሰሙን',
    'this_month': 'ዝሓለፈ ወርሒ',
    'system_status': 'ኩነታት ስርዓት',
    'main_controller': 'ቀንዲ ኮንትሮለር',
    'moisture_sensor': 'ርጥብ ሰርሰር',
    'water_pump': 'ፓምፕ ማይ',
    'weather_api': 'ኩነታት ኣየር API',
    'online': 'ኣብ መስመር',
    'disabled': 'ዘይተጠቅም',
    'last_updated': 'ዝተረኽበ ሓበሬታ',
    'watering_tip': 'ምክሪ ማይ ምእታው',
    'default_tip': 'ኣብ ናይ ንግሆ ማይ ምእታው ምጥፋእ ርጥብነት ይንኪ እሞ ሕማማት ኣትክልቲ ከም ዘይጋጥም ይገብር።',
    'system_controls': 'ቁጽጽር ስርዓት',
    'auto_mode': 'ኣውቶማቲክ ሞድ',
    'auto_mode_desc': 'ብርጥብ ሓመድ ተመርኲሱ ብኣውቶማቲክ ይቕይር',
    'manual_pump': 'ናይ ምእታው ቁጽጽር',
    'manual_pump_desc': 'ኣውቶማቲክ ስርዓት ምብላሽ',
    'schedule_settings': 'ስክድዩል ምምሕያሽ',
    'start_time': 'ጅማሬ ግዜ',
    'duration': 'እዋን',
    'active_days': 'ንጡፍ መዓልታት',
    'save_schedule': 'ስክድዩል ኣቐምጥ',
    'notifications': 'ምልክታት',
    'settings': 'ምምሕያሽ',
    'dark_mode': 'ጸሊም ሞድ',
    'timezone': 'ዞባ ግዜ',
    'timezone_desc': 'ብኣውቶማቲክ ናይ መሳርሒ ዞባ ግዜ ምርካብ',
    'profile': 'ፕሮፋይል',
    'profile_desc': 'ኣካውንትኩም ምሕደራ',
    'about': 'ብዛዕባ',
    'about_desc': 'ምርቢ 1.0. ሜዳ እኽሊ ስርዓት',
    'news_info': 'ዜናን ሓበሬታን',
    'weather': 'ኩነታት ኣየር',
    'community': 'ማሕበረሰብ',
    'daily_tip': 'ቀንዲ ምኽሪ'
  }
};

function updateWelcomeMessage(lang = 'en') {
  const hour = new Date().getHours();
  let greeting = '';
  
  if (lang === 'en') {
    if (hour < 12) greeting = 'Good Morning';
    else if (hour < 18) greeting = 'Good Afternoon';
    else greeting = 'Good Evening';
  } else if (lang === 'am') {
    if (hour < 12) greeting = 'እንደምን አደርክ';
    else if (hour < 18) greeting = 'እንደምን ዋልክ';
    else greeting = 'እንደምን አመሸህ';
  } else if (lang === 'om') {
    if (hour < 12) greeting = 'Akkam bulte';
    else if (hour < 18) greeting = 'Akkam oolte';
    else greeting = 'Nagaa buli';
  } else if (lang === 'ti') {
    if (hour < 12) greeting = 'ከመይ ኣሎካ';
    else if (hour < 18) greeting = 'ከመይ ዓቢኻ';
    else greeting = 'ከመይ ዓረይካ';
  }
  
  const welcomeElement = document.getElementById('welcomeMessage');
  if (welcomeElement) {
    welcomeElement.textContent = greeting ? greeting + '!' : 'Welcome!';
  }
}

function updateWateringTip(lang = 'en') {
  const tips = {
    'en': [
      "Water plants in the early morning to reduce evaporation.",
      "Check soil moisture before watering to avoid overwatering.",
      "Use mulch to retain soil moisture and reduce water needs.",
      "Water at the base of plants to minimize leaf wetness and disease.",
      "Adjust watering frequency based on seasonal weather changes."
    ],
    'am': [
      "የእርሻዎችን በጠዋት ማጠጣት የማጣራት መጠን ይቀንሳል።",
      "ማጠጣትዎን ከመጀመርዎ በፊት የአፈር እርጥበት ያረጋግጡ።",
      "የአፈር እርጥበት ለመጠበቅ እና የውሃ ፍላጎት ለመቀነስ ሙልች ይጠቀሙ።",
      "የቅጠል እርጥበት እና በሽታ ለመከላከል በእርሻዎች መሠረት ውሃ ያጠግቡ።",
      "በየወቅቱ የሚለዋወጥ የአየር ሁኔታ ላይ በመመርኮዝ የማጠጣት ድግግሞሽ ያስተካክሉ።"
    ],
    'om': [
      "Biqiltota ganamaa yeroo gabaabaa bishaan dhiqachuun qilleensa dhoqqee ittisuuf gargaara.",
      "Bishaan dhiqachuu keessaa dura qilleensa dhoqqee sirreessuun bishaan baay\'ee dhiqachuu irraa of eeggaa.",
      "Maalcha fayyadamuun qilleensa dhoqqee ittisuufi bishaan dhiqannoo hir\'isuu danda\'a.",
      "Dhukkuba biqiltootaafi qilleensa goggogaa irraa of eeggaachuuf biqiltota jala bishaan dhiqadhu.",
      "Jijjiirrama yeroo waggaa irratti hundaa\'uun bishaan dhiqannoo jijjiiruu qaba."
    ],
    'ti': [
      "ኣብ ንግሆ ማይ ምእታው ምጥፋእ ርጥብነት ንምንካይ።",
      "ቅድሚ ማይ ምእታውካ ርጥብ ሓመድ ምርመራ።",
      "ርጥብ ሓመድ ንምዕቋትን ናይ ማይ ድሌት ንምንካይን ሙልች ተጠቐም።",
      "ኣብ መሰረት ኣትክልቲ ማይ ምእታው ንምንካይ ርጥብነት ቅጠልን ሕማምን።",
      "ኣብ ናይ ወቕቲ ለውጢ ኣየር ተመርኲስካ ናይ ማይ ምእታው ድግግሞሽ ምምሕያሽ።"
    ]
  };
  
  const randomTip = tips[lang]?.[Math.floor(Math.random() * tips[lang].length)] || 
                   tips['en'][Math.floor(Math.random() * tips['en'].length)];
  
  const tipElement = document.getElementById('wateringTip');
  if (tipElement) {
    tipElement.textContent = randomTip;
  }
}

async function translatePage(targetLang) {
  document.body.classList.add('translating');
  
  try {
    // Apply translations to all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = translations[targetLang]?.[key] || translations['en'][key];
      
      if (translation) {
        if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
          element.value = translation;
        } else {
          element.textContent = translation;
        }
      }
    });
    
    // Update welcome message if exists
    updateWelcomeMessage(targetLang);
    
    // Update watering tip if exists
    updateWateringTip(targetLang);
    
    // Save language preference
    localStorage.setItem('language', targetLang);
    
  } catch (error) {
    console.error('Translation error:', error);
  } finally {
    document.body.classList.remove('translating');
  }
}

function initializeLanguageSelector() {
  // Create language selector HTML
  const languageSelectorHTML = `
    <div class="language-selector">
      <div class="language-btn" id="languageToggle">
        <i class="bi bi-translate"></i>
      </div>
      <div class="language-dropdown" id="languageDropdown">
        ${Object.entries(supportedLanguages).map(([code, lang]) => `
          <div class="language-option" data-lang="${code}">
            <img src="${lang.flag}" class="language-flag" alt="${lang.name}">
            ${lang.name}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Add language selector to the header of each page
  const header = document.querySelector('.container.py-3 > .d-flex.justify-content-end, .container.py-3 > .d-flex.justify-content-between');
  if (header) {
    header.insertAdjacentHTML('afterbegin', languageSelectorHTML);
    
    // Add event listeners
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    
    languageToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', function(e) {
      if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('show');
      }
    });
    
    document.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        translatePage(lang);
        languageDropdown.classList.remove('show');
      });
    });
  }
  
  // Load saved language preference
  const savedLanguage = localStorage.getItem('language') || 'en';
  translatePage(savedLanguage);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguageSelector);
