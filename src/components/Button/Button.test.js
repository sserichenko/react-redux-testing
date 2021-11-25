import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr} from "../../../Utils"
import Button from "./Button"


describe('Button Component', () => {
    describe("Renders", () => {
        let wrapper
        let mockFunc
        beforeEach(() => {
            mockFunc = jest.fn()
            const props = {
                buttonText: "Test button",
                emitEvent: mockFunc
            }
            wrapper = shallow(<Button {...props}/>)
        })

        it("Should render a button", () => {
            const button = findByTestAttr(wrapper, "ButtonComponent");
            expect(button.length).toBe(1)
        })

        it("Should emit callback on click event", () => {
            const button = findByTestAttr(wrapper, "ButtonComponent");
            button.simulate('click');
            const callback = mockFunc.mock.calls.length
            expect(callback).toBe(1)
        })

    });

})