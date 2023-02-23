window.onload = () => {
    getOriginals();
    getTrendingNow();
    getTopRated();
}


function fetchMovies(url, dom_element, path_type){
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error('something went wrong');
        }
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}

fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213');