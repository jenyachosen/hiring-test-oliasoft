import fetchMock from "jest-fetch-mock";
import oilRigs, {oilRigsLoaded, oilRigsRequested} from './oil-rigs';
import configureStore from '../../configureStore';

fetchMock.enableMocks();

const hello = () => 'hello world test';

describe('employees', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    fetch.resetMocks();
  })

  const oilRigsSlice = () => store.getState().entities.oilRigs;

  /*
    Hello world test
  */

  test('hello world test', () => {
    expect(hello()).toBe('hello world test');
  });

  /*
    Solitary reducer tests
  */

  it('should handle initial state', () => {
    expect(oilRigs(undefined, {})).toEqual({list: [], loading: false})
  });

  it('should set loading when requested', () => {
    expect(oilRigs({list: [], loading: false}, oilRigsRequested()))
      .toEqual({list: [], loading: true})
  });
});
