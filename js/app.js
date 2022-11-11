// search img by datacaption
function handleSearch (e, imgsArr) { 
    const searchVal = e.target.value.toLowerCase();
    imgsArr.forEach(img => {  
        let data = img.getAttribute('data-sub-html').toLowerCase();
        img.style.display = !searchVal || data.includes(searchVal) ? '' : 'none';
    });
}; 


let imgs = document.querySelectorAll('[data-sub-html]'); // all images that have [data-sub-html] attribute
let searchInput = document.querySelector('#search');

// keystoke eventListener
searchInput.addEventListener('keyup', e => {
    handleSearch(e, imgs); 
});

// 'return' eventListener
searchInput.addEventListener('search', e => {
    handleSearch(e, imgs); 
});

// window loading eventListener
lightGallery(document.querySelector('.gallery-grid'), { speed: 500 });

