import types from './phonebook-type';
import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: { id: uuidv4(), name, number },
});

const deleteContact = itemId => ({
  type: types.DELETE,
  payload: itemId,
});
const filterContact = value => ({
  type: types.FILTER,
  payload: value,
});
export default { addContact, deleteContact, filterContact };
