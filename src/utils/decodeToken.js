import jwtDecode from "jwt-decode";

const decodeToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const decode = jwtDecode(accessToken);
  return decode;
};

export default decodeToken;
