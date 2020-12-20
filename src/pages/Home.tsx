import React, {useState} from 'react'
import Header from '../components/Header'
import ToDo from '../components/todo/ToDo'
import DB from '../assets/db.json';

const Home: React.FC = () => {
    const [lists, setLists] = useState(() => (
        DB.items
    ))
    const [colors, setColors] = useState(() => (
        DB.colors
    ))
    return (
        <>
            <Header/>
            <ToDo list={lists} colors={colors}/>
        </>
    )
}

export default Home
