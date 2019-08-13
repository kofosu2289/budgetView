import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";

class ExpensePage extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3001/api/v1/category/${id}.json`)
         .then(response => {
           console.log("HERE")
           this.setState({
             category: response.data[0],
             entries: response.data[1]
           });
          })
         .catch(error => console.log(error))
         .then(() => {
           console.log('category: ', this.state.category)
           console.log('entries: ', this.state.entries)

         });


  }


  render() {
    return (
      <Container>
        { this.state && this.state.entries &&
          <div>
            <SpendingSummary entries={this.state.entries}/>
            <ExpenseTable entries={this.state.entries} />
          </div>
        }
      </Container>
    );
  }
}

export default ExpensePage;
