export const fetchWrapper = async (url: string, options: RequestInit = {}) => {
  let fetchImplementation = fetch;

  if (process.env.NODE_ENV === 'development') {
    fetchImplementation = require('mocks/fetch-mock');
  }

  const response = await fetchImplementation(`http://mock.mock/api${url}`, options);

  let data;

  try {
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

