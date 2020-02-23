import React from 'react';
import logo from './logo.svg';
import './App.css';


function AddCart(e) {
  console.log('Add' + e)
}

function Review() {

  const users = [
    {
      "id": 1,
      "name": "Fadlan",
      "review": "Mantap Mantap"
    },
    {
      "id": 2,
      "name": "Naufal",
      "review": "Mantap Gayn"
    },
    {
      "id": 1,
      "name": "Hansen",
      "review": "Mantap Bos"
    },
  ]

  const listReview = users.map((item) =>
    <div className="Item">
      <img />
      <div className="User">
        <h3>{item.name}</h3>
        <p>{item.review}</p>
      </div>
    </div>
  )

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  )
}

function App() {

  const feature = ['Anti Air', 'Trendy', 'Harga kaki lima'];
  const featureList = feature.map((itemFeature) =>
    <li>{itemFeature}</li>
  )

  const Cate = "Sneakers"
  const Title = "Green Saber Compass"
  const Price = 7500000
  const Info = "One of the most wanted shoes of the world!"

  return (
    <div className="Parentbox">
      <div className="Foto">
        <img src="https://cdn.idntimes.com/content-images/post/20200128/76879332-180124689710577-4143807610172321531-n-2f2848d3522dccb9a7759d5a1c385631_600x400.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">{Cate}</p>
        <h1 className="Title">{Title}</h1>
        <p className="Price">{Price}</p>
        <p className="Info">
          {Info}
        </p>
        <ul>
          {featureList}
        </ul>
        <a onClick={(e) => AddCart(Title, e)} href="#">Add to cart</a>
      </div>
      <Review />
    </div>
  );
}

export default App;
