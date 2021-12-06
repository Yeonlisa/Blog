/*eslint-disable*/
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '리액트 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let posts = '강남 고기 맛집';

  // function 제목바꾸기() {
  //   let newArray = [...글제목];
  //   newArray[0] = '여자코트 추천';
  //   글제목변경(newArray);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        글제목.map((글) => {
          return (
            <div className="list">
              <h3>{ 글 } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> {따봉}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      {
        modal === true 
        ? <Modal /> 
        : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
