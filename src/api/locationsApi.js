const mockData = {
  locations: [
    {
      name: 'Which Wich',
      lat: '0',
      long: '0',
      distance: '0.3km'
    },
    {
      name: 'Mojo\'s',
      lat: '0',
      long: '0',
      distance: '1.3km'
    },
    {
      name: 'Cypress St. P&P',
      lat: '0',
      long: '0',
      distance: '2.5km'
    }
  ]
};

class LocationsApi {
  static getNearbyLocations() {
    return new Promise((resolve, reject) => {
      return resolve(mockData);
    });
  }
}

export default LocationsApi;