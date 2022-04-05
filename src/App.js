import logo from './logo.svg';
import './App.css';
import Jsx from './components/01.JSX/Jsx';
import HelloClassComponent from './components/02.ComponentsAndProps/HelloClassComponent';
import HelloFunctionComponent from './components/02.ComponentsAndProps/HelloFunctionComponent';
import Comment from './components/02.ComponentsAndProps/comment/Comment';
import UserInfo from './components/02.ComponentsAndProps/comment/UserInfo';
import ClockFunctionComponent from './components/03.StateAndLifeCycle/ClockFunctionComponent';
import FunctionClickEvent from './components/04.HooksWithEvents/FunctionClickEvent';
import CounterWithHooks from './components/04.HooksWithEvents/CounterWithHooks';
import CounterWithHooks2 from './components/04.HooksWithEvents/CounterWithHooks2';
import Login from './components/05.ConditionAndPassingUpProps/Login';
import Blog from './components/06.ListsAndKeys/Blog';
import FormsWithHooksBasics from './components/07.Forms/FormsWithHooksBasics';
import RegisterForm from './components/07.Forms/RegisterForm';
import RegisterFormWithStyling from './components/08.Styling/RegisterFormWithStyling';


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

      {/* Styling */}
      <RegisterFormWithStyling />

      {/* Form with hooks */}
      {/* <RegisterForm /> */}
      {/* <FormsWithHooksBasics /> */}


      {/* Lists and keys */}
      {/* <Blog /> */}


      {/* Condition And Passing Up Props */}
      {/* <Login /> */}


      {/* Hooks and events */}
      {/* <CounterWithHooks2 /> */}
      {/* <CounterWithHooks /> */}
      {/* <FunctionClickEvent /> */}


      {/* Hooks useState and useEffect, */}
      {/* <ClockFunctionComponent /> */}
      
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
