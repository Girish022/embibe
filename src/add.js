import React  from 'react'
import Form from './form'
import axios from 'axios'

export default class add extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    } 

    handleSubmit (formdata) {
        axios.post ('http://localhost:3005/notes', formdata)
        .then ((responce)=>{
            if (responce.data.hasOwnProperty('error')){
                console.log (responce.data.error)

            }

            else {
                this.props.history.push (`/notes/${responce.data._id}`)
            }
        })

        .catch((err)=>{
            console.log(err)
        })


    }
   
    render () {
        return (
            <div>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

}