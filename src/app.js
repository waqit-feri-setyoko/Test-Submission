import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import "./style/style.css";
import "./script/element.js";

const searchButton = document.querySelector('.search-button');

//Fungsi Search
searchButton.addEventListener('click', function(e){
    e.preventDefault();
    const masukanKataKunci = document.querySelector('.input-keyword');
    fetch ('http://www.omdbapi.com/?apikey=2e7d5b39&s=' + masukanKataKunci.value)
    .then(response => {
        if(!response.ok){
            showResponseMessage(response.statusText)
        }else{
        return response.json();
        }
    })
    .then(response => {
        if(response.Response === "False"){
            showResponseMessage(response.statusText)
        }else{  
        $(".secarticle").remove(); 
        const movies = response.Search
        let cards = '';
        movies.forEach(movies => cards += appMovie(movies));
        $("#movie-container").html(cards);
        
        const modalDetailButton = document.querySelectorAll('.modal-detail-button');
        modalDetailButton.forEach(buttonDetail)}
    }).catch(err => showResponseMessage(err));      
});
    //Fungsi tombol Show Detail
function buttonDetail (bnt){
        bnt.addEventListener('click', function(){
        const imdbid = this.dataset.imdbid;
        fetch('http://www.omdbapi.com/?apikey=2e7d5b39&i=' + imdbid)
        .then(response => response.json())
        .then(movies => {
            const movieDetail = showDetails(movies);
            $(".modal-body").html(movieDetail)
        });
    });
}
    //Akhir tombol Show Detail
//Akhir fungi Search

//Fungsi menmpilkan Movie List
function appMovie(movie){
   return `<div class="col-md-3 my-5">
        <div class="card">
            <img src="${movie.Poster}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetails" data-imdbid="${movie.imdbID}" >Show Details</a>
                </div>
        </div>
    </div> `
};
//Akhir fungsi menampilkan Movie Lit

//Fungsi menampilkan Detail Movie
function showDetails(movies){
    return `
        <div class="container-flid">
            <div class="row">
                <div class="col-md-5">
                    <img src="${movies.Poster}" alt="${movies.Title}">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4>${movies.Title}(${movies.Released})</h4></li>
                    <li class="list-group-item"><strong>Genre : </strong>${movies.Genre}</li>
                    <li class="list-group-item"><strong>Director : </strong>${movies.Director}</li>
                    <li class="list-group-item"><strong>Writer : </strong>${movies.Writer}</li>
                    <li class="list-group-item"><strong>Actors : </strong>${movies.Actors}</li>
                    <li class="list-group-item"><strong>Production : </strong>${movies.Production}</li>
                    <li class="list-group-item"><strong>Plot : </strong>${movies.Plot}</li>
                    </ul>
                </div>
            </div>
        </div>`
};
//Akhir fungsi menampilkan Datail Movie

//Fungsi ketika Error
const showResponseMessage = (message = "Masukan Nama Film dan Pastikan Nama Film Tersebut Benar!") => {
    alert(message);
};
//Akhir fungsi ketika Error





