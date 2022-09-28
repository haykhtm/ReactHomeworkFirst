import { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      save: false,
      reverse: true,
      count: 0,
    };
  }
  handleCardTogle = () => {
    this.setState({
      reverse: !this.state.reverse,
      save: !this.state.save,
    });
  };

  handleCountAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  

  render() {
    const {
      props: { el },
    } = this;
    const {
      state: { reverse, count },
    } = this;

    return (
      <>
        <div className="Card">
          {reverse ? (
            <div className="divButton">
              <span className="span"> {el.name}</span>
              <button
                onClick={() => this.handleCardTogle()}
                className="button"
              >
                {" "}
                Close Count
                {count}
              </button>
            </div>
          ) : (
            <div className="secretDiv">
              <button
                className="secretButton"
                onClick={() => {
                  return this.handleCardTogle() || this.handleCountAdd();
                }}
              >
                SHOW SEASON
              </button>
            </div>
          )}
          <div>
            {reverse ? <img className="img" src={el.imgSrc} alt="" /> : ""}
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
