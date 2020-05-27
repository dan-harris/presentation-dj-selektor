import { expensiveOperation } from "./_utils";

// #region 5... 🍛 Function Currying

// garnish a food with some fruit
const addGarnish = garnish => food => {
  return food + " with " + garnish;
};

// garnish a food with some fruit
// -> same as:
function addGarnishFn(garnish) {
  // could do operations on garnish here if we want
  return function addGarnishToFood(food) {
    return food + " with " + garnish;
  };
}

// add chilli
const addChilli = addGarnish("🌶");

// #endregion

// #region 6... 🌝 Why curry a Function?

// garnish a food with some fruit
// -> EXPENSIVELY - lazily defer the expensive work
const addGarnishExpensively = garnish => {
  return async food => {
    console.time("👉 garnishing took ");
    await expensiveOperation();
    console.timeEnd("👉 garnishing took ");
    console.log(food + " with " + garnish);
  };
};

// leave the expensive operation for lazy eval
const addDiamonds = addGarnishExpensively("💎");

// #endregion

// #region blerg
export {
  addGarnish,
  addChilli,
  addGarnishFn,
  addGarnishExpensively,
  addDiamonds
};
// #endregion
