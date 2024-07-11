import { ReactNode, useState } from "react";
import { accessTokenVar, UserContext } from "./main";
import { useReactiveVar } from "@apollo/client";

export const Component5 = () => {
  // const user = useContext(UserContext);

  // return (
  //   <>
  //     <h1>Component 5 - Lib A</h1>
  //     <h2>{`Hello ${user} again!`}</h2>
  //   </>
  // );
  const user = useReactiveVar(accessTokenVar);

  return <div>Library A: {JSON.stringify(user)}</div>
}


export const Component1 = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}! - Lib A`}</h1>
      <Component5 />
      <button onClick={() => setUser('Jesu')}>Change to Jesu</button>
      {children}
    </UserContext.Provider>
  );
}
