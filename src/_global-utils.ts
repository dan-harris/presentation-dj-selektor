import { getFruit, getFood, getMeals, state } from "./selecting";
import {
  addGarnish,
  addChilli,
  addGarnishExpensively,
  addDiamonds
} from "./currying";
import { makeSalad, memoMakeSalad } from "./memoisation";

// cache a result and check its equality
const rerun = result => {
  const newResult = result;
  console.log(
    "👉 newResult === previousResult",
    newResult === globalThis.result
  );
  globalThis.result = newResult;
  return newResult;
};

// add all to globals in console
// 🐉 thar be dragons - ignore this
globalThis.rerun = rerun;

// selecting
globalThis.getFruit = getFruit;
globalThis.getMeals = getMeals;
globalThis.getFood = getFood;
globalThis.state = state;
// selecting - odds & ends
globalThis.pizza = { pepperoni: true, cheese: true };
globalThis.orderedPizza = {};

// currying
globalThis.addGarnish = addGarnish;
globalThis.addChilli = addChilli;
globalThis.addGarnishExpensively = addGarnishExpensively;
globalThis.addDiamonds = addDiamonds;

// memoize
globalThis.makeSalad = makeSalad;
globalThis.memoMakeSalad = memoMakeSalad;
