import { Component } from "react";

export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: {
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      addressdetails: [
        {
          street: "Ramnagar",
          city: "Hyderabad",
          state: "Telangana",
          zipcode: "500001",
          country: "India",
        },
      ],
      editIndex:null,
    };
  }
  handleChange = (e) => {
    var newaddress = { ...this.state.address };
    newaddress[e.target.name] = e.target.value;
    this.setState({ address: newaddress });
  };
  addAddress = () => {
    var newaddress = [...this.state.addressdetails];
    newaddress.push(this.state.address);
    this.setState({ addressdetails: newaddress });
    this.clearForm();
  };
  clearForm = () => {
    var presentAddress = {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    };
    this.setState({ address: presentAddress });
  };

  editaddress = (ads,i) => {
    // console.log(ads);
    this.setState({address:ads, editIndex:i})
  };

  deleteaddress = (ads) => {
    // console.log(ads)
    var latestAddress = this.state.addressdetails.filter(
      (myAds) => myAds.city !== ads.city
    );
    this.setState({ addressdetails: latestAddress });
  };

  updateAddress=()=>{
    var presentAddress =[...this.state.addressdetails]
    presentAddress[this.state.editIndex] = this.state.address;
    this.setState({addressdetails:presentAddress,editIndex : null});
    this.clearForm();
  }

  render() {
    return (
      <div>
        <form>
          <label> Street :</label>
          <input
            type="text"
            name="street"
            value={this.state.address.street}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label> City:</label>
          <input
            type="text"
            name="city"
            value={this.state.address.city}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label> State :</label>
          <input
            type="text"
            name="state"
            value={this.state.address.state}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label> Zipcode :</label>
          <input
            type="number"
            name="zipcode"
            value={this.state.address.zipcode}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <label> Country:</label>
          <input
            type="text"
            name="country"
            value={this.state.address.country}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          {this.state.editIndex !== null ?( <button
            type="button"
            className="btn btn-primary"
            onClick={this.updateAddress}
          >
           Update Address
          </button>) : ( <button
            type="button"
            className="btn btn-primary"
            onClick={this.addAddress}
          > Add Address
          </button>)}          
          
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Street </th>
              <th>City </th>
              <th>State </th>
              <th>Zipcode </th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.addressdetails.map((ads, i) => (
              <tr key={i}>
                <td>{ads.street}</td>
                <td>{ads.city}</td>
                <td>{ads.state}</td>
                <td>{ads.zipcode}</td>
                <td>{ads.country}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={() => {this.editaddress(ads,i)}} >
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() =>{this.deleteaddress(ads);}}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
