import * as userActions from "./user-actions";
import axios from "axios";
// import moment from "moment";

axios.defaults.baseURL = "http://localhost:5000/app";

const fetchUsers = () => dispatch => {
  dispatch(userActions.fetchUserRequest());

  axios
    .get("/users")
    .then(({ data }) => dispatch(userActions.fetchUserSuccess(data)))
    .catch(error => dispatch(userActions.fetchUserError(error.message)));
};

const updateLoginedUser = updateData => dispatch => {
  dispatch(userActions.updateUserRequest());

  axios
    .put("/users", updateData)
    .then(({ data }) => dispatch(userActions.updateUserSuccess(data)))
    .catch(error => dispatch(userActions.updateUserError(error.message)));
};

const deleteUsers = ids => dispatch => {
  dispatch(userActions.deleteUsersRequest());

  ids.forEach(id => {
    axios
      .delete(`/users/${id}`)
      .then(({ data }) => dispatch(userActions.deleteUsersSuccess(data)))
      .catch(error => dispatch(userActions.deleteUsersError(error.message)));
  });
};

export default { fetchUsers, updateLoginedUser, deleteUsers };
