import { watchFindContact, watchFindAllContacts, watchSaveContact, watchPostContact} from './contact';
import {all, fork} from 'redux-saga/effects';

export default function* sagas () {
    yield all([
        fork(watchFindContact),
        fork(watchFindAllContacts),
        fork(watchPostContact),
        fork(watchSaveContact)
    ]);
};