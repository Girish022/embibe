import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Show extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            note:{}
        }

        this.handleDelete=this.handleDelete.bind(this)
    }
    componentDidMount (){
        const id =this.props.match.params.id
        axios.get (`http://localhost:3005/notes/${id}`)
        .then ((responce)=>{
            this.setState(()=>({
                note:responce.data
            }))
        })
    }
    handleDelete () {
        const id =this.props.match.params.id
        axios.delete (`http://localhost:3005/notes/${id}`)
        .then ((responce)=>{
            this.setState(()=>({
                note:responce.data
            }))
        })
    }
    render (){
        return(
            <div>
                <li>{this.state.note.title}</li>
                <li>{this.state.note.body}</li>
                <br/>
                <button onClick={this.handleDelete}><Link to='/notes'>Delete</Link></button>
                <button onClick={this.handleEdit}><Link to={`/notes/edit/${this.props.match.params.id}`}>Edit</Link></button>
               

            </div>
        )
    }
}