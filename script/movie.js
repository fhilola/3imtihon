const singleMovieImg = document.querySelector("#movie-img")
const movieTitle = document.querySelector(".movie-info > .movie-title")
const overview = document.querySelector(".movie-info > .overview")
const rate = document.querySelector(".info > strong")
const releaseDate = document.querySelector(".info > span")
const vote = document.querySelector(".vote")
const language = document.querySelector(".language")
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
const movieLocation = new URLSearchParams(window.location.search).get("movieId")
fetch(`https://api.themoviedb.org/3/movie/${movieLocation}`, options)
.then(response => response.json())
.then(data => {
    console.log(data);
    singleMovieImg.src = "https://image.tmdb.org/t/p/original/" + data.poster_path
    movieTitle.innerHTML = `${data.title}`;
    overview.innerHTML = `${data.overview}`
    releaseDate.innerHTML = "Chiqarilgan Sana:" + `${data.release_date}`
    vote.innerHTML = `${data.vote_count}` + " Kishi ovoz bergan"
    language.innerHTML ="Til: " + `${data.original_language}`
})

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