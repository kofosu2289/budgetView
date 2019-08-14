import React, { Component } from "react";
import axios from 'axios';


class NewIncomeEntry extends Component {

handleClick(){
  const name = this.refs.name.value;
  const amount = this.refs.amount.value;
  const description = this.refs.description.value;
  const date = this.refs.date.value;
  const category_id = this.props.state_category.id


  axios.post(
      'http://localhost:3001/api/v1/entry',
      { entry:
        {
          name: name,
          amount: amount,
          description: description,
          date: date,
          category_id: category_id
        }
      }
    )
    .then(response => {
      this.props.update()
    })
    .catch(error => console.log(error))
  

}

  render() {
    console.log(this.props.state_category)
    return (
      <div>

       <input ref='name' placeholder='Title' />
       <input ref='amount' placeholder='Amount' />
       <input ref='description' placeholder='Decription' />
       <input ref='date' placeholder='Date' />



        <button onClick={this.handleClick.bind(this)}>Submit</button>

     </div>
)
  }
}

export default NewIncomeEntry;