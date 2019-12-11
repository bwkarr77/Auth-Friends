import { axiosWithAuth } from "../components/axiosWithAuth";

export const GetFriendsStart = "GetFriendsStart";
export const GetFriendsSuccess = "GetFriendsSuccess";
export const GetFriendsFail = "GetFriendsFail";
export const LoginStart = "LoginStart";
export const LoginSuccess = "LoginSuccess";
export const LoginFail = "LoginFail";

export const HandleChange = "HandleChange";
export const c1 = "c1";
export const c2 = "c2";

const apiBase = "http://localhost:5000/api";
const apiLogin = `${apiBase}/login`;
const apiFriends = `${apiBase}/friends`;

const testInfo = {
  testName: "Lambda School",
  testPass: "i<3Lambd4",
  testKey:
    "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ"
};

export const getFriends = () => dispatch => {
  dispatch({ type: GetFriendsStart });
  axiosWithAuth()
    .get(apiFriends)
    .then(res => dispatch({ type: GetFriendsSuccess, payload: res.data }))
    .catch(err => {
      return dispatch({ type: GetFriendsFail, payload: err });
    });
};

export const login = (event, credentials) => dispatch => {
  event.preventDefault();
  dispatch({ type: LoginStart });
  axiosWithAuth()
    .post(apiLogin, credentials)
    .then(res => dispatch({ type: LoginSuccess, payload: res.data.payload }))
    .catch(err => {
      console.log("actions.jsx > login > axiosWithAuth.post err: ", err);
      return dispatch({ type: LoginFail, payload: err });
    });
};

export const handleChange = (event, formType) => ({
  type: HandleChange,
  payload: { event: event, form: formType }
});
