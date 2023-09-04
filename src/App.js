
import './App.css';

import Header from './Components/Header';
import { useState } from 'react';

function App() {


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
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }


  return (
    <div className="App">
      <Header />
      <div className='d-flex justify-content-around mt-5'>
        <div className="row">
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
            <button onClick={addData} className="btn btn-success mb-3">Add</button>
          </div>
        </div>

      </div>
      <div >
        <table className="table table-success table-striped table-borderless mt-5">
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>

            {
              data.map((element,index) => {
                return (
                  <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.tel}</td>
                    <td><button onClick={()=> removeItem(index)} type="button" className="btn btn-danger">Remove</button></td>
                  </tr>)
              })
            }

          </tbody>
        </table>



      </div>
    </div>
  );
}

export default App;
