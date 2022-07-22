const Debounce = (func, delay, charray,setValue,repeatedClick) => {
  let debounceTimer;
  let clickCount = 0;
  return function (characterArray) {
    console.log(charray);
    characterArray = charray;
    if (clickCount === charray.length) {
      clickCount = 0;
    }
    const character = charray[clickCount];

    clickCount++;
    console.log("character", character);
    if(repeatedClick){
      setValue((prevState)=>{
        let str = prevState.slice(0,prevState.length-1);
        return str+ character;
      })
    }else{
      setValue((prevState)=>{
        let str = prevState+"~";
        str = str.replace("~",character);
        repeatedClick = true;
        return str;
      })
    }
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      clickCount = 0;
      repeatedClick = false;
      func.apply(context, [character]);
    }, delay);
  };
};

export default Debounce;
