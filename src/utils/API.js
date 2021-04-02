import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20";

export default {
  getRandomUsers: function() {
    return axios.get(BASEURL);
  },
  // getUserByLocation: function() {
  //   return axios.get(BASEURL + 'location');
 
};