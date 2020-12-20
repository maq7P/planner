import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 1200px;
    margin: auto;
`

const Home: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <Container>
                <a href="/" className="brand-logo"><i className="material-icons">cloud</i>Planner</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/"><i className="material-icons">search</i></a></li>
                    <li><a href="/"><i className="material-icons">view_module</i></a></li>
                    <li><a href="/"><i className="material-icons">refresh</i></a></li>
                    <li><a href="/"><i className="material-icons">more_vert</i></a></li>
                </ul>
            </Container>
            </div>
        </nav>
    )
}

export default Home
