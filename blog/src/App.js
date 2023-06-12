import './App.css';
import { useState } from 'react';

function App() {
  // 서버에서 가져온 데이터 변수라 가정해보기.
  // 잠깐 자료 저장할 땐 변수

  // useState 함수의 인자엔 상태의 초기값을 넣어준다.
  const [content, setContent] = useState('글 제목1')
  const onClickEnter = () => setContent('바뀐 글 제목');
  const onClickLeave = () => setContent('다시 바뀐 글 제목');
  // 프로젝트에서 버튼을 눌러 화면을 전환하는 기능에 쓰일 거 같다.
  // useState는 콜백 함수를 통해 처리되는 걸로 보인다.
  // 어떤식으로 쓰일 수 있을까?
  // 자세히 파보자.
  const [title, setTitle] = useState(['글 제목2', '글 제목3']);

  // 좋아요 수 설정하는 useState
  const [like, setLike] = useState(0);
  // 좋아요 클릭시 1 증가
  const onClickLike = () => setLike(like+1);
  // return() 안에는 병렬로 태그 2개 이상 기입 금지.
  return (
    <div className="App">
      <div>
        <h1 className="black-nav">일상 블로그</h1>
      </div>
      <div className="list">
        {/* useState에 저장한 자료 불러올 땐 {} */}
        {/* onClick={} 안에는 함수 이름을 넣어야 한다. */}
        <h4>{content} <span onClick={onClickLike}>👍</span> {like} </h4>
        <p>4월 12일</p>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>4월 13일</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>4월 14일</p>
      </div>
      {/* 버튼의 클릭을 감지, useState를 활용하여 내용을 바꿔준다. */}
      <button onClick={onClickEnter}>눌러봐</button>
      <button onClick={onClickLeave}>눌러봐</button>

      {/* JSX 문법 -> 변수 넣을 땐 {중괄호} */}
      {/* 데이터바인딩 작업이라 한다. */}
      {/* 인라인 스타일링은 중괄호에 주의 */}

      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

    </div>
  );
}

export default App;
