import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './Dashboard.css'
import Header from './Header'

function Dashboard() {
  const[data,setData] = useState([])
  const addActiveUsers = [0]
  const addTotalUsers = [0]

  useEffect(()=>{
    axios('http://https://admin--board.herokuapp.com/fetch')
        .then(response => setData(response.data))
},[])

data.map(data =>{
    addActiveUsers.push(data.activeUsers)
    addTotalUsers.push(data.totalUsers)
})

const sum = addActiveUsers.reduce((a,b) => a+b)
const sum2 = addTotalUsers.reduce((a,b) => a+b)

  return (
    <div className='dashboard'>
      <Header/>
      <Container>
        <div style={{textAlign:"center"}}>
      <h3 className='title'>Overall Program Highlights</h3>
      </div>

      <div className='row dashboard-main-row'>
        <div className='col-sm-4 dashboard-row'>
          <h5>Total Active Users</h5>
          <span>{sum}</span>
        </div>
        <div className='col-sm-4 dashboard-row'>
          <h5>Total Users</h5>
          <span>{sum2}</span>
        </div>
        
      </div>
      </Container>
    </div>
  )
}

export default Dashboard