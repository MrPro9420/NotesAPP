import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, { name, email, tel }]);
        setEmail("");
        setName("");
        setTel("");
    }


    return (
      
            <div className='d-flex justify-content-around mt-5'>
                <div className="row" onsubmit="return false">
                    <div className="col-auto">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="staticName" placeholder="Name" />
                    </div>
                    <div className="col-auto">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="staticEmail2" placeholder="Email" />
                    </div>
                    <div className="col-auto">
                        <input type="tel" value={tel} onChange={(e) => setTel(e.target.value)} className="form-control" id="inputTel" placeholder="Phone. No" />
                    </div>
                    <div className="col-auto">
                        <button onClick={addData} className="btn btn-primary mb-3">Add</button>
                    </div>
                </div>
                
            </div>

       
    )
}

export default Form
