import {io} from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL

export const socket = io(SOCKET_URL, { autoConnect: false})

  