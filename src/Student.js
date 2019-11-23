import React from 'react'
import axios from 'axios'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
 


export default class Student extends React.Component {

    constructor(props){
        super(props)

        this.state ={
           students:{},
           width: window.innerWidth
        }

    }
    
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }

      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
    componentDidMount (){
        axios.get ('https://api.myjson.com/bins/1dlper')
        .then ( (responce)=>{

         
             this.setState (()=>{

               return{
               students:responce.data}
             })
        })

    }

   
  

    render () {
        const { width } = this.state;
        const isMobile = width <= 500;
       
       
        return (
         
            <div>
                  <div className="row">
                      {Object.keys(this.state.students).map((key)=>{
                          return(
                             
                             <Card className="col-md-4">
                       
                               <CardBody>
                                 <CardTitle>{this.state.students[key].name}</CardTitle>
                                 <CardSubtitle>{this.state.students[key].marks.s1+this.state.students[key].marks.s2+this.state.students[key].marks.s3}</CardSubtitle>
                                 <CardText>{this.state.students[key].rollNo}</CardText>
                                
                                             
                              </CardBody>
                              </Card>
                             
                              
                        
                          )
 
                      })}
                       </div>
                  
                
            </div>
        )

       
                
    }

}