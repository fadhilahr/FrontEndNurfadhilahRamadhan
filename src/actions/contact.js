export const FIND_CONTACT = "FIND_CONTACT";
export const FIND_CONTACT_SUCCESS = "FIND_CONTACT_SUCCESS";
export const FIND_CONTACT_ERROR = "FIND_CONTACT_ERROR";

export const FIND_ALL_CONTACTS = "FIND_ALL_CONTACTS";
export const FIND_ALL_CONTACTS_SUCCESS = "FIND_ALL_CONTACTS_SUCCESS";
export const FIND_ALL_CONTACTS_ERROR = "FIND_ALL_CONTACTS_ERROR";

export const SAVE_CONTACT = "SAVE_CONTACT";
export const SAVE_CONTACT_SUCCESS = "SAVE_CONTACT_SUCCESS";
export const SAVE_CONTACT_ERROR = "SAVE_CONTACT_ERROR";

export const POST_CONTACT = "POST_CONTACT";
export const POST_CONTACT_SUCCESS = "POST_CONTACT_SUCCESS";
export const POST_CONTACT_ERROR = "POST_CONTACT_ERROR";

export function findContact(id) {
    return {
        type: FIND_CONTACT,
        id: id
    }
}

export function findAllContacts() {
    return {
        type: FIND_ALL_CONTACTS
    };
}

export function postContact(data) {
    return {
        type: POST_CONTACT,
        data: data
    };
}

export function saveContact(id, data) {
    return {
        type: SAVE_CONTACT,
        id: id,
        data: data
    };
}