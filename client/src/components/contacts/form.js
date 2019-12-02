import React from 'react'
import {Form,Button,Card} from 'react-bootstrap'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:props.contact ? props.contact.name :'',
            email:props.contact ? props.contact.email :'',
            mobile:props.contact ? props.contact.mobile :'',
            category:props.contact ? props.contact.category :'',
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            category:this.state.category
        }
        this.props.submitHandler(formData)
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2018/09/03/23/56/sea-3652697__340.jpg"+")",height:'600'}}><br/>
                <div className="row">
                 <div  className="col-md-4 offset-md-4">
                 <Card style={{background:'#BE9D96'}} className="shadow p-3 mb-5 rounded">
                <h1 className="text-center">CUSTOMER FORM</h1>
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicName">
                <Form.Label>Enter Name</Form.Label>
                 <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange} required placeholder="Enter Contact Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChange} required placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Mobile</Form.Label>
                 <Form.Control type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange} required placeholder="Enter Mobile No" />
                </Form.Group>
                <Form.Group controlId="formbasiccategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" value={this.state.category} name="category" onChange={this.handleChange}>
                            <option>SELECT HERE</option>
                            <option value="home">HOME</option>
                            <option value="work">WORK</option>
                    </Form.Control>
                </Form.Group><br/>
                <div className="text-center"><Button variant="secondary" size="lg" block  type="submit">
                    Submit
                </Button></div>
                </Form>
                </Card>
                    </div>
                </div>
            </div>
        )
    }
}