import React from 'react'
import App from "./App"
import Button from "./components/Button/Button"
import {shallow, mount} from "enzyme"
import { Provider } from 'react-redux'
import {findByTestAttr, testStore} from "./../Utils"

const exampleMethod_updatesState = jest.fn();

const setUp = (initialState = {posts: []}) => {
    const store = testStore(initialState)
    const wrapper = mount(
        <Provider store={store}>
            <App onClick={exampleMethod_updatesState}/>
        </Provider>
    )
    
    return wrapper
}

describe("App component", () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Test title 1',
                body: "Some text", 
            },
            {
                title: 'Test title 2',
                body: "Some text"
            },
            {
                title: 'Test title 3',
                body: "Some text"
            }]
            
        }
        wrapper = setUp(initialState)
    });
    it("Should renrer without errors", () => {
        const component = findByTestAttr(wrapper, 'AppComponent')
        console.log(component.debug())
        expect(component).toHaveLength(1)
    })
    it("exampleMethod_updatesState method should update state as expected", () => {
        const setHideBtn = jest.fn();
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(hideBtn => [hideBtn, setHideBtn]);
        wrapper.find(Button).simulate("click");
        expect(setHideBtn).toBeTruthy();
    })
})