import { BASE_URL } from './info.js';

const DEFAULT_RECIPES = 10;

const showRandomRecipes = (numRecipes = DEFAULT_RECIPES) => {

    for (let index = 0; index < numRecipes; index++) {
        fetch(`${BASE_URL}/random.php`)
        .then(response => response.json())
        .then(data => {
            data = data.meals[0];
            document.querySelector('#recipe-list').innerHTML += `
                <article>
                    <header>
                        <h2>${data.strMeal}</h2>
                    </header>
                    <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
                    <div>
                        <p class="pill">${data.strCategory}</p>
                        <p class="pill">${data.strArea}</p>
                    </div>
                </article>
            `;
        })
        .catch(error => console.log(error));
    }
};
showRandomRecipes();