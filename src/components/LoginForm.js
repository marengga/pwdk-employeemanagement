import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'

export class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="username@mail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="**********"
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(null, { emailChanged })(LoginForm)
