import axios from "axios";
import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response, addUser) => {
  const decoded = jwt_decode(response.credential);
  console.log(decoded);

  const { name, picture, sub } = decoded;

  const doc = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  return doc;
};
