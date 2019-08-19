import React, { Component } from "react";
import { Container } from "reactstrap";
import IncomeTable from "./components/IncomeTable";
import NewIncomeEntry from "./components/NewIncomeEntry";
import axios from "axios";
import Popup from "reactjs-popup";
import { Redirect } from "react-router-dom";
import "./IncomePage.css";

class IncomePage extends Component {
  update() {
    const { id } = this.props.match.params;
    axios
      .get(`https://desolate-badlands-77534.herokuapp.com/api/v1/category/${id}`)
      .then(response => {
        this.setState({
          category: response.data[0],
          entries: response.data[1]
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.update();
  }

  render() {
    if (
      !localStorage.getItem("jwtToken")
    ) {
      return <Redirect to="/login" />;
    }

    return (
      <Container>
        {this.state &&
          this.state.entries && (
            <div className="income-page">
              <h1 className="text-center">{this.state.category.name}</h1>
              <h4 className="text-center mb-4 income-total">
                Total - ${this.state.category.current_total}
              </h4>
              <br />
              <div id="income-buttons">
                <Popup
                  trigger={
                    <button type="button" className="btn btn-outline-primary px-4" id="add-income-entry">
                      Add Entry
                    </button>
                  }
                  modal
                  closeOnDocumentClick
                >
                  {close => (
                    <NewIncomeEntry
                      update={this.update.bind(this)}
                      updateHome={this.props.update}
                      state_category={this.state.category}
                      state_entry={this.state.entry}
                      close={close.bind(this)}
                    />
                  )}
                </Popup>
                <a href="/home" className="btn btn-outline-primary px-4" id="income-go-home">Go Home</a>
              </div>
              <IncomeTable
                entries={this.state.entries}
                id={this.state.category.id}
                update={this.update.bind(this)}
                updateHome={this.props.update}
              />
            </div>
          )}
      </Container>
    );
  }
}

export default IncomePage;
