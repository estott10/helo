const initialState = {
  id: '',
  username: '',
  password: '',
  profile_pic: ''
}

const UPDATE_USERNAME = 'UPDATE _USERNAME';

const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

const UPDATE_PROFILE = 'UPDATE_PROFILE';

const UPDATE_ID = 'UPDATE_ID'

// const UPDATE_USER = 'UPDATE_USER'

export default function reducer( state= initialState, action){
  
    switch (action.type) {
        case UPDATE_USERNAME:
          return Object.assign({}, state , {username: action.payload});
        case UPDATE_PASSWORD:
          return Object.assign({}, state, {password: action.payload});
        case UPDATE_PROFILE:
          return Object.assign({}, state, {profile_pic: action.payload});
        case UPDATE_ID:
          return Object.assign({}, state, {id: action.payload});
        // case UPDATE_USER: 
        //   return Object.assign({}, state, {id: action.payload, username: action.payload, profile_pic: action.payload})
        default: return state;
    }
}

export function updateUsername(username){
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updatePassword(password){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function updateProfile(profile_pic){
    return {
        type: UPDATE_PROFILE,
        payload: profile_pic
    }
}

export function updateId(id){
    return {
        type: UPDATE_ID,
        payload: id
    }
}

// export function updateUser(id, username, profile_pic){
//     return {
//         type: UPDATE_USER,
//         payload: 
//             id,
//             username,
//             profile_pic
        
//     }
// }

