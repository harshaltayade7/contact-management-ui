import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ContactList from '../components/ContactList';
import { updateContacts, updateSelectedContact } from '../redux/contactSlice';
import ContactForm from '../components/ContactForm';
import { BASE_URL_CONTACT } from '../utils/constants';
import useAxios from '../utils/axiosConfig'

function ContactManagement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axios = useAxios();
  const { contactList, showContactModal, selectedContact } = useSelector((state: any) => state.contacts);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get(`${BASE_URL_CONTACT}/contact/all`)
      .then((response: any) => {
        dispatch(updateContacts(response.data))
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  const handleSave = (modalData: any) => {
    if (isEmpty(modalData.id)) {
      axios.post(`${BASE_URL_CONTACT}/contact`, modalData)
        .then(fetchContacts);
    } else {
      axios.put(`${BASE_URL_CONTACT}/contact`, modalData)
        .then(fetchContacts);
    }
  }

  const handleRemove = (id: String) => {
    axios.delete(`${BASE_URL_CONTACT}/contact?id=${id}`)
      .then(fetchContacts);
  }

  const handleNewContact = () => dispatch(updateSelectedContact({}));

  const handleLogout = () => {
    localStorage.setItem("jwt", '');
    navigate('/login');
  }

  return (
    <div className="container mt-2">
      <h1 className="text-danger">Contact Management</h1>
      <div className="text-end mb-1 m-0 mw-100">
        <Button variant="primary" onClick={handleNewContact}>
          Add New Contact
        </Button>
        <Button style={{ marginLeft: "4px" }} variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      {contactList && contactList.length > 0 && <ContactList contactList={contactList} handleRemove={handleRemove} />}
      <ContactForm show={showContactModal} contact={selectedContact} isEditMode={true} handleClose={() => dispatch(updateSelectedContact(null))} handleSave={handleSave} />
    </div>
  );
}

export default ContactManagement;
