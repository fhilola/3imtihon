// const swiperWrapper = document.querySelector(".swiper-wrapper")
const swiperWrapper = document.querySelector(".swiper-wrapper")
const hollywoodMovie = document.querySelector(".hollywood-movie")
const ikkinchiQator = document.querySelector(".ikkinchi-qator")
const uchinchiQator = document.querySelector(".uchinchi-qator")
const tortinchiQator = document.querySelector(".tortinchi-qator")
const beshinchiQator = document.querySelector(".beshinchi-qator")
const options = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzhlMjFhNzVhMmU0NGQ4ZmEyMWFmN2JkZWJhZjM1MyIsInN1YiI6IjY1MDBiOTBiZWZlYTdhMDBmZDFiODc4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h9FHN3udIeelR38RO4-B62ntn2ehP5TFESIE22iVy7s'
    }
}
fetch("https://api.themoviedb.org/3/movie/top_rated?&with_networks=213", options)
.then(response => response.json())
.then(data => {
    data.results.forEach(hero =>{
        const div = document.createElement("div")
        div.className = "swiper-slide"
        const img = document.createElement("img")
        img.src = "https://image.tmdb.org/t/p/original/" + hero.backdrop_path
        div.appendChild(img)
        swiperWrapper.appendChild(div)
    })
})
.catch(err => console.error(err))

fetch("https://api.themoviedb.org/3/discover/tv", options)
.then(response => response.json())
.then(data => {
    data.results.forEach(movie => {
        const div = document.createElement("div")
        div.className = "divcha"
        const img = document.createElement("img")
        const a = document.createElement("a")
        img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path
        a.appendChild(img)
        a.setAttribute("href", `./pages/movie.html?movieId=${movie.id}`)
        div.appendChild(a)
    hollywoodMovie.appendChild(div)
    })
})

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28", options)
.then(response => response.json())
.then(data => {
    data.results.forEach(movie =>{
    const img = document.createElement("img")
    const a = document.createElement("a")
    img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path
        a.appendChild(img)
        a.setAttribute("href", `./pages/movie.html?movieId=${movie.id}`)
    ikkinchiQator.appendChild(a)
    })
})

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12", options)
.then(response => response.json())
.then(data => {
    data.results.forEach(movie => {
        const img = document.createElement("img")
        const a = document.createElement("a")
        img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path
        a.appendChild(img)
        a.setAttribute("href", `./pages/movie.html?movieId=${movie.id}`)
    uchinchiQator.appendChild(a)
    })
})

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=35", options)
.then(response => response.json())
.then(data => {
    data.results.map(movie => {
        const img = document.createElement("img")
        const a = document.createElement("a")
        img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path
        a.appendChild(img)
        a.setAttribute("href", `./pages/movie.html?movieId=${movie.id}`)
        tortinchiQator.appendChild(a)
    })
})

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16", options)
.then(response => response.json())
.then(data => {
    data.results.map(movie => {
        const img = document.createElement("img")
        const a = document.createElement("a")
        img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path
        a.appendChild(img)
        a.setAttribute("href", `./pages/movie.html?movieId=${movie.id}`)
        beshinchiQator.appendChild(a)
    })  
})


