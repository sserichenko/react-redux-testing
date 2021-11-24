import React from 'react'
import {shallow} from 'enzyme'
import PropTypes  from 'prop-types'
import Headline from './Headline'

import { findByTestAttr } from './../../../Utils'

    const setUp = (props={}) => {
        const component = shallow(<Headline {...props} />)
        return component
    }

describe("Headline Component", () => {

    describe("Checking PropTypes", () => {
        it('Should not trow a warning', () => {
            const expectedProps = {
                header: 'TEst header',
                description: 'Test description',
                tempArr: [{
                    fName: "Alex",
                    lName: "Smith",
                    email: 'smith@gmail.com',
                    age: false,
                    onlineStatus: true
                }]
            }
            const propsErr = PropTypes.checkPropTypes(Headline.propTypes, expectedProps, 'props', 'Headline')
            expect(propsErr).toBeUndefined()
        })
    })

    describe("Have props", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: "Test Description"
            }
            wrapper = setUp(props)
        })
        it("Should renders without errors", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1)
        })

        it("Should render h1", () => {
            const h1 = findByTestAttr(wrapper, 'HeadlineTitle')
            expect(h1.length).toBe(1)
        })

        it("Should render a description", () => {
            const description = findByTestAttr(wrapper, 'HeadlineDescription')
            expect(description.length).toBe(1)
        })

    });

    describe("Have NO props", () => {
        let wrapper
        beforeEach(() => {
            wrapper = setUp()
        })

        it("Should not render", () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    });
})


