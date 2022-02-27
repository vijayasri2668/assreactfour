import React from 'react'

const StudentBack = ({objPass,toggleFunc,editFunc}) => {
    // console.log(objPass);
    // console.log(toggleFunc);
  return (
    <>
        <div className="table">
                    <div className="box">
                        <div className='for_name mat_left' >Name</div>
                        <div className='for_age for_margin'>Age</div>
                        <div className='for_course for_margin'>Course</div>
                        <div className='for_batch for_margin'>Batch</div>
                        <span>Change</span>
                    </div>
              {objPass.map((ele,index)=>{
                return(
                    <div className="box" key={ele.id}>
                        <div className='for_name' >{ele.name}</div>
                        <div className='for_age for_margin'>{ele.age}</div>
                        <div className='for_course for_margin'>{ele.course}</div>
                        <div className='for_batch for_margin'>{ele.batch}</div>
                        <a href="Students#" onClick={editFunc}>Edit</a>
                    </div>
                )
              })}
        </div>
    </>
  )
}

export default StudentBack