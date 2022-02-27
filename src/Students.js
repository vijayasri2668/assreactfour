import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import StudentBack from './StudentBack'

const Students = () => {

  const [data,setData]=useState({
    toggler: true,
  });

  const[myObj]=useState(
    [
      { 
          id:1,
          name:'John',
          age: '26',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:2,
          name:'Doe',
          age: '25',
          course: 'MERN',
          batch: 'November'
      },
      {
          id:3,
          name:'Biden',
          age: '26',
          course: 'MERN',
          batch: 'September'
      },
      {
          id:4,
          name:'John',
          age: '26',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:5,
          name:'Barar',
          age: '22',
          course: 'MERN',
          batch: 'September'
      },
      {
          id:6,
          name:'christ',
          age: '23',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:7,
          name:'Elent',
          age: '24',
          course: 'MERN',
          batch: 'November'
      },
  
  ]
  )

  const [objState,setObjState]=useState({
    id:'',
    name:'',
    age : '',
    course : '',
    batch : '',
  })


const changeHandler=(e)=>{
  setObjState({...objState,[e.target.name]:e.target.value})
}

const submitHandler=(e)=>{
  e.preventDefault()
  var tempObj={
    name:objState.name,
    age:objState.age,
    course:objState.course,
    batch:objState.batch,
  }
  console.log(tempObj);
  tempObj=myObj;
  tempObj.id=myObj.length;
  tempObj=objState;
  myObj.push(tempObj)
  setObjState({id:'',name:'',age:'',course:'',batch:''})
  setData({toggler:!data.toggler})
}

  const toggleFunc=(e)=>{
    setData({toggler:!data.toggler})
    
  }
   
  const editFunc=(e)=>{
    console.log(myObj);
    setData({toggler:!data.toggler})
  }

  return (
    <>
      {data.toggler ?
        <div>
          <div className="header">
            <div className="head">
              Student Details
            </div>
            <div className="head_btn">
              <Link to='/students-desc' ><button className='h_btn' onClick={toggleFunc} >AddNew Student</button></Link>
            </div>
          </div>
          <StudentBack objPass={myObj}  toggleFunc={toggleFunc} editFunc={editFunc} />
        </div>
        : 
        <div className='container'>
          <form onSubmit={toggleFunc} className='form_submit'>
            <input type="text" className='inpt' name='name' onChange={changeHandler} value={objState.name} placeholder='name' />
            <input type="text" className='inpt' name='age' onChange={changeHandler} value={objState.age} placeholder='age' />
            <br /><br />
            <input type="text" className='inpt' name='course' onChange={changeHandler} value={objState.course} placeholder='course' />
            <input type="text" className='inpt' name='batch' onChange={changeHandler} value={objState.batch}  placeholder='batch'/>
            <br /><br />
            <button onClick={toggleFunc} className='simplebtns'>CANCEL</button>
            <button type='submit' onClick={submitHandler} className='form_btn simplebtns' >SUBMIT</button>
          </form>
        </div>
      }
    </>
  )
}

export default Students