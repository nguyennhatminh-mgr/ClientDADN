import {Dimensions} from 'react-native';
export const ID_ADMIN = '123AFFK89HM2';

// export const IP_URL = 'http://10.0.134.191:3000';


export const IP_URL = 'http://192.168.1.102:3000';

// export const IP_URL = 'http://192.168.43.125:3000';

// export const IP_URL = 'http://192.168.43.62:3000';
// export const IP_URL = 'http://52.240.52.68:3000';


//export const IP_URL = 'http://172.20.10.4:3000';


export const LOGIN_URL = '/users/login';
export const USERNAME_EXIST_URL = '/users/usernameexist';
export const LIST_ROOM_NOT_OWNER = '/users/listroomnotowner';
export const SIGNUP_URL = '/users/signup';
export const USER_INFO_URL = '/users/info';
export const VIEW_ROOM_URL = '/viewroom';
export const LIST_ROOM_INFO = '/listroominfo';

export const SET_LIGHT_LEVEL = '/setlightlevel/';
export const GET_CURRENT_LIGHT_LEVEL = '/currentlevel';

export const EDIT_NAME = '/users/editname';
export const CHECK_PASSWORD = '/users/checkpassword';
export const CHANGE_PASSWORD = '/users/changepassword';

//addObj
export const ADD_ROOM_URL = '/addRoom';
export const ADD_DIVICE_URL = '/addDevice';

//viewHistory
export const VIEW_HISTORY_URL = '/viewHistory';
export const VIEW_SENSOR_HISTORY_URL = '/viewSensorHistory';
export const VIEW_LIGHT_HISTORY_URL = '/viewLightHistory';
export const GET_DATA_HISTORY_URL = '/getDataHistory';

// Control device
export const GET_LIST_ROOM_CONTROL = '/listroomcontrol/';
export const GET_LIST_LIGHT = '/listlight/';
export const CONTROL_LIGHT = '/controllight';
export const GET_LIGHT = '/getlight/';
export const screenWidth =  Dimensions.get("window").width;
export const screenHeight =  Dimensions.get("window").height;
