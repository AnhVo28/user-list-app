import React from 'react'
import { connect } from 'react-redux';
import User from './User'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const ListUsers =(props)=> {

    const List = props.users.map((user, i)=>
    <User user={user} key={i} index={i} />
  )

    return <ReactCSSTransitionGroup  transitionName="example"
          component='ul'
          transitionName='slide'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}>{List}</ReactCSSTransitionGroup>
}

const mapStateToProps =(state)=>{
  return {
    users: state.users
  }
}

export default connect (mapStateToProps)(ListUsers);
