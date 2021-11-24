import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr} from "../../../Utils"
import Button from "./Button"


describe('Button Component', () => {
    describe("Renders", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                buttonText: "Test button",
                emitEvent: () => {}
            }
            wrapper = shallow(<Button {...props}/>)
        })

        it("Should render a button", () => {
            const button = findByTestAttr(wrapper, "ButtonComponent");
            expect(button.length).toBe(1)
        })

    });



})