import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 서버에서 가져온 데이터 변수라 가정해보기.
  // 잠깐 자료 저장할 땐 변수
  let post = '내동 삼겹살 맛집';
   const [content, b] = useState('잠깐 저장 자료')

  // return() 안에는 병렬로 태그 2개 이상 기입 금지.
  return (
    <div className="App">
      <div>
        <h1 className="black-nav">일상 블로그</h1>
      </div>
      <div className="list">
        {/* useState에 저장한 자료 불러올 땐 {} */}
        <h4>{content}</h4>
        <p>4월 13일</p>
      </div>
      <div className="list">
        <h4>글 제목</h4>
        <p>4월 13일</p>
      </div>
      {/* JSX 문법 -> 변수 넣을 땐 {중괄호} */}
      {/* 데이터바인딩 작업이라 한다. */}
      {/* 인라인 스타일링은 중괄호에 주의 */}
      <h2 style={{color: 'coral', fontSize: '30px'}}>{ post }</h2>
    </div>
  );
}

export default App;
