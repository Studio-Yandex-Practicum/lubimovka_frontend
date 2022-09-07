import fetchMock from 'fetch-mock';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

export default mockedFetch;
