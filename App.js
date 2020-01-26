import React from 'react';
import './App.css';
import FoodItem from './components/FoodItem';
import FoodData from './foodData.json';

// const getTimeString = timestamp => {
//     let date = new Date(timestamp);
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//
//     // 0 padding!
//     month = (month < 10 ? "0" : "") + month;
//     day = (day < 10 ? "0" : "") + day;
//     hour = (hour < 10 ? "0" : "") + hour;
//     min = (min < 10 ? "0" : "") + min;
//     sec = (sec < 10 ? "0" : "") + sec;
//
//     let str = hour + ":" + min + ":" + sec + " on " + month + "/" + day + "/" + date.getFullYear();
//     return str;
// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        foodItems: [],
        // author: "Anonymous",
        // message: "your message..."
    };
    // console.log(FoodData);
    //     var totalCF = 0;
    //     FoodData.menuItems[0].ingredients.forEach(item => {
    //       totalCF += FoodData.ingredients[item].cf;
    //     });
    //     console.log("carbon footprint for steak = ", totalCF);
  }
  // handleAuthorChange = e => {
  //   this.setState({ author: e.target.value });
  // }
  //
  // handleMessageChange = e => {
  //   this.setState({ message: e.target.value });
  // }
  // createFoodItem = (name, url) => {
  //   let newFoodItem = {
  //       name: name,
  //       url: url
  //   };
  //   this.state.foodItems.push(newFoodItem);
  // }
  renderFoodItems = () => {
      let foodItems = [];
      FoodData["menuItems"].forEach((element, i) => {
          foodItems.push(
          <FoodItem
              key={i}
              name={element.name}
              url={element.infoUrl}
          />
          );
      });
      return (
          <div className="food-container">
              {foodItems}
          </div>
      );
  }
  render = () => {
      return (
          <div className="app-container">
              <header className="header-text">BRU-PRINT</header>
              <p>Calculate your carbon footprint! (the links only send you to the site but hey it's a start!)</p>
              <hr />
              {/*<div className="message-box">*/}
              {/*    <input*/}
              {/*        className="text-input"*/}
              {/*        type="text"*/}
              {/*        value={this.state.author}*/}
              {/*        onChange={this.handleAuthorChange}*/}
              {/*    />*/}
              {/*    <input*/}
              {/*        className="text-input"*/}
              {/*        type="text"*/}
              {/*        value={this.state.message}*/}
              {/*        onChange={this.handleMessageChange}*/}
              {/*    />*/}
              {/*    <button*/}
              {/*      className="send-button"*/}
              {/*      onClick={this.createMessage}*/}
              {/*    >*/}
              {/*        Send Message*/}
              {/*    </button>*/}
              {/*</div>*/}
              {this.renderFoodItems()}
          </div>
      );
  }
}

export default App;
