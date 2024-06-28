export const host = `https://ircsbackend.onrender.com`;
//export const host = `http://127.0.0.1:4000`;
export const postProjects = `${host}/authenticateRoute/postProjects`;
export const getAllProjects = `${host}/projects/getAllProjects`;
export const getSelectedProject = (id) =>`${host}/projects/getSelectedProjects/${id}`;
export const postDonators = `${host}/donators/postDonator`;
export const donDetails = `${host}/donators/donatorDetails`;
export const DeleteProject = (id) =>`${host}/authenticateRoute/deleteProjects/${id}`;
export const authorizeUser = `${host}/authorizationRoute/AuthProcedure`;
export const checkNonExpToken = (token)=>`${host}/authorizationRoute/CheckValidity/${token}`;
export const SearchedDonatorDeets = (value) => `${host}/donators/SearchedDonator/${value}`;