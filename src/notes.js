import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class List extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            notes:[]
        }
    }

    componentDidMount (){
        axios.get ('http://localhost:3005/notes/')
        .then (responce=>{
            this.setState (()=>({
              
                notes:responce.data
            }))
        })
        .catch ((err)=>{
            console.log(err)
        })
    }

    
    

    
    render () {
        return (
            <div>
                <h2>Notes List -{this.state.notes.length}</h2>
                <ul>
                    {this.state.notes.map ((note)=>{
                    return <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title} </Link></li> 

                    })}
                </ul>
                <Link to='/notes/new'>Add Notes</Link>
        
            </div>
        )
    }
}