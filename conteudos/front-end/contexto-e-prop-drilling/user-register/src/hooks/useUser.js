import {useContext} from 'react';

import UserContext from '../contexts/UserContext';

function UseUser () {
    return useContext(UserContext);
}

export default UseUser;