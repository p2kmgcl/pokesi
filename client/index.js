import 'babel-polyfill'
import { h, app } from 'hyperapp'

import { app as appView } from './components/app'
import initialState from './utils/initial-state'
import { registerServiceWorker } from './to-do/service-worker'

import { goTo, goBack, updatePathname } from './actions/go-to';
import { loadIngredients, loadIngredientsSuccess } from './actions/ingredients'
import { addIngredient, removeIngredient } from './actions/update-quantity'
import { share } from './actions/share'
import { initializeFirebase } from './utils/api';

const actions = {
  goTo,
  goBack,
  updatePathname,
  loadIngredients,
  loadIngredientsSuccess,
  addIngredient,
  removeIngredient,
  share
};

initializeFirebase()
app(initialState, actions, appView, document.getElementById('app'))
registerServiceWorker()
