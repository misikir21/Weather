import { setLocation } from '../redux/form/formSlice';

test('should create an action to set location', () => {
  const locationData = [{ location: 'London,GB' }];
  const expectedAction = {
    type: 'search/setLocation',
    payload: locationData,
  };
  expect(setLocation(locationData)).toEqual(expectedAction);
});
