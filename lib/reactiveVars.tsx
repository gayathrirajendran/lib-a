import { makeVar } from '@apollo/client';

// Define the reactive variable
export const accessTokenVar = makeVar({
  accessToken: '',
  claims: {
    role: '',
    sub: ''
  }
});
