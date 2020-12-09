import * as React from 'react';
import nextId from "react-id-generator";

interface IProps {
    btnText: string,
    btnClass: string,
    btnValue:  string,
  }
  interface IState {
  }

  class MakeButton extends React.Component < IProps, IState > {
    htmlId = nextId();
    handleClick(id: string) {
        console.log('id:', id);
        //TO DO open div when clicked
        console.log("Button clicked...")
        this.setState({ message: "Updated Content!"});
      }
     render() { 
       return (
                <button key={this.htmlId} className={this.props.btnClass} value={this.props.btnValue} onClick={() => this.handleClick(this.props.btnValue)}>
                  {this.props.btnText}
                </button>
              );
     }
  }
  export default MakeButton;