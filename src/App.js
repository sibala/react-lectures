import logo from './logo.svg';
import './App.css';
import Jsx from './components/01.JSX/Jsx';
import HelloClassComponent from './components/02.ComponentsAndProps/HelloClassComponent';
import HelloFunctionComponent from './components/02.ComponentsAndProps/HelloFunctionComponent';
import Comment from './components/02.ComponentsAndProps/comment/Comment';
import UserInfo from './components/02.ComponentsAndProps/comment/UserInfo';
import ClockFunctionComponent from './components/03.StateAndLifeCycle/ClockFunctionComponent';


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function App() {
  return (
    <div className="App">


      {/* Hooks useState and useEffect, */}
      <ClockFunctionComponent />
      
      {/* Components and props */}
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />

      <UserInfo user={comment.author}/> */}


      {/* <HelloFunctionComponent student="Julian" />
      <HelloFunctionComponent student="Maisa" />
      <HelloFunctionComponent student="Alexander" />
      <HelloClassComponent nameItWhateverYouWant="WUE21" isSunny="true">
        <p>Some text</p>
      </HelloClassComponent> */}

      {/* JSX  */}
      {/* <Jsx /> */}
    </div>
  );
}


export default App;
