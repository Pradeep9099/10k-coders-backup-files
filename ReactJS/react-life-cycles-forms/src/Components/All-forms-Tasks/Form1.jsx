import { Component } from "react";
import axios from 'axios'
export default class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: {
        id: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      addressInfo:[],
      editIndex:null,
    };
    
  }

 handleChange=(e)=>{
  // console.log (e) 
  let newAddress = {...this.state.address}
  newAddress[e.target.name] = e.target.value;
  this.setState({address: newAddress})
}
addAddress =()=>{
  axios.post("http://localhost:3201/addressInfo/", this.state.address).then(()=>{
    this.getDataFromServer()
    this.clearForm()
  })
};

clearForm=()=>{
  let newform =
      {
        id: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      }
     this.setState({address:newform}) 
  
};

deleteAddress =(adrs)=>{
  axios.delete("http://localhost:3201/addressInfo/"+adrs.id).then(()=>{
    this.getDataFromServer()
  })
}

// deleteAddress =(ads)=>{
//   axios.delete("http://localhost:3201/address"+ads.city).then(()=>{
//     this.getDataFromServer()
//   })
// }

editAddress =(ads,i)=>{
  this.setState({address:ads, editIndex:i})
};

updateAddress=()=>{
  axios.put(("http://localhost:3201/addressInfo/"+this.state.address.id),this.state.address).then(()=>{
    this.setState({editIndex:null})
    this.getDataFromServer();
    this.clearForm( )
  })
}
  render () {
    return (
        <div className="container">
          <h1>Address Details :</h1>
            <form>
                <label>ID : </label>
                <input type="text" className="form-control" name="id" value={this.state.address.id} onChange={(e)=>this.handleChange(e)} disabled/>
                <label> Street : </label>
                <input type="text" className="form-control" name="street" value={this.state.address.street} onChange={(e)=>this.handleChange(e)}/>
                <label>City : </label>
                <input type="text" className="form-control" name="city" value={this.state.address.city} onChange={(e)=>this.handleChange(e)}/>
                <label>State : </label>
                <input type="text" className="form-control" name="state" value={this.state.address.state} onChange={(e)=>this.handleChange(e)}/>
                <label>ZipCode: </label>
                <input type="text" className="form-control" name="zipcode" value={this.state.address.zipcode} onChange={(e)=>this.handleChange(e)}/>
                <label>Country: </label>
                <input type="text" className="form-control" name="country" value={this.state.address.country} onChange={(e)=>this.handleChange(e)}/><br/>
                                           
            </form>
                
            {this.state.editIndex !== null ? (<button type="button" onClick={this.updateAddress} className="btn btn-primary"> Update Address</button>):(<button type="button" onClick={this.addAddress} className="btn btn-primary"> Add Address</button>)}
            <table className="container">
              <thead>
                <tr>
                  <th>ID </th> 
                  <th> Street</th>
                  <th> City</th>
                  <th> State</th>
                  <th> ZipCode</th>
                  <th>Country</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>              
              <tbody>
                  {this.state.addressInfo.map((ads,i)=> <tr key={i}>
                    <td>{ads.id}</td>                
                    <td>{ads.street}</td>                
                    <td>{ads.city}</td>
                    <td>{ads.state}</td>                
                    <td>{ads.zipcode}</td>                
                    <td>{ads.country}</td> 
                    <td>
                    <button type="button" onClick={()=>{this.editAddress(ads, i)}} className="btn btn-warning"> EDIT</button>
                    </td>
                    <td>
                    <button type="button" onClick={()=>{this.deleteAddress(ads)}} className="btn btn-danger"> Delete</button>
                    </td>  
                  </tr>
                  )}
              </tbody>
            </table>
        </div>
    );
  }

  componentDidMount () {
    // axios.get("http://localhost:3201/address").then((res)=>{
    //   console.log(res)
    // })    
    this.getDataFromServer()   
  }
getDataFromServer = async ()=>{
  let response= await axios.get("http://localhost:3201/addressInfo/")
  // console.log(response.data)
  this.setState({addressInfo:response.data})
}

}
