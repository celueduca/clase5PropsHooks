import React from 'react'


interface Props {
    title: string,
    add?: (n: number) => number
}

const Header = ({ title, add }: Props) => {

    return (
        <>
            <nav className="navbar navbar-light">
                <h1 className="header-title">{title}</h1>
            </nav>
        </>
    )
}
export default Header;