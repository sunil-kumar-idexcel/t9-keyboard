import { Fragment, memo } from "react";
import Debounce from "./Debounce";
const Buttons = ({
  setValue,
  isUpperCase,
}) => {
  let repeatedClick = false;
  let initial_char_code;
  isUpperCase ? (initial_char_code = 65) : (initial_char_code = 97);

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
      let charArray = [...Array(5)].map((e) =>
        String.fromCharCode(initial_char_code++)
      );

      return {
        id: index + 1,
        key_no: index + 1,
        characters: charArray,
      };
    } else {
      let charArray = [...Array(3)].map((e) =>
        String.fromCharCode(initial_char_code++)
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
        {charss.map((e) => {
          return (
            <button
              style={{
                padding: "20px",
                borderRadius: "50%",
                margin: "0px",
                width: "30%",
              }}
              key={e.id}
              onClick={Debounce(
                function (character) {
                  console.log("in func", character);
                  setValue((prevState) => {repeatedClick = true;return prevState.slice(0,prevState.length-1) + character});
                },
                800,
                e.characters,
                setValue,
                repeatedClick
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
