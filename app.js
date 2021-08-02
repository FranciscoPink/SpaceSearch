let search = document.querySelector("#blank")
let URL = `https://api.nasa.gov/planetary/apod?api_key=jG7q6os3K4mdDnNzIEuqkvsyS9elfcw4TYBYbko5`


let getData = async () => {
  try {
    const data = await axios.get(URL)
    console.log(data)
    //   data.data.results.forEach((person) => {
    //     const nameEl = document.createElement('h1')
    //     nameEl.textContent = `${person.name.first} ${person.name.last}`
    //     document.querySelector('.example').append(nameEl)
    //   })
  } catch (error) {
    console.error('error')
  }
}

document.querySelector('#search').addEventListener('click', getData)