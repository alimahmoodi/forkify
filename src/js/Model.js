import 'regenerator-runtime/runtime';
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await res.json();
  state.recipe = data.data.recipe;
};
