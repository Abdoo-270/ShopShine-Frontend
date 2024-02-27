import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/users/usersSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const UsersList = () => {
  const users = useSelector((state) => state.usersState.users);
  const isLoading = useSelector((state) => state.usersState.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  console.log(users);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-1/2 ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">total users: {users.length}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="flex ">
                    <span className="text-green-600 text-xl mr-2 cursor-pointer">
                      <AiOutlineEdit />
                    </span>

                    <span className="text-red-600 text-xl ml-2 cursor-pointer">
                      <AiOutlineDelete />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UsersList;
