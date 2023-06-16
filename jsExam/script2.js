

// burda 
function data() {
    let url = 'https://restcountries.com/v3.1/name/azerbaijan';
    fetch(url)
      .then(res => res.json())
      .then(([data]) => {
        const { name, coatOfArms, flags, capital } = data;
        const output = `${JSON.stringify(name)}, ${JSON.stringify(coatOfArms)}, ${JSON.stringify(flags)}, ${capital}`;
  
        getData(data);
      });
  }
  
  const getData = data => {
    const { name, coatOfArms, capital, flags } = data;
  
    const countryElement = document.createElement('div');
    countryElement.className = 'country';
  
    const nameElement = document.createElement('p');
    nameElement.textContent = name.common;

    const capitalElement = document.createElement('p');
    capitalElement.textContent = capital;
  
    const coatOfArmsElement = document.createElement('img');
    coatOfArmsElement.src = coatOfArms.png;
  
  
    const flagElement = document.createElement('img');
    flagElement.src = flags.png;
  
    countryElement.appendChild(nameElement);
    countryElement.appendChild(capitalElement);
    countryElement.appendChild(coatOfArmsElement);
    countryElement.appendChild(flagElement);
  
    document.body.appendChild(countryElement);
  }
  
  data();
  
  



//capital, flag, name


