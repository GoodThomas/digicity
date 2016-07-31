import React from 'react'

import Drawer from './Drawer'
import Search from './Search'

class Header extends React.Component {
  onChildChanged(value){
    this.props.callBackParent(value)
  }
  render () {
    let styles={
      root:{
        height:'300px',
        backgroundColor:'#00BCD4'
      },
      title:{
        color:'#fff',
        fontSize:'52px',
        textAlign:'center',
        fontWeight:'normal',
        marginBottom:'20px'
      }
    }
    return(
      <div style={styles.root}>
        <Drawer/>
        <h3 style={styles.title}>ALL</h3>
        <Search name='search' callBackParent={this.onChildChanged.bind(this)}/>
      </div>
    )
  }
}

export default Header
