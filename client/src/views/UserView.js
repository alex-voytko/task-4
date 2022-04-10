import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import userOperations from "../redux/user-redux/user-operations";
import _ from "lodash";

function UserView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [markedItems, setMarkedItems] = useState([]);
  let counter = 1;
  const getItems = useSelector(state => state.users.items);
  const isLogined = useSelector(state => state.auth.loginedUser.token);

  const handleChangeOne = e => {
    const { id, dataset } = e.target;
    setMarkedItems(
      !markedItems.map(el => el._id).includes(id)
        ? [...markedItems, users[dataset.id]]
        : markedItems.filter(el => el._id !== id),
    );
  };
  console.log(markedItems);
  const handleChangeAll = e => {};

  const onDeleteClick = () => {
    dispatch(userOperations.deleteUsers(markedItems.map(el => el._id)));
    const updatedUsers = [...users];
    _.pullAllWith(updatedUsers, markedItems, _.isEqual);
    setMarkedItems([]);
    setUsers([...updatedUsers]);
  };
  useEffect(() => {
    dispatch(userOperations.fetchUsers());
    setUsers([...getItems]);
  }, [dispatch]);

  useEffect(() => {
    if (!isLogined) navigate("/");
  }, [isLogined]);

  return (
    <>
      <>
        <h2 className="mb-4">User List</h2>
        <Button
          variant="dark"
          disabled={!markedItems.length ? true : false}
          type="button"
        >
          Block
        </Button>
        <Button
          variant="danger"
          disabled={!markedItems.length ? true : false}
          type="button"
          onClick={onDeleteClick}
        >
          Delete
        </Button>
      </>

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
                  <input
                    data-id={counter - 1}
                    id={_id}
                    type="checkbox"
                    onChange={handleChangeOne}
                  />
                </td>
                <td>{counter++}</td>
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
