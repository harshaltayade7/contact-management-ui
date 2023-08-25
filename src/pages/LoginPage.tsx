import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { BASE_URL_USER } from '../utils/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isEqual } from 'lodash';


function LoginPage() {
  const navigate = useNavigate();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, showError] = useState(false);

  const handleLogin = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      axios.post(`${BASE_URL_USER}/user/login`, { username, password })
        .then((result: any) => {
          if (isEqual("login unsuccessful", result.data)) {
            navigate('/login')
            localStorage.setItem('jwt', '')
            showError(true);
          } else {
            localStorage.setItem('jwt', result.data)
            navigate('/contact-management')
          }
        })
    }
  };

  return <div className="container mt-2">
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-3">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group >
              <Form.Label>User name</Form.Label>
              <Form.Control
                required
                maxLength={20}
                type="username"
                value={username}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                maxLength={20}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <Form.Group>
              <Form.Text>
                Login Unsuccessful!
              </Form.Text>
            </Form.Group>}
            <Form.Group className="mt-3">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
}

export default LoginPage;