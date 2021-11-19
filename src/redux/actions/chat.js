const setInitSoketStore = (payload) => ({
  type: "INIT_SOCKET",
  payload: payload,
});

export const setInitSocket=()=>{
    return (dispatch) => {
        let token = "Bearer " + window.localStorage.getItem("user_Token");
        const ADDRESS = process.env.REACT_APP_API_BE;
        const socket = io(ADDRESS, {
          transports: ["websocket"],
          query: {
            authorization: token.split(" ")[1],
          },
          
    },
    dispatch(setInitSoketStore(socket))
}
}

// gets fired when the main app is rendering for the first time after login: 
// initializes a socket.io client and stores it in the store