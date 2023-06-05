// 1
const categoriesEls = document.querySelectorAll('#categories > li.item');
const itemsLength = [...categoriesEls].length;

console.log('Number of categories:' + itemsLength);

// 2

const itemEls = document.querySelectorAll('li.item > h2');

itemEls.forEach(item =>{
    const categoryEl = item.firstChild.nodeValue;
    const elementsEl  = item.nextElementSibling.children.length;
    
    console.log('Category:' + categoryEl);
    console.log('Elements:' + elementsEl);
})
