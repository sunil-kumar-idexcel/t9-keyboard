import { Fragment, memo } from "react";
import Debounce from "./Debounce";
const Buttons = ({ setValue }) => {
  const chars = [
    {
      id: 1,
      key_no: 1,
      characters: ["."],
    },
    {
      id: 2,
      key_no: 2,
      characters: ["a", "b", "c"],
    },
    {
      id: 3,
      key_no: 3,
      characters: ["d", "e", "f"],
    },
    {
      id: 4,
      key_no: 4,
      characters: ["g", "h", "i"],
    },
    {
      id: 5,
      key_no: 5,
      characters: ["j", "k", "l"],
    },
    {
      id: 6,
      key_no: 6,
      characters: ["m", "n", "o"],
    },
    {
      id: 7,
      key_no: 7,
      characters: ["p", "q", "r"],
    },
    {
      id: 8,
      key_no: 8,
      characters: ["s", "t", "u"],
    },
    {
      id: 9,
      key_no: 9,
      characters: ["v", "w", "x", "z"],
    },
  ];
  return (
    <Fragment>
      <div>
        {chars.map((e, index) => {
          return (
            <button
              style={{
                padding: "25px",
                borderRadius: "50%",
                margin: "5px",
                width: "80px",
              }}
              key={e.id}
              onClick={Debounce(
                function (character) {
                  console.log("in func", character);
                  setValue((prevState) => prevState + character);
                },
                800,
                e.characters,
                setValue
              )}
            >
              {e.key_no}
              <br />
              {e.characters}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};
export default memo(Buttons);
