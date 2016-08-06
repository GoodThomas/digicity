import React from 'react'
import Radium from 'radium'

class Card extends React.Component {
  render () {
    let styles={
      root:{
        height:'100px',
        width:'80%',
        margin:'20px auto',
        color:'#333',
        boxShadow: '3px 3px 15px #333',
        display:'block',
        textDecoration: 'none',
        backgroundColor:'rgba(255,255,255,1)',
        ':hover':{
          boxShadow:'3px 3px 20px #222',
          transition: 'box-shadow 0.3s'
        },
      },
      left:{
        height:'100px',
        width:'100px',
        backgroundColor:'rgba(0,0,0,0.5)',
        float: 'left',
        marginRight:'25px',
        color:'#fff',
        fontSize:'30px',
        textAlign:'center',
        lineHeight:'100px'
      },
      title:{
        fontWeight: 'normal',
        marginTop:'18px',
        marginBottom:'0',
      },
      date:{
        marginTop:'3px',
      }
    }
    return(
      <a style={styles.root} href='#'>
        <div style={{display:'table'}}></div>
        <div style={styles.left}>{this.props.index}</div>
        <h2 style={styles.title}>{this.props.title}</h2>
        <p style={styles.date}>{this.props.date}</p>
      </a>
    )
  }
}

export default Radium(Card)
