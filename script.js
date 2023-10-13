const bookInfo = document.getElementById('bookInfo')

async function getInfoBook() {
    const result = await fetch("https://natashaselyunina.github.io/fetch_lesson14_dz/book.json");
    const object = await result.json();
    const {name, author, genre, years} = object;
    bookInfo.textContent = `Книга "${name}", написал ${author}, жанр книги - ${genre}. Написана была в ${years} годах`
}

getInfoBook();