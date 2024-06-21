import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function User() {
  const navigate = useNavigate();

  const { data, isError, error } = useQuery({
    queryKey: ["GET_USER_DATA"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/ground");
      return response.data.data;
    },
  });

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <>
      <button onClick={() => navigate("/user/add")}>
        click here to add new user.
      </button>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ground name</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((i) => (
              <tr key={i?.id}>
                <td>{i?.id}</td>
                <td>{i?.ground_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default User;
