import axios from "axios";

const useAxios = () => {
  const jwtToken = localStorage.getItem('jwt');
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    }
  });
  return instance;
}

export default useAxios;
