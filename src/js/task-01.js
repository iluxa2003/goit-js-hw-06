const message = document.querySelector("#categories");
console.log("Number of categories:" + message.children.length);
const items = message.children;
console.log(items)
for (const key in items) {
    try{
        console.log("Category:" + items[key].firstElementChild.textContent);
        console.log("Elements:" + items[key].lastElementChild.children.length);
    }
    catch{}
}


