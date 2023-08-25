import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { ContactInterface } from './Contact';

interface ContactFormProps {
  show: boolean;
  isEditMode: boolean;
  contact: ContactInterface;
  handleClose: () => void;
  handleSave: Function;
}

// This component handing of new and updation of contact related operations
function ContactForm({ show, contact, handleClose, handleSave }: ContactFormProps) {
  const [modalData, setModalData] = useState(contact);

  useEffect(() => {
    setModalData(contact);
  }, [contact]);

  const updateModalData = (target: String, value: any) => {
    switch (target) {
      case 'firstName': setModalData({ ...modalData, firstName: value });
        break;
      case 'lastName': setModalData({ ...modalData, lastName: value });
        break;
      case 'company': setModalData({ ...modalData, company: value });
        break;
      case 'email': setModalData({ ...modalData, email: value });
        break;
      case 'phoneNumber': setModalData({ ...modalData, phoneNumber: value });
        break;
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSave(modalData);
            handleClose();
          }}>
            <Form.Group className="mb-3" >
              <Form.Label>First Name</Form.Label>
              <Form.Control required type="firstName" maxLength={15} value={modalData?.firstName} onChange={e => updateModalData('firstName', e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" maxLength={40} value={modalData?.lastName} onChange={e => updateModalData('lastName', e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control type="company" maxLength={40} value={modalData?.company} onChange={e => updateModalData('company', e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" maxLength={30} value={modalData?.email} onChange={e => updateModalData('email', e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control required type="phoneNumber" maxLength={10} value={modalData?.phoneNumber} onChange={e => updateModalData('phoneNumber', e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              &nbsp;&nbsp;
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactForm;