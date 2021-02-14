import '../sass/main.scss';
import * as model from './Model';
import recipeView from './views/recipeView';
import icons from '../img/icons.svg';
const recipeContainer = document.querySelector('.recipe');
///////////////////////////////////////

const renderSpinner = function (parentEL) {
  const markUp = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
  parentEL.innerHTML = '';
  parentEL.insertAdjacentHTML('afterbegin', markUp);
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    renderSpinner(recipeContainer);
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe)
  } catch(err) {
    alert(err)
  }
};
['hashchange', 'load'].forEach(event => {
  window.addEventListener(event, showRecipe);
});
