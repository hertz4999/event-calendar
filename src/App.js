import React, { Component } from "react";
import { Button, Calendar, Row, Col, List, Avatar } from "antd";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
      selectedValue: "",
    };
  }
  componentDidMount() {
    var data = [
      {
        date: moment("2020-08-02").toObject(),
        events: [
          {
            title: "THURSDAY TURNDOWN WITH COACH MINI",
            time: "7 am",
            desc: "With Mr. abc",
            price: "Rs 500",
          },
          {
            title: "MORNING FLOW-SUN SALUTE",
            time: "9 am",
            desc: "With Mr. xyz",
            price: "Rs 500",
          },
        ],
      },
      {
        date: moment("2020-07-31").toObject(),
        events: [
          {
            title: "FRIDAY TURNDOWN WITH COACH",
            time: "8 am",
            desc: "With Mr John Doe",
            price: "Rs 500",
          },
          {
            title: "MORNING FLOW-SUN SALUTE",
            time: "10 am",
            desc: "With Mr. xyz",
            price: "Rs 500",
          },
        ],
      },
      {
        date: moment("2020-08-05").toObject(),
        events: [
          {
            title: "WEDNESDAY TURNDOWN WITH COACH",
            time: "7 am",
            desc: "With Ms Jane Doe",
            price: "Rs 1000",
          },
          {
            title: "NEW ACTIVITY FOR TODAY",
            time: "9 am",
            desc: "With Mr. xyz",
            price: "Rs 400",
          },
        ],
      },
    ];
    this.setState({
      data: data,
      value: moment("2020-07-31").toObject(),
      selectedValue: moment("2020-07-31").toObject(),
    });
  }
  dateCellRender = (value) => {
    var chk = value.toObject();
    this.state.data.forEach((mon) => {
      if (
        mon.date.year == chk.year &&
        mon.date.month == chk.month &&
        mon.date.day == chk.day
      ) {
        return (
          <ul className="events">
            <li key="0">EVENTS AVAILABLE</li>
          </ul>
        );
      }
    });
  };
  onSelect = (value) => {
    var nState = { ...this.state };
    nState.value = value.toObject();
    nState.selectedValue = value.toObject();
    this.setState(nState);
    console.log(value);
  };

  onPanelChange = (value) => {
    var nState = { ...this.state };
    nState.value = value.toObject();
    this.setState(nState);
  };
  render() {
    var { data, selectedValue } = this.state;
    var index = -1;
    data.forEach((val, i) => {
      if (
        val.date.year == selectedValue.year &&
        val.date.month == selectedValue.month &&
        val.date.day == selectedValue.day
      ) {
        index = i;
      }
    });
    var listItems;
    if (index == -1) {
      listItems = [
        { title: "NO EVENTS AVAILABLE", time: "----", desc: "-----------" },
      ];
    } else {
      listItems = this.state.data[index].events;
    }
    console.log(this.state);
    return (
      <div className="App">
        <Row>
          <h1>EVENT CALENDAR</h1>
        </Row>
        <Row>
          <Col span={12}>
            <List
              style={{ marginTop: 100, marginRight: 10 }}
              size="large"
              itemLayout="horizontal"
              dataSource={listItems}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      style={{ fontSize: 20, paddingBottom: 40 }}
                      size="large"
                      type="primary"
                      shape="round"
                    >
                      Register
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#7dc0ff",
                          fontSize: 27,
                        }}
                        size={100}
                      >
                        {" "}
                        {item.time}
                      </Avatar>
                    }
                    title={
                      <a style={{ fontSize: 28 }} href="https://ant.design">
                        {item.title}
                      </a>
                    }
                    description={
                      <span>
                        <span style={{ fontSize: 20 }}>{item.desc}</span>
                        <span
                          style={{
                            fontSize: 20,
                            color: "#89da75",
                            float: "right",
                            backgroundColor: "#f6ffed",
                            border: "2px solid #b7eb8f",
                          }}
                        >
                          {item.price}
                        </span>
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
            <Calendar
              dateCellRender={this.dateCellRender}
              onSelect={this.onSelect}
              onPanelChange={this.onPanelChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
