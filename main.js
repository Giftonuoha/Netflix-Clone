const signinBtn = document.querySelector('.submit-btn');
const userInput = document.getElementById('user-input');
const Url = "https://api.themoviedb.org/3/discover/movie?api_key=0e6073ffa9997b38c388d9ab7fc0a959";
const imgPathUrl = "https://image.tmdb.org/t/p/w500";

const movieRow = document.getElementById('movie-row');

 Movies(Url);
function Movies(Url) {
  fetch(Url).then(res => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img')
        image.src = imgPathUrl + element.poster_path;
        image.style.width = '200px'
        image.classList.add("poster");
        el.classList.add("movieCard");
        el.appendChild(image);
        movieRow.appendChild(el);
      });
    });
}



function newWindow(){
  window.open("movies.html");
  
}

signinBtn.addEventListener('click', newWindow);

// fetch('https://imdb146.p.rapidapi.com/v1/find/?query=Love',{
//   "method": 'GET',
// 	"headers": {
// 		'X-RapidAPI-Key': 'cc319a21c2msh280ef9b47e2d213p170b15jsna26c512ff280',
// 		'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
// 	}
// });
// .then(response => response.json())
// .then(data => console.log())
// .catch(err => {
//   console.error(err);
// });
 





// fetch(Url)
// .then(response => response.json())
// .then(response =>{
//     const movies = response.results;
   
//         console.log(movies )
//         const imgPathUrl = "https://image.tmdb.org/t/p/w500";
//         const moviePoster = `<img src="${imgPathUrl} + ${movies.poster_path}" >`
//         document.querySelector('movie-row').innerHTML += moviePoster; 
//  } )

// .catch(err => console.error(err));   
  