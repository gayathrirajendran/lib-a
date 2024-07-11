import { accessTokenVar } from '../reactiveVars';

const updateAccessToken = () => {
  accessTokenVar({
    accessToken: 'newAccessToken',
    claims: {
      role: 'newRole',
      sub: 'newSub'
    }
  });
};

const UpdateButton = () => {
  return <button onClick={updateAccessToken}>Update Access Token</button>;
};

export default UpdateButton;
