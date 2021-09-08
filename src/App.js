import "./App.css";
import { useState } from "react";
import { NavigateHook } from "./NavigateHook";

function App() {
  const { nameArr, handleChangeArr } = NavigateHook({
    initialArr: ["Huyen", "Hoa", "Hung", "Long"],
  });
  const [name, setName] = useState("");
  return (
    <div>
      <p>学生一覧: [{nameArr.map((item) => item + ",")}]</p>
      <p>追加する名前を入力してください</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChangeArr(name);
        }}
      >
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="確定" />
      </form>
      <p>追加する名前: {name}</p>
      <p>新しい一覧: [{nameArr.map((item) => item + ",")}]</p>
    </div>
  );
}

export default App;
