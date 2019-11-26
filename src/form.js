import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
    constructor (props) {
        console.log ('form construct')
        super(props)
        this.state ={
            title:'',
            body:'' ,
            categories:[],
            category:''
        }
      this.handleChange=this.handleChange.bind(this)  
      this.handleSubmit=this.handleSubmit.bind(this)

     
    }

    handleChange (e) {
        console.log('form handlechange')
        e.persist()
      
       this.setState (()=>({
           [e.target.name]:e.target.value
       }))

    }

    handleSubmit (e) {
        console.log ('form handlesubmit')
        e.preventDefault()
        const formdata= {
            title:this.state.title,
            body:this.state.body,
            category:this.state.category
            
        }
       this.props.handleSubmit(formdata)
    }

    componentWillReceiveProps (nextProps) {
        this.setState (()=>({
            title:nextProps.note.title,
            body:nextProps.note.body,
          //  category:nextProps.note.category._id

        }))
    }

    componentDidMount () {
        console.log ('form -cdm-dropdown category')
        axios.get ('http://localhost:3005/category')
        .then ((responce) =>{
            this.setState(()=>({
               categories:responce.data
            }))
        })
    }

  
    render () {
        console.log("form render")
        return (
            <div>
                <h2>Add Notes</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" onSubmit={this.handleSubmit}>
                        <label>
                            Title
                            <input type="text" className="form-control" value={this.state.title} name="title" onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Body
                            <input type="text" className="form-control" value={this.state.body} name="body" onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div class="form-group col-md-4">
      <label >Category</label>
      <select className="form-control" value={this.state.category} onChange={this.handleChange} name="category">
        <option value="">select.</option>
         {this.state.categories.map ((category) =>{
             return <option key ={category._id} value={category._id}>{category.title}</option>
         })}
      </select>
    </div>
                    <input type="Submit" />
                </form>
            </div>
        )
    }
}