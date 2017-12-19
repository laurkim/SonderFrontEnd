import React, { Component } from 'react';
import { Input, Icon, Form } from 'semantic-ui-react';

class PersonalityInput extends Component {
  constructor() {
    super()

    this.state = {
      personalityInput: ''
    }
  }

  // handleSubmit = event => {
  //   console.log("input button clicked");
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div align='center'>
        {/* <Input
          action={<Icon name='search' inverted circular link onClick={event => this.handleSubmit(event)}/>}
          placeholder='Your thoughts here'
        /> */}
        <Form>
          <Form.TextArea placeholder='Write your thoughts here...' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PersonalityInput;
//
// class FormExampleSubcomponentControl extends Component {
//   state = {}
//
//   handleChange = (e, { value }) => this.setState({ value })
//
//   render() {
//     const { value } = this.state
//     return (
//       <Form>
//         <Form.Group widths='equal'>
//           <Form.Input label='First name' placeholder='First name' />
//           <Form.Input label='Last name' placeholder='Last name' />
//           <Form.Select label='Gender' options={options} placeholder='Gender' />
//         </Form.Group>
//         <Form.Group inline>
//           <label>Size</label>
//           <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
//           <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
//           <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
//         </Form.Group>
//         <Form.TextArea label='About' placeholder='Tell us more about you...' />
//         <Form.Checkbox label='I agree to the Terms and Conditions' />
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     )
//   }
// }
//
// export default FormExampleSubcomponentControl
