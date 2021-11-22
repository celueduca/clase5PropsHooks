import React from 'react'

interface Props {
    text: string,
    year: number
}

const Footer = (props: Props) => {
    return (
        <>
            <h3>&#169; {props.text + ' - ' + props.year}</h3>
        </>
    )
}

export default Footer