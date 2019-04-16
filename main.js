const content = document.getElementById('root')
const searchBtn = document.getElementById('search-btn')
const inputTitle= document.getElementById('input-title')

const arrFilms=["tt3799232","tt3846674","tt0101739","tt1817385","tt0387728","tt1974182","tt0304968","tt0093109","tt1951264","tt1951265","tt1951266",
"tt1840309","tt4516496","tt5251060","tt1201607"];

const getArrFilmsByDefault=(arrId)=>{
  
for(let i=0;i<arrId.length;i++){
  fetch(`http://www.omdbapi.com/?i=${arrId[i]}&apikey=b06dbea8`)
  .then(response=>response.json())
  .then(data=>{
  
    content.innerHTML+=`<div><img src="${data.Poster}" class="img-default" alt=""></div>`
    
  })
  .catch(err=>console.log(err))
}
   
};
getArrFilmsByDefault(arrFilms);









//Imprimir by Title Filter By Title
const getArrFilms = (title) => { 
  
  fetch(`http://www.omdbapi.com/?s=${title}&apikey=b06dbea8`)
       .then(response => response.json())
       .then(data =>{

       const arrFilms=data.Search;
       let str='';
        for(let i=0;i<arrFilms.length;i++){ // [{},{}]
          str+=`<div><img src="${arrFilms[i].Poster}" alt=""></div>`
        content.innerHTML=str;
      }
    })
   .catch(err=>console.log(err))
 };

searchBtn.addEventListener('click',()=>{
  getArrFilms(inputTitle.value)
});






 



