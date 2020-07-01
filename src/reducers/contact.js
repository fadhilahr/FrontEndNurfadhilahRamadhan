import {
  FIND_CONTACT, FIND_CONTACT_ERROR, FIND_CONTACT_SUCCESS,
  FIND_ALL_CONTACTS, FIND_ALL_CONTACTS_SUCCESS, FIND_ALL_CONTACTS_ERROR,
  POST_CONTACT, POST_CONTACT_ERROR, POST_CONTACT_SUCCESS,
  SAVE_CONTACT, SAVE_CONTACT_ERROR, SAVE_CONTACT_SUCCESS
} from '../actions/contact';

export function findContact(state = { data: null, loading: false }, action) {
  switch (action.type) {
    case FIND_CONTACT:
      return {
        data: null,
        loading: true,
        error: null
      };
    case FIND_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function findAllContacts(state = { data: [], loading: false }, action) {
  // console.log(state.data);
  // console.log('==================');
  switch (action.type) {
    case FIND_ALL_CONTACTS:
      return {
        data: [],
        loading: true,
        error: null
      };
    case FIND_ALL_CONTACTS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case FIND_ALL_CONTACTS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function saveContact(state = { data: null, loading: false }, action) {
  switch (action.type) {
    case SAVE_CONTACT:
      return {
        data: null,
        loading: true,
        error: null
      };
    case SAVE_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case SAVE_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function postContact(state = { data: null, loading: false }, action) {
  switch (action.type) {
    case POST_CONTACT:
      return {
        data: null,
        loading: true,
        error: null
      };
    case POST_CONTACT_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };
    case POST_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}