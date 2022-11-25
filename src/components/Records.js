import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import './Record.css'

function Records() {
    const[data,setData] = useState([])
    const[months,setMonths] = useState('')

    const month = ['Select Month','Jan','Feb','March','April','May','June','July','August','September','Octuber','November','December']

    // Fetching data from MongoDB
    useEffect(()=>{
        axios('https://admin--board.herokuapp.com/fetch')
            .then(response => setData(response.data))
    },[])

    const arrData = []

  data.map(data =>{
    if(data.months == months){
      arrData.push(data)
    }
  })

  if(arrData.length === 0){
    
  }

  return (
    <div className='records'>
        <Container>
        <h1 style={{textAlign:"center"}}>All Records</h1> 

{/* Months Dropdown */}
        <label for="sel1">Select month to filter the record</label>
  <select class="form-control" onChange={e => setMonths(e.target.value)}>
    {
        month.map(data =>{
            return <option>{data}</option>
        })
    }
  </select>
<br/>

            <Table striped bordered hover>
       <thead>
            <tr>
          <th>State Name</th>
          <th>Month - Year</th>
          <th>Active Users</th>
          <th>Total Users</th>
          <th>Resources Used</th>
          <th>Videos Watched</th>
          <th>Teachers</th>
          <th>Assignments</th>
        </tr>
          </thead>
        
      <tbody>
        {
          arrData.map(data =>{
            return(
              <>
              <tr>
          <td>{data.state}</td>
          <td>{data.months} - {data.years}  </td>
          <td>{data.activeUsers}</td>
          <td>{data.totalUsers}</td>
          <td>{data.resources}</td>
          <td>{data.videosWatched}</td>
          <td>{data.teacher}</td>
          <td>{data.assignments}</td>
        </tr>
              </>
            )
          })
        }
      </tbody>
    </Table>

    {
      arrData.length === 0 && <h1>No Record Exists in {months}!!</h1>
    }

        </Container>
    </div>
  )
}

export default Records