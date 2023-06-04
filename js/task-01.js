// 1
const categoriesEls = document.querySelectorAll('#categories > li.item');
const itemsLength = [...categoriesEls].length;
console.log(`Number of categories:${itemsLength}`);

// 2

const itemEls = document.querySelectorAll('li.item > h2');
itemEls.forEach(item => console.log(`Category: ${item.firstChild.nodeValue}
 Elements: ${item.nextElementSibling.children.length}`));


