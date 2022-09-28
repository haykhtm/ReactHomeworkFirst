import { Component } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Counter from "./Components/Counter/index"
let data = [
  {
    id: 1,
    name: "Spring",
    count: 0,
    imgSrc:
      "https://64.media.tumblr.com/bf2380084128af147194b61ac6e32107/44522b493ff97632-e9/s400x600/cf20058d1bba3d5468f0c5aa6aa937e053b3a3ee.gif",
  },
  {
    id: 2,
    name: "Summer",
    count: 0,
    imgSrc:
      "https://i.pinimg.com/originals/68/b5/80/68b5802287649ad7bb59cff215e28969.gif",
  },
  {
    id: 3,
    name: "Autumn",
    count: 0,
    imgSrc: "https://64.media.tumblr.com/tumblr_mbouu7lV0o1revdoyo1_400.gif",
  },
  {
    id: 4,
    name: "Winter",
    count: 0,
    imgSrc:
      "https://64.media.tumblr.com/7174687c419a671b77f386d7fa6ab539/tumblr_pkgf3pteWN1tbadl0_400.gifv",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {data.map((el) => {
          return <Cards key={el.id} el={el} />;
        })}
        <div className="Counter"> <Counter/ ></div>
    
      </div>
    );
  }
}

export default App;
