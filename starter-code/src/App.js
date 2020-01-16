import React, { Component } from 'react';
// import Berlin from './data/berlin.json'
import IdCard from './components/IdCard/IdCard.js';
import Greetings from './components/Greetings/Greetings.js';
import Random from './components/Random/Random.js';
import BoxColor from './components/BoxColor/BoxColor.js';
import CreditCard from './components/CreditCard/CreditCard.js';
import './App.css'
import Rating from './components/Rating/Rating.js';
import DriverCard from './components/DriverCard/DriverCard.js';
import LikeButton from './components/LikeButton/LikeButton.js';
import ClickablePicture from './components/Clickable Picture/ClickablePicture.js';
import Dice from './components/Dice/Dice.js';
import Carousel from './components/Carousel/Carousel.js';
import NumbersTable from './components/NumbersTable/NumbersTable.js';
import Facebook from './components/Facebook/Facebook.js';
import SignupPage from './components/SignupPage/SignupPage.js';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker.js';

const users = [{
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
}, {
  lastName: 'Delores',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
}]

const greetings = [{
  lang: 'de',
  children: 'Hallo Ludwig'
}, {
  lang: 'fr',
  children: 'Bonjour François'
}]

const randoms = [{
  min: 1,
  max: 6
}, {
  min: 1,
  max: 100
}]

const rgbs = [{
  r: 255,
  g: 0,
  b: 0
}, {
  r: 128,
  g: 255,
  b: 0
}]

const creditCards = [{
  type: "Visa",
  number: "0123456789018845",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "BNP",
  owner: "Maxence Bouret",
  bgColor: "#11aa99",
  color:"white"
}, {
  type: "Master Card",
  number: "0123456789010995",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "N26",
  owner: "Maxence Bouret",
  bgColor: "#eeeeee",
  color: "#222222"
}, {
  type: "Visa",
  number: "0123456789016984",
  expirationMonth: 12,
  expirationYear: 2019,
  bank: "Name of the Bank",
  owner: "Firstname Lastname",
  bgColor: "#ddbb55",
  color: "white"
}]

const rates = [0, 1.49, 1.5, 3, 4, 5]

const driverCards = [{
  name: "Travis Kalanick",
  rating: 4.2,
  img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
  car: {
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }
}, {
  name: "Dara Khorowshahi",
  rating: 4.9,
  img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
  car: {
    model: "Audi A3",
    licensePlate: "BE33ER"
  }
}]

const likesColor = ['purple', 'blue','green','yellow','orange','red']

const clickablePictures = {
  img: '/img/persons/maxence.png',
  imgClicked: '/img/persons/maxence-glasses.png'
}

const carouselImages = [
  "https://randomuser.me/api/portraits/women/1.jpg", 
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg", 
  "https://randomuser.me/api/portraits/men/2.jpg"
]

class App extends Component {
  state = {
    users
  }

  handleAddUser = {

  }
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {users.map((user, index) => <IdCard key={index} {...user}/>)}

        <h1>Greetings</h1>
        {greetings.map((greeting, index) => <Greetings key={index} {...greeting}/>)}

        <h1>Random</h1>
        {randoms.map((random, index) => <Random key={index} {...random}/>)}
      
        <h1>BoxColor</h1>
        {rgbs.map((rgb, index) => <BoxColor key={index} {...rgb}/>)}

        <h1>CreditCard</h1>
        <div className="creditCard">
          {creditCards.map((creditCard, index) => <CreditCard key={index} {...creditCard}/>)}
        </div>

        <h1>Rating</h1>
        {rates.map((rate, index) => <Rating key={index} rate={rate}/>)}

        <h1>DriverCard</h1>
        {driverCards.map((driverCard, index) => <DriverCard key={index} {...driverCard} id={index}/>)}

        <h1>LikeButton</h1>
        <div className="likeButtons">
          {[0,1].map((index) => <LikeButton key={index} colors={likesColor}/>)}
        </div>

        <h1>ClickablePicture</h1>
        <ClickablePicture {...clickablePictures}/>

        <h1>Dice</h1>
        <Dice />

        <h1>Carousel</h1>
        <Carousel imgs={carouselImages}/>

        <h1>NumbersTable</h1>
        <NumbersTable limit={12}/>

        <h1>Facebook</h1>
        <Facebook />

        <h1>SignupPage</h1>
        <SignupPage />

        <h1>RGBColorPicker</h1>
        <RGBColorPicker r={255} g={150} b={0}/>
      </div>
    );
  }
}

export default App;
