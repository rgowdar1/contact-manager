import React from 'react'
import ContactForm from '../contacts/form'
import {startEditContact} from '../../actions/contacts'
import {startSingleContact} from '../../actions/singleContact'
import {connect} from 'react-redux'

class ContactEdit extends React.Component {
    
    submitHandler=(formData)=>{
        const id=this.props.match.params.id
        this.props.dispatch(startEditContact(formData,id,this.props))
    }

    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSingleContact(id))
    }

    render() {
        return (
            <div>
                {Object.keys(this.props.contact).length!==0 && <ContactForm contact={this.props.contact} submitHandler={this.submitHandler} />}
            </div>
        )
    }
}

const mapStateToProps=(state,props)=> {
    return {
        contact:state.singleContact
    }
}

export default connect(mapStateToProps)(ContactEdit)