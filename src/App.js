import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Headline from './components/Headline/Headline'
import Button from './components/Button/Button'
import ListItem from './components/ListItem/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPosts} from "./actions/index"
import "./app.scss"

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'test@gmail.com',
  age: 30,
  onlineStatus: true
}]

function App() {

  const dispatch = useDispatch();
  const posts = useSelector(({postsReducer}) => postsReducer.posts);
  const [hideBtn, setHideBtn] = useState(false)

  const fetch = () => {
    dispatch(fetchPosts())
    exampleMethod_updatesState()
  }


  const configButton = {
    buttonText: "Get posts",
    emitEvent: fetch
  }

  const exampleMethod_updatesState = () => {
    setHideBtn(!hideBtn)
  }

  return (
    <div className="App" data-test="AppComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>
          {!hideBtn && <Button {...configButton}/>}
          {
            posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configButton = {
                  title,
                  description: body
                }
                return (
                  <ListItem key={post.id} {...configButton}/>
                )
              })}
            </div>
          }
        </section>
    </div>
  );
}

export default App;
