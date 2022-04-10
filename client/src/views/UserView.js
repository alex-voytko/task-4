import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import userOperations from "../redux/user-redux/user-operations";

function UserView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  let i = 1;
  const getItems = useSelector(state => state.users.items);
  const isLogined = useSelector(state => state.auth.loginedUser.token);

  const handleChangeOne = e => {
    console.log(e.target);
  };

  const handleChangeAll = e => {};
  console.log(users);
  useEffect(() => {
    dispatch(userOperations.fetchUsers());
    setUsers([...getItems]);
  }, [dispatch]);

  useEffect(() => {
    if (!isLogined) navigate("/");
  }, [isLogined]);

  return (
    <>
      <h2 className="mb-4">User List</h2>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleChangeAll} />
            </th>
            <th>#</th>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Sign Up Date</th>
            <th>Last Visit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            ({ _id, name, email, signUpDate, lastVisit, isOnline }) => (
              <tr key={_id}>
                <td>
                  <input id={_id} type="checkbox" onChange={handleChangeOne} />
                </td>
                <td>{i++}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{signUpDate}</td>
                <td>{lastVisit}</td>
                <td className={`status-${isOnline ? `online` : `offline`}`}>
                  {isOnline ? "Online" : "Offline"}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </>
  );
}

export default UserView;
