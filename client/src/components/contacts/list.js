import React from 'react'
import {Link} from 'react-router-dom'
import image1 from '../../images/user2.png'
import {connect} from 'react-redux'
import {startSetContacts,startSearchContact} from '../../actions/contacts'
import {Card,Button} from 'react-bootstrap'

class Contacts extends React.Component {
    constructor() {
        super()
        this.state={
            search:''
        }
    }
    componentDidMount() {
            this.props.dispatch(startSetContacts())
    }
    handleSearch=(e)=>{
        this.setState({search:e.target.value})
            this.props.dispatch(startSearchContact(e.target.value))         
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2018/09/03/23/56/sea-3652697__340.jpg"+")",backgroundRepeat:"no-repeat",backgroundSize:'cover'}}><br/>
		<div className="container">
                <h1 className="danger text-center">FIND YOUR CONTACT DETAILS</h1>
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                    <Link to="/contacts/new"><Button>Add Contact</Button></Link><br/><br/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                    <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <h3 className="warning text-center">SEARCH HERE</h3>
                    <input type="text" className="form-control"  value={this.state.search} onChange={this.handleSearch} placeholder="enter name/phone number"></input>
                    </div>
                </div>
                
                <br/><br/>
                <div className="row">
                    {this.props.contacts.map(contact=>{
                        return <div className="col-md-4" key={contact._id}>
                            <Card border="primary" style={{backgroundColor:'#FFF1D4'}}>
                    <Card.Header><h3 className="text-center"><img src={image1} height="150px" width="150px" /><br/>
                        {contact.name}</h3></Card.Header>
                    <Card.Body>
                    <Card.Text>
                    <h5>EMAIL:{contact.email}</h5>
                    <h5>MOBILE:{contact.mobile}</h5>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Link to={`contacts/show/${contact._id}`}><Button>SHOW</Button></Link><span> </span> 
                    <Link to={`/contacts/edit/${contact._id}`}><Button>EDIT</Button></Link>
                    </Card.Footer>
                    </Card><br/>
                    </div>
                    })} 
                    </div>  
                    </div>
                </div>
                   </div> 
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        contacts:state.contacts
}
}
export default connect(mapStateToProps)(Contacts)
