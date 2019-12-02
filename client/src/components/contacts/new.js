import React from 'react'
import ContactForm from '../contacts/form'
import {connect} from 'react-redux'
import {startAddContact} from '../../actions/contacts'

class ContactNew extends React.Component {
    submitHandler=(formData)=>{
        this.props.dispatch(startAddContact(formData,this.props))
    }
    render() {
        return (
            <div>
                <ContactForm submitHandler={this.submitHandler}/>
            </div>
        )
    }
}
export default connect()(ContactNew)