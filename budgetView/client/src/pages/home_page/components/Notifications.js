import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Notification extends Component {

  componentDidMount() {
    this.createNotification()
  }

  createNotification = () => {
    const overBudget = [];
    for (let i = 0; i < this.props.categories.length; i++) {
      if (this.props.categories[i].board_type === 'expense') {
        if (this.props.categories[i].current_total > this.props.categories[i].goal) {
          overBudget.push(this.props.categories[i])
        }
      }
    }

    for (var i = 0; i < overBudget.length; i++) {
      NotificationManager.warning(`You have gone over your budgeting goal for ${overBudget[i].name}`, 'Warning',  3000);
    }
  }


  render() {
    return (
      <NotificationContainer />
    )
  }

}

export default Notification;
