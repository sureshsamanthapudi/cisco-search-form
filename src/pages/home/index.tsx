import * as React from "react";
import { getUser } from "../../actions/home";
interface IHomeProps {}

interface IHomeState {
  name: string;
  users: [];
}
class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      name: "",
      users: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSubmit = async () => {
    console.log("this",this)
    const response = await getUser(this.state.name);
    console.log("response", response);
    this.setState({
      users: response.users
    });
   
  };

  private handleChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  public render() {
    console.log("users", this.state.users);
    return (
      <div style={{ display: "flex", marginTop: 16, flexDirection: "column" }}>
        <span
          style={{
            marginLeft: "16px",
            display: "flex"
          }}
        >
        Name
        </span>

        <input
          style={{
            height: 35,
            width: "25%",
            margin: "5px 16px",
            border: "1px solid #d1c6c6"
          }}
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <div
          style={{
            height: 48,
            width: 160,
            marginLeft: 16,
            backgroundColor: "rgba(0,125,197,1)"
          }}
          onClick={this.handleSubmit}
        >
          <span
            style={{
              height: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff"
            }}
          >
            Submit
          </span>
        </div>

        <table style={{   
          textAlign: "left",
          margin: 16 }}
         >
          {this.state.users.map((user: any, index: number) => {
            return (
              <tr style={{height: 30}}>
                <td style={{borderBottom: "1px solid #ede7e7"}}>{user.Name}</td>
                <td style={{borderBottom: "1px solid #ede7e7"}}>{user.company}</td>
                <td style={{borderBottom: "1px solid #ede7e7"}}>{user.mailid}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

// <div
//           style={{
//             height: 48,
//             width: 160,
//             marginLeft: 16,
//             backgroundColor: "rgba(0,125,197,1)"

//           }}
//           onClick={() => this.handleSubmit()}
//         ></div>
export default Home;
