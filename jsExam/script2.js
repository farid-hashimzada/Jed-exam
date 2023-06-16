

// burda 
function data() {
    let url = 'https://restcountries.com/v3.1/name/azerbaijan';
    fetch(url)
      .then(res => res.json())
      .then(([data]) => {
        const { name, coatOfArms, flags, capital } = data;
        const output = `${JSON.stringify(name)}, ${JSON.stringify(coatOfArms)}, ${JSON.stringify(flags)}, ${capital}`;
        document.write(output);
  
        getData(data);
      });
  }
  
  const getData = data => {
    const { name, coatOfArms, capital, flags } = data;
  
    const countryElement = document.createElement('div');
    countryElement.className = 'country';
  
    const nameElement = document.createElement('p');
    nameElement.textContent = name;
  
    const coatOfArmsElement = document.createElement('img');
    coatOfArmsElement.src = coatOfArms.png;
  
    const capitalElement = document.createElement('p');
    capitalElement.textContent = capital;
  
    const flagElement = document.createElement('img');
    flagElement.src = flags.png;
  
    countryElement.appendChild(nameElement);
    countryElement.appendChild(coatOfArmsElement);
    countryElement.appendChild(capitalElement);
    countryElement.appendChild(flagElement);
  
    document.body.appendChild(countryElement);
  }
  
  data();
  
  



//capital, flag, name


