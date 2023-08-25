
import Contact, { ContactInterface } from './Contact';
export interface ContactListProps {
  contactList: ContactInterface[];
  handleRemove: (id: String) => void;
}

const tableCols = [
  'First Name', 'Last Name', 'Company', 'Email', 'Mobile', 'Edit', 'Delete'
];

// Contact List
function ContactList(props: ContactListProps) {
  return (
    <div>
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            {
              tableCols.map(col => <th scope="col">{col}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {props.contactList.map((contact, index) => (
            <Contact key={contact.id} handleRemove={props.handleRemove} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
