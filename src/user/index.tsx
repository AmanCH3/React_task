import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function User() {

    const navigate = useNavigate();

    const getData = useQuery({
        queryKey: ["GET_USER_DATA"],
        queryFn() {
            return axios.get("http://localhost:8080/ground")
        },
        select(data) {
            return data?.data?.data
        }
    })

    console.log(getData?.data)

    return (
        <>
            <button onClick={() => navigate("/user/add")}>click here to add new user.</button>
            <table border="1">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Ground name</th>
                </tr>
                </thead>
                <tbody>
                {getData?.data?.map(i=>(
                <tr key={i?.id}>
                    <td>
                        {i?.id}
                    </td>
                    <td>
                        {i?.ground_name}
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default User;