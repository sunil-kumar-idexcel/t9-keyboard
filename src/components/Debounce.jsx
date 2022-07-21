const Debounce = (func, delay, charray) => {
  let debounceTimer;
  let count = 0;
  return function (chh) {
    console.log(charray);
    chh = charray;
    if (count === charray.length) {
      count = 0;
    }
    let character = charray[count];
    // setValue((prevState) => {
    //   if (repeated) {
    //     let str = prevState.slice(0, prevState.length - 1) + "~";
    //     str = str.replace("~", character);
    //     return str;
    //   } else {
    //     let str = prevState.slice(0, prevState.length) + "~";
    //     str = str.replace("~", character);
    //     setRepeated(true);
    //     // str += character;
    //     //   str = prevState.slice(0, prevState.length - 1);
    //     // prevState.slice(0,prevState.length-1)+character
    //     return str;
    //   }
    // });
    count++;
    console.log("character", character);
    const context = this;
    //   const args = arguments;
    //   console.log(context);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      count = 0;
      func.apply(context, [character]);
    }, delay);
  };
};

export default Debounce;
