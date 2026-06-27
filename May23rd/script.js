const API_Key="50e477e9";
const buttons=document.querySelectorAll("button")
const moviesContainer=document.getElementById("movies-container")
buttons.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const mood=btn.dataset.mood
        fetchMovie(mood)
 } )
});
//task 2 get movies on basis of mood
 async function fetchMovie(movieName){
    moviesContainer.innerHTML="<h2> Loading ......</h2>";
    const url=`https://www.omdbapi.com/?apikey=50e477e9&s=${movieName}`;
    const response= await fetch(url)
    const data= await response.json()
     if(data.Response==="False"){
        moviesContainer.innerHTML="<h2>No movies found</h2>";
        return;
    }
    displayMovie(data.Search)

}
function displayMovie(movies){
    moviesContainer.innerHTML="";
    movies.forEach(movie=>{
        const card = document.createElement("div")
        card.innerHTML=`
        <img src="${movie.Poster}">
        <div class="movie-info">
        <h3>${movie.Title}</h3>
        </div>`;
        moviesContainer.append(card)
    })

}
