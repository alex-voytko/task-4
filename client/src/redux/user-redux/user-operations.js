import * as userActions from "./user-actions";
import axios from "axios";
import moment from "moment";

axios.defaults.baseURL = "http://localhost:5000/app";

const fetchUsers = () => dispatch => {
  dispatch(userActions.fetchUserRequest());

  axios
    .get("/users")
    .then(({ data }) => dispatch(userActions.fetchUserSuccess(data)))
    .catch(error => dispatch(userActions.fetchUserError(error.message)));
};

const updateLoginedUser = id => dispatch => {
  dispatch(userActions.updateUserRequest());
  const updateUser = {
    _id: id,
    lastVisit: moment().format("Do of MMMM, HH:mm"),
    isOnline: true,
  };
  axios
    .put("/users", updateUser)
    .then(({ data }) => dispatch(userActions.updateUserSuccess(data)))
    .catch(error => dispatch(userActions.updateUserError(error.message)));
};

export default { fetchUsers, updateLoginedUser };
