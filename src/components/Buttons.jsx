import { Fragment, memo } from "react";
import Debounce from "./Debounce";
const Buttons = ({ setValue, isUpperCase }) => {
  let initial_char;
  isUpperCase ? (initial_char = 65) : (initial_char = 97);

  //creating objects for number keys
  const charss = [...Array(9)].map((e, index) => {
    if (index === 0) {
      let character = String.fromCharCode(46);
      return {
        id: index + 1,
        key_no: index + 1,
        characters: character,
      };
    } else if (index === 8) {
      let charArray = [...Array(4)].map((e) =>
        String.fromCharCode(initial_char++)
      );

      return {
        id: index + 1,
        key_no: index + 1,
        characters: charArray,
      };
    } else {
      let charArray = [...Array(3)].map((e) =>
        String.fromCharCode(initial_char++)
      );
      return {
        id: index + 1,
        key_no: index + 1,
        characters: charArray,
      };
    }
  });

  //end of creating objects for number keys

  return (
    <Fragment>
      <div>
        {charss.map((e, index) => {
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
