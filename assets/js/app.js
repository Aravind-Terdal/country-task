const countrydata = document.getElementById('contryData');

// let result = ''
// const countryTemp = countries.forEach((flag )=>{
//     result += ` <div class="col-lg-2 col-md-4 mb-3"> 
//       <div class="card h-100 ">
//       <img src="${flag.flag}" class="card-img-top" alt="${flag.name}" title="${flag.name}">
//       <div class="card-body">
//         <h5 class="card-title text-center text-uppercase fw-bold ">${flag.name}</h5>
//         <p class="card-text para "><strong>Capital:</strong> ${flag.capital}</p>
//         <p class="card-text para "><strong>Languages:</strong> ${flag.languages} </p>
//         <p class="card-text para "><strong>Population:</strong> ${flag.population}</p>
//       </div>
//     </div>
//   </div>`
// })

// countrydata.innerHTML=result

const newCountries = (display = countries) =>{
    let result = ''
    display.forEach((flag )=>{
            result += ` <div class="col-lg-2 col-md-4 mb-3"> 
              <div class="card h-100 ">
              <img src="${flag.flag}" class="card-img-top" alt="${flag.name}" title="${flag.name}">
              <div class="card-body">
                <h5 class="card-title text-center text-uppercase fw-bold ">${flag.name}</h5>
                <p class="card-text para "><strong>Capital:</strong> ${flag.capital}</p>
                <p class="card-text para "><strong>Languages:</strong> ${flag.languages} </p>
                <p class="card-text para "><strong>Population:</strong> ${flag.population}</p>
              </div>
            </div>
          </div>`
        })
        countrydata.innerHTML=result
}
newCountries();

// const country= [...new Set (countries.map(m=>m))]
// const newCountry = [...new Set(countries.map(item => item))]+
// const newCountry = [...new Set(countries.map(item => item))]
// search bar function 
const newCountry = [...countries]

const searchData = document.getElementById('searchData')

const searchBarHandler = (even )=>{
    const searchBar = even.target.value.toLowerCase()
    const filterBar = newCountry.filter((a)=>{
        return a.name.toLowerCase().includes(searchBar) || a.capital && a.capital.toLowerCase().includes(searchBar) || a.languages.some((lang)=> {
            return lang.toLowerCase().includes(searchBar)
        })
    })
    newCountries(filterBar)
}
searchData.addEventListener('keyup',searchBarHandler)


// name by alphabets serch feacture 

























