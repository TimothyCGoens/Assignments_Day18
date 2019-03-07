//let startersMenu = document.getElementById('startersMenu')
//let entreesMenu = document.getElementById('entreesMenu')
//let dessertsMenu = document.getElementById('dessertMenu')
//let wholeMenu = document.getElementById('wholeMenu')

let starterMenu = document.getElementById('starterMenu')
let entreeMenu = document.getElementById('entreeMenu')
let dessertMenu = document.getElementById('dessertMenu')
let wholeMenu = document.getElementById('wholeMenu')
let menu = document.getElementById('menu')

let menuItems = dishes.map(function(dish) {
    return `<li>
          <img src =${dish.imageURL}>
          <h1 class="dishName">:${dish.title}</h1>
          <p class="dishDescription">${dish.description}</p>
          <p class="price">${dish.price}</p>
          </li>`
})
menu.innerHTML = menuItems.join('')



let startersButton = document.getElementById('startersButton')
let entreesButton = document.getElementById('entreesButton')
let dessertsButton = document.getElementById('dessertsButton')

// filter starter dishes into UL
let starters = dishes.map(function(dish){
    if(dish.course == 'Starters'){
        return `
            <li>
            <img src =${dish.imageURL}>
            <h1 class="dishName">${dish.title}</h1>
            <p class="dishDescription">${dish.description}</p>
            <p class="price">${dish.price}</p>
            </li>`
    }
})
startersButton.addEventListener('click', function(){
  menu.innerHTML = starters.join('')
})

// filter entree dishes into UL
let entrees = dishes.map(function(dish){
    if(dish.course == 'Entrees'){
        return `
            <li>
            <img src =${dish.imageURL}>
            <h1 class="dishName">${dish.title}</h1>
            <p class="dishDescription"">${dish.description}</p>
            <p class="price">${dish.price}</p>
            </li>`
    }
})
entreesButton.addEventListener('click', function(){
  menu.innerHTML = entrees.join('')
})

// filter desserts dishes into UL
let desserts = dishes.map(function(dish){
    if(dish.course == 'Desserts'){
        return `
            <li>
            <img src =${dish.imageURL}>
            <h1 class="dishName">${dish.title}</h1>
            <p class="dishDescription">${dish.description}</p>
            <p class="price">${dish.price}</p>
            </li>`
    }
})
dessertsButton.addEventListener('click', function(){
  menu.innerHTML = desserts.join('')
})
