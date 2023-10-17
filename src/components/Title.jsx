import { createElement } from 'react'

const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

export default function Title({ type, children, className }) {
    return createElement(
        elements[type] || elements.h1,
        {
            className: `display-5 fw-bolder ${className}`,
        },
        children
    )
}
