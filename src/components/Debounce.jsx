const Debounce = (func, delay, charray) => {
  let debounceTimer;
  let count = 0;
  return function (characterArray) {
    console.log(charray);
    characterArray = charray;
    if (count === charray.length) {
      count = 0;
    }
    let character = charray[count];

    count++;
    console.log("character", character);
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      count = 0;
      func.apply(context, [character]);
    }, delay);
  };
};

export default Debounce;
