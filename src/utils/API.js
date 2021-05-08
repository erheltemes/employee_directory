import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: async function(query) {
    return await axios.get("https://randomuser.me/api/?results=1000");
  }
};
