/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) return 'You forgot to set the timer.';
  if (remainingTime === 0) return 'Lasagna is done.';
  return 'Not done, please wait.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const noodleLayers = layers.filter((layer) => layer === 'noodles').length;
  const sauceLayers = layers.filter((layer) => layer === 'sauce').length;

  return {
    noodles: noodleLayers * 50,
    sauce: sauceLayers * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe (recipe, portionNumber=2){
  const scale = portionNumber / 2;
  const scaledRecipe = {};
  for(let ingredient in recipe){
    scaledRecipe[ingredient] = recipe[ingredient]*scale;
  }
  return scaledRecipe;
}