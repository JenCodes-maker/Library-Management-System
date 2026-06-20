import API from "./api";

export const getMembers = () => API.get("/members");

export const addMember = (memberData) =>
  API.post("/members", memberData);