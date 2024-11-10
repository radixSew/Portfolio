import React from 'react'
import "../css/contact.css";

const contact = () => {
  return (
    <div className='contactContainor'>
        <div className="contactTopic">
            <h1 className="contactTo">Get in touch</h1>
        </div>
        <form className='contactForm'>
            <table className="contactDetails">
                <tr className="contactDe">
                    <td>
                        <input type="text" id="name" className="inputDet" name="name" placeholder="Name" />
                    </td>
                </tr>
                <tr className="contactDe">
                <td>
                        <input type="text" className="inputDet" name='email' placeholder='Email'/>
                    </td>
                </tr>
                <tr className="contactDe">
                <td>
                        <textarea id="message" className="inputDet inputDetC" name="message" placeholder="Message"></textarea>
                    </td>
                </tr>
                <button className="conSubmit">send</button>
            </table>
        </form>
    </div>
  )
}

export default contact