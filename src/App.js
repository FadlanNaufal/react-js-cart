import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

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
        <p class="Cate">{Cate}</p>
        <h1 class="Title">{Title}</h1>
        <p class="Price">{Price}</p>
        <p class="Info">
          {Info}
        </p>
      </div>
    </div>
  );
}

export default App;
