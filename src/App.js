import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import React, { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
Amplify.configure(
  aws_exports,
  (Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: "XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab",
    // REQUIRED - Amazon Cognito Region
    region: "XX-XXXX-X",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "XX-XXXX-X_abcd1234",
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: "XX-XXXX-X_abcd1234"
  })
);

class App extends Component {
  render() {
    return (
      <>
        <Header as="h1">Hello World!</Header>
      </>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
