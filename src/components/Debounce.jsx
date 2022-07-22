const Debounce = (func, delay, charray) => {
  let debounceTimer;
  let clickCount = 0;
  return function (characterArray) {
    console.log(charray);
    characterArray = charray;
    if (clickCount === charray.length) {
      clickCount = 0;
    }
    let character = charray[clickCount];

    clickCount++;
    console.log("character", character);
    
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      clickCount = 0;
      func.apply(context, [character]);
    }, delay);
  };
};

export default Debounce;
