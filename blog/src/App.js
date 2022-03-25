import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','프론트엔드 취업']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);

  let [modal, modal변경] = useState(false);
  let [제목번호, 제목번호변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <div style={{fontSize : '18px'}}>개발 Blog</div>
      </div>
      {
        글제목.map(function (글,i) {
          return (
            <div className='list' key={i}>
              <h3 onClick={() => { 제목번호변경(i) }} style={{ cursor: 'pointer' }}>{글}
                <span style={{ cursor: 'pointer' }}
                  onClick={() => {
                    let best = [...좋아요];
                    best[i]++;
                    좋아요변경(best);
                  }}>
                  ❤️
                </span> {좋아요[i]}
              </h3>
              <p>3월 24일 발행</p>
              <button onClick={ 제목바꾸기 }>변경</button>
              <hr />
            </div>
          )
        })
        }
      {/* <button onClick={() => {제목번호변경(0)} }>버튼1</button> */}

      {/* <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}
      <div className='publish'>
        <input onChange={(e) => { 입력값변경((e.target.value)) }} />
        <button onClick={() => {
          let Array2 = [...글제목];
          Array2.push(입력값);
          글제목변경(Array2);
          let like = [...좋아요];
          like.push(0);
          좋아요변경(like)
        }}>저장</button>
      </div>
      <button onClick={()=>{modal변경(!modal)}}>모달창</button>
      {
        modal === true ? <Modal 글제목={글제목} 제목번호={제목번호} /> : null
      }

      {/* <Profile/> */}

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>제목 : {props.글제목[props.제목번호]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
//옛날버전 컴포넌트 만드는 코드
// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = { name : 'Kim', age : 30 } //state 만드는법
//   }
//   // changeName() => {} 로 만들면 사용할때 bind(this)
//   changeName() {
//     this.setState( {name : 'Park'})
//   }

//   render() {
//     return (
//       <>
//         <h3>프로필입니다.</h3>
//         <p>저는 {this.state.name} 입니다</p>
//         <button onClick={ this.changeName.bind(this) }>버튼</button>
//       </>
//     )
//   }
// }

export default App;
