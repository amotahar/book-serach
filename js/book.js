
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value='';
    // console.log(searchText)

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data))
    
}

searchBook();


const displayBook = books => {
   console.log(books);
}

    
