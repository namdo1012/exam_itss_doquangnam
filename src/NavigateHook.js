import { useState } from "react";

const NavigateHook = ({ initialArr }) => {
  const [nameArr, setNameArr] = useState(initialArr);

  const handleChangeArr = (val) => {
    setNameArr([...nameArr, val]);
  };

  return {
    nameArr,
    handleChangeArr,
  };
};

export { NavigateHook };
