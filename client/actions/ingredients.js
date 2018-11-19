import api, { getFile } from '../utils/api'

const loadIngredients = () => async (state, actions) => {
  try {
    const ingredients = await Promise.all((await api('/ingredients')).map(
      async (ingredient) => Object.assign(
        {},
        ingredient,
        { image: await getFile(ingredient.image) }
      )
    ))

    actions.loadIngredientsSuccess(ingredients)
  } catch (error) {
    console.error(error)
  }

  return { ingredients: null }
};

const loadIngredientsSuccess = ingredients => () => ({ ingredients })

export {
  loadIngredients,
  loadIngredientsSuccess
};
