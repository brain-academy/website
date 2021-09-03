import React from "react"
import User from "../domain/user"

export const connectedUser: User = undefined
export const setConnectedUser: (user: User) => void = _ => {}
export const ConnectedUserContext = React.createContext({connectedUser, setConnectedUser})
