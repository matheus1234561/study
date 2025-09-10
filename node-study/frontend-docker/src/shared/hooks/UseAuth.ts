export const UseAuth =  () => {
    const auth = localStorage.getItem("Token");
    return auth;
}