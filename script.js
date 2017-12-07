//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    e.preventDefault();
    
    var siteName = document.getElementById('siteName');
    var siteUrl = document.getElementById('siteUrl');
    
    var bookmark = {
        name: siteName,
        url: siteUrl 
    }

    if(localStorage.getItem('bookmarks') === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
}