import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateSelectedContact } from '../redux/contactSlice';

export interface ContactInterface {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
};

interface ContactProps {
  contact: ContactInterface;
  handleRemove: (id: String) => void;
};

// This component rendering contact information to contact list component
function Contact(props: ContactProps) {
  const { id, firstName, lastName, company, email, phoneNumber } = props.contact;
  const dispatch = useDispatch();

  return (
    <tr className="p-6">
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{company}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>
        <Button variant="info" onClick={() => {
          dispatch(updateSelectedContact({ id, firstName, lastName, company, email, phoneNumber }));
        }}>
          <i className="fas fa-edit"></i>
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={() => props.handleRemove(id)}>
          <i className="fas fa-trash"></i>
        </Button>
      </td>
    </tr>
  );
}

export default Contact;