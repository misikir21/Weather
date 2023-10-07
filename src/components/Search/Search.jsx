import { useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { setLocation } from '../../redux/form/formSlice';

const Search = ({ brandName }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setLocation(inputValue));
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontWeight: '500', fontSize: '1.5rem' }}>
            {brandName}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#" disabled>
                Search by City Name and Country Code
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={submitHandler}>
              <input
                style={{ width: '100%', border: 'none', padding: '0.5em' }}
                type="search"
                placeholder="London,GB"
                className="me-2"
                aria-label="London,GB"
                onChange={changeHandler}
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Search.propTypes = {
  brandName: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string.isRequired,
  ]),
};

Search.defaultProps = {
  brandName: 'Default Value',
};

export default Search;
