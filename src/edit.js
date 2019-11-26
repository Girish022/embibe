import React from 'react'
import Form from './form'
import axios from 'axios'

export default class Edit extends React.Component {
    
    constructor (props) {
        console.log('edit form constrct')
        super(props)
        this.state = {
           note:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
  componentDidMount () {
      console.log ('from-edit-cdm')
      const id = this.props.match.params.id
      axios.get (`http://localhost:3005/notes/${id}`)
      .then ((responce)=>{
          this.setState (()=>({
            note:responce.data

          }) )
      })

  }

  handleSubmit (formdata) {

      //const id = this.props.match.params.id 
      axios.put (`http://localhost:3005/notes/${this.state.note.id}`, formdata)
      .then ((responce)=>{
          console.log (responce)
        if (responce.data.hasOwnProperty('error')){
            console.log (responce.data.error)

        }

        else {
            this.props.history.push (`/notes/${responce.data._id}`)
        }
      })
  }

    render () {
        console.log ('form-edit-render')
        return (
            <div>
                <h2>Edit Notes </h2>
                <Form  handleSubmit={this.handleSubmit} note={this.state.note}/>
            </div>
        )
    }
}