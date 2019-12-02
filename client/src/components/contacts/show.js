import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startDeleteContact} from '../../actions/contacts'
import {startSingleContact} from '../../actions/singleContact'
import {Card,Button} from 'react-bootstrap'

class ContactShow extends React.Component {
    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSingleContact(id))
    }
    deleteHandler=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startDeleteContact(id,this.props))
    }
    render() {
        return (
            <div style={{backgroundColor:'#FFF8C7',height:'600px'}}><br/><br/>
                <div className="row">
                   <div className="col-md-3 offset-md-1">
                   <Link to="#" onClick={()=>{
                    this.props.history.push('/contacts')
                }}><Button>BACK</Button></Link>
                   </div>
               </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                <Card border="primary" style={{backgroundColor:'#FFF1D4'}}>
                    <Card.Header><h3 className="text-center">{this.props.contact && this.props.contact.name}</h3></Card.Header>
                    <Card.Body>
                    <Card.Text className="text-center">
                    <h5>ID:{this.props.contact && this.props.contact._id}</h5>
                    <h5>EMAIL:{this.props.contact && this.props.contact.email}</h5>
                    <h5>MOBILE:{this.props.contact && this.props.contact.mobile}</h5>
                    <h5>CATEGORY:{this.props.contact && this.props.contact.category}</h5>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                   <div className="text-center"><Button onClick={()=>{
                                this.deleteHandler()
                            }}>DELETE</Button></div> 
                    </Card.Footer>
                    </Card>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        contact:state.singleContact
    }
}

export default connect(mapStateToProps)(ContactShow)