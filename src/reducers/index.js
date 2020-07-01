import {combineReducers} from 'redux';
import { findAllContacts, findContact, saveContact, postContact } from './contact';

const allReducers= combineReducers({
  contact: findContact,
  contacts: findAllContacts,
  postContact,
  saveContact
});
export default allReducers;