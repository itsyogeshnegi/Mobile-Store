import React from 'react'
import './Form.css'
function Form() {
  return (
    <div className='main_form_div'>
        <div className='lets_find'>Quick Search <p>Let’s Find Your<br/>Smartphones.</p></div>
        <div className='form_part'>
            <input type="text" placeholder='Class'/><br />
            <div className="input_row">
              <input type="dropdown" id='dash' placeholder='Display Size'/>
              <input type="email" id='dash' placeholder='Memory'/>
            </div>
     
            <input type="number" placeholder='Camera'/>
        </div>
        <div className='form__submit'>
            <div className='inner_number'>57</div>
            <button type='reset' title="reset">RESET</button>
            <button type='sumit' title='Find'>FIND</button>
        </div>

    </div>
  )
}

export default Form