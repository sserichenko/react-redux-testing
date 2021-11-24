import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr} from "../../../Utils"
import ListItem from "./ListItem"

describe("List Component", () => {
    describe("Renders", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: "Test button",
                description: "Some description"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it("Should render a ListItem", () => {
            const listItem = findByTestAttr(wrapper, "ListItemComponent");
            expect(listItem.length).toBe(1)
        })
        
        it("Should render a title", () => {
            const title = findByTestAttr(wrapper, "titleComponent");
            expect(title.length).toBe(1)
        })

        it("Should render a description", () => {
            const description = findByTestAttr(wrapper, "descriptionComponent");
            expect(description.length).toBe(1)
        })

    });

    describe("Should NOT RENDER", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                description: "Some description"
            }
            wrapper = shallow(<ListItem {...props}/>)
        })
        it("Component is not rendered", () => {
            const listItem = findByTestAttr(wrapper, "ListItemComponent");
            expect(listItem.length).toBe(0)
        })
    })
})