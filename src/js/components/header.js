import React from 'react'
import { useSelector } from 'react-redux'

const header = () => {

    const treeName = useSelector(state => state.tree.name)

    return (
        <header>
            <nav>
                <li>{treeName}</li>
            </nav>
        </header>
    )
}

export default header
