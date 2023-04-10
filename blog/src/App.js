import logo from './logo.svg';
import './App.css';

function App() {
  // 서버에서 가져온 데이터 변수라 가정해보기.
  let post = '내동 삼겹살 맛집';

  return (
    <div className="App">
      <div>
        <h1 className="black-nav">일상 블로그</h1>
      </div>
      {/* JSX 문법 -> 변수 넣을 땐 {중괄호} */}
      {/* 데이터바인딩 작업이라 한다. */}
      {/* 인라인 스타일링은 중괄호에 주의 */}
      <h2 style={{color: 'coral', fontSize: '30px'}}>{ post }</h2>
    </div>
  );
}

export default App;
