import React, { Component } from "react";
import "./IncomeBoard.css";
import NewIncomeModal from "./NewIncomeModal";
import Popup from "reactjs-popup";

class IncomeBoard extends Component {
  render() {
    return (
      <div className="income-board col-md-3 py-4 text-center">
        <h4 className="py-3">Income Boards</h4>

          <div className="card my-2 mx-auto">
            <div className="card-body">
              <h5 className="card-title">Cashier</h5>
              <h6 className="card-subtitle mb-2 text-muted">Costco - $21/hr</h6>
            </div>
          </div>
          <div className="card my-2 mx-auto">
            <div className="card-body">
              <h5 className="card-title">Dog Walker</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Pup Walker Service - $11/hr
              </h6>
            </div>
          </div>
          <div className="card my-2 mx-auto">
            <div className="card-body">
              <h5 className="card-title">Gift</h5>
              <h6 className="card-subtitle mb-2 text-muted">From Dad - $250</h6>
            </div>
          </div>
          <div className="card my-2 mx-auto">
            <div className="card-body">
              <h5 className="card-title">Other</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Random money - $84
              </h6>
            </div>
          </div>
          
        <Popup
          trigger={
            <button type="button" className="btn btn-lg income-btn">
              Add Income Source
            </button>
          }
          modal
          closeOnDocumentClick
        >
          <NewIncomeModal />
        </Popup>
      </div>
    );
  }
}

export default IncomeBoard;
