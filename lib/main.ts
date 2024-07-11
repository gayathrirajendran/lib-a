import { createContext } from "react";
import { Component1, Component5 } from "./SomeComponent";
import { accessTokenVar } from "./reactiveVars";
import UpdateButton from "./components/UpdateButton";
export function helloAnything(thing: string): string {
    return `Hello ${thing}!`
}

export const UserContext = createContext("Anjaneya");

export { Component1, Component5, UpdateButton, accessTokenVar };