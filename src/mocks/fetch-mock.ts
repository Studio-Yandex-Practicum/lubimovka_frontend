import fetchMock from 'fetch-mock';

import settings from 'mocks/data/settings.json';

fetchMock.config.fallbackToNetwork = true;

const mockedFetch = fetchMock.sandbox();

mockedFetch
  .get('http://mock.mock/api/settings', settings)
  .get({
    url: 'http://mock.mock/api/settings',
    name: 'getSettingsProposalDisabled',
    query: {
      mock_proposal_disabled: true,
    }
  }, {
    ...settings,
    proposalDisabled: true,
    foo: 'bar',
  });

module.exports = mockedFetch;
