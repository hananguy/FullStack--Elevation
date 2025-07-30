$(document).ready(function() {

    fetch2("title", "How to Win Friends and Influence People");

})



const fetch = function(isbn)
{
    $.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`, (books) => {
        console.log(books.items[0].volumeInfo.title);
    })
}


const fetch2 = function(queryType, queryValue)
{
      $.get(`https://www.googleapis.com/books/v1/volumes?q=:${queryType}:${queryValue}`, (books) => {
        console.log(books.items[0].volumeInfo.title);
    })
}