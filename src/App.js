import React, { Component } from "react";
import {
  Badge,
  Button,
  Calendar,
  Divider,
  Input,
  Layout,
  Modal,
  Row,
  Col,
  List,
  Avatar,
} from "antd";
import { CalendarTwoTone, MailOutlined, UserOutlined } from "@ant-design/icons";
import moment from "moment";

const { Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
      selectedValue: "",
      visible: false,
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
        date: moment("2020-07-02").toObject(),
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
        date: moment("2020-07-15").toObject(),
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
        date: moment("2020-08-21").toObject(),
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
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  dateCellRender = (value) => {
    var chk = value.toObject();
    var flag = 0;
    this.state.data.forEach((mon) => {
      if (
        mon.date.years === chk.years &&
        mon.date.months === chk.months &&
        mon.date.date === chk.date
      ) {
        flag = 1;
      }
    });
    if (flag === 1) {
      return <Badge status="success" text="EVENTS AVAILABLE" />;
    }
  };
  onSelect = (value) => {
    this.setState({
      value: value.toObject(),
      selectedValue: value.toObject(),
    });
  };

  onPanelChange = (value) => {
    this.setState({ value: value.toObject() });
  };
  render() {
    var { data, selectedValue } = this.state;
    var index = -1;
    data.forEach((val, i) => {
      if (
        val.date.years === selectedValue.years &&
        val.date.months === selectedValue.months &&
        val.date.date === selectedValue.date
      ) {
        index = i;
      }
    });
    var listItems;
    if (index === -1) {
      listItems = [
        {
          title: "NO EVENTS AVAILABLE",
          time: "----",
          desc: "-----------",
          price: "----",
        },
      ];
    } else {
      listItems = this.state.data[index].events;
    }

    return (
      <div
        className="App"
        style={{ backgroundColor: "#f0f2f5", height: "100%" }}
      >
        <Row>
          <h1
            style={{ marginTop: "1%", marginRight: "40%", marginLeft: "42%" }}
          >
            <CalendarTwoTone /> EVENT CALENDAR
          </h1>
          <Divider>WELCOME</Divider>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ffffff",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Calendar
                dateCellRender={this.dateCellRender}
                onSelect={this.onSelect}
                onPanelChange={this.onPanelChange}
              />
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <List
              // style={{ marginTop: "18%", marginRight: "15%", marginLeft: "8%" }}
              header={<div>EVENTS OF THE DAY</div>}
              size="large"
              itemLayout="horizontal"
              dataSource={listItems}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <div>
                      <Button
                        style={{ fontSize: 20, paddingBottom: 40 }}
                        size="large"
                        type={index === -1 ? "" : "primary"}
                        shape="round"
                        onClick={this.showModal}
                      >
                        Register
                      </Button>{" "}
                      <Modal
                        title="Register"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                      >
                        <Input
                          size="large"
                          placeholder="Name"
                          prefix={<UserOutlined />}
                        />
                        <br />
                        <br />
                        <Input
                          size="large"
                          placeholder="Email"
                          prefix={<MailOutlined />}
                        />
                      </Modal>
                    </div>,
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
                        size={80}
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
                            borderRadius: "8px",
                            padding: "3px",
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
          <Col span={4}></Col>
        </Row>
        <Footer style={{ textAlign: "center" }}>
          Created by Lovedeep Singh Sidhu
        </Footer>
      </div>
    );
  }
}

export default App;
