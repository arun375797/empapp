import React from 'react'
import '../empform.css'
const Empform = () => {
  return (
    <div>
   
    <div className="login-box">
  <h2>Form</h2>
  <form>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Designation</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Location</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Salary</label>
    </div>
    <a href="submit">
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
</div>




    </div>
  )
}

export default Empform