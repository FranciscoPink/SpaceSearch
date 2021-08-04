
let search = document.querySelector('#search')
let results = document.querySelector('.results')

let getData = async () => {

  try {

    let q = document.querySelector("#blank").value
    let data = await axios.get(`https://images-api.nasa.gov/search?q=${q}
    // /?api_key=jG7q6os3K4mdDnNzIEuqkvsyS9elfcw4TYBYbko5`)
    console.log(data)
    // let searchResult = 

    searchResult.forEach((result) => {
      let resultDiv = document.createElement('div')
      results.append(cssDiv)
      resultDiv.classList.add('searchResult')

      let image = document.createElement('img')
      image.src = '';
      resultDiv.appendChild(image)

      let title = document.createElement('h3')
      title.textContent = '';
      resultDiv.appendChild(title)

    })

  }


  catch (error) {
    console.log('error')
  }

}

search.addEventListener('click', getData)