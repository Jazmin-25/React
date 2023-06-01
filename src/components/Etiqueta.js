import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Etiqueta extends Component{
    render(){
        return (
            <div>
            <Alert key="dark" varant="dark">
                Etiqueta de alerta desde Bootstrap para REACT
            </Alert>
            <Alert key="success" varant="success">
                Etiqueta de alerta desde Bootstrap para REACT
            </Alert>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </div>
        );
    }//render

}//class etiqueta


export default Etiqueta;