import {User} from "discord.js"
import React from "react"

export const connectedUser: User = undefined
export const setConnectedUser: (user: User) => void = _ => {}
export const ConnectedUserContext = React.createContext({connectedUser, setConnectedUser})
