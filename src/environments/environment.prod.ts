const location = window.location
export const environment = {
  production: true,
  apiUrl: `${location.protocol}//${location.hostname}:${location.port}/api`,
};
