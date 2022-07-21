import { Fragment, memo, useState } from "react";
import Debounce from "./Debounce";
const Buttons = ({ setValue}) => {
    // const [repeated,setRepeated] = useState(true)
  const chars = [
    ["."],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r"],
    ["s", "t", "u"],
    ["v", "w", "x", "z"],
  ];

  return (
    <Fragment>
      <div>
        {[...Array(9)].map((e, index) => {
          return (
            <button
              style={{
                padding: "25px",
                borderRadius: "50%",
                margin: "5px",
                width: "80px",
              }}
              key={index}
              onClick={Debounce(
                function (chh) {
                  console.log("in func", chh);
                  setValue((prevState) => prevState + chh);
                //   setValue((prevState) => {
                //     setRepeated(false);
                //     return prevState.slice(0,prevState.length-1) + chh
                //   });
                },
                800,
                chars[index],
                setValue,
              )}
            >
              {index + 1}
              <br />
              {chars[index]}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};
export default memo(Buttons);
