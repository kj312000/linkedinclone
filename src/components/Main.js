import React from 'react'
import Home from './Home'

function Main(props) {
    if(props.content==='Home') {
        return (<Home/>)
    }
    else if(props.content==='My Network') {
        return (<div> Network Page </div>)
    }
    else if(props.content==='Jobs') {
        return (<div> Jobs Page </div>)
    }
}

export default Main
