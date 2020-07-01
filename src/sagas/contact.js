import {put, takeLatest} from 'redux-saga/effects';
import {
    FIND_CONTACT, FIND_CONTACT_ERROR, FIND_CONTACT_SUCCESS,
    FIND_ALL_CONTACTS, FIND_ALL_CONTACTS_ERROR, FIND_ALL_CONTACTS_SUCCESS,
    POST_CONTACT, POST_CONTACT_ERROR, POST_CONTACT_SUCCESS,
    SAVE_CONTACT, SAVE_CONTACT_ERROR, SAVE_CONTACT_SUCCESS} from '../actions/contact';
import {filteredFetch} from '../utils/apiUtils';

export function* findAllContacts(action) {
    try {
        const data = yield filteredFetch(
          ('https://simple-contact-crud.herokuapp.com/contact')
        );

        yield put({
            type: FIND_ALL_CONTACTS_SUCCESS,
            data: data
        });
        
    } catch (error) {
        yield put({
            type: FIND_ALL_CONTACTS_ERROR,
            error: error
        });
    }
}

export function* findContact(action) {
    try {
        const data = yield filteredFetch(
            ('https://simple-contact-crud.herokuapp.com/contact/'+action.id)
        );

        yield put({
            type: FIND_CONTACT_SUCCESS,  
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_CONTACT_ERROR,
            error: error
        });
    }
}

export function* postContact(action) {
    try {

        var data = yield filteredFetch('https://simple-contact-crud.herokuapp.com/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(action.data)
        }
        );

        yield put({
            type: POST_CONTACT_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: POST_CONTACT_ERROR,
            error: error
        });
    }
}

export function* saveContact(action) {
    try {
        var url = 'https://simple-contact-crud.herokuapp.com/contact/'+ action.data.id;

        const data = yield filteredFetch (url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(action.data)
        }
        );

        yield put({
            type: SAVE_CONTACT_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: SAVE_CONTACT_ERROR,
            error: error
        });
    }
}

export function* watchFindAllContacts() {
    yield takeLatest(FIND_ALL_CONTACTS, findAllContacts)
}
export function* watchFindContact() {
    yield takeLatest(FIND_CONTACT, findContact)
}
export function* watchPostContact() {
    yield takeLatest(POST_CONTACT, postContact)
}
export function* watchSaveContact() {
    yield takeLatest(SAVE_CONTACT, saveContact)
}
