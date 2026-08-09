import React, { useEffect, useState } from "react";
import WebLayout from "../layouts/WebLayout";
import { useParams } from "react-router";
import axios from "axios";
import { USERS_API } from "../utils/apis";

const UserDetails = () => {
  const params = useParams()
  const [user, setUser] = useState([])

  const getUsers = async () => {
    try {
      const response = await axios.get(`${USERS_API}/${params.id}`)
      if (response.data) {
        console.log(response.data)
        setUser(response.data)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <WebLayout>
      <div className="">
        User Details #[{params.id}]
        {user.firstName} &mdash; {user.company?.address?.city}
      </div>
    </WebLayout>
  );
};

export default UserDetails;
