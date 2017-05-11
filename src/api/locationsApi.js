const mockData = [
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
  ];

class LocationsApi {
  static getNearbyLocations(address) {
    //return new Promise((resolve, reject) => {
      let url = 'http://localhost:3300/v1/locations?address=' + address;
      return fetch(url).then(response => {
        return response.text().then((json) => {
          debugger;
          try {
            if(response.ok) {
              if(json) {
                let r = JSON.parse(json);
                if(response.headers.has('X-Total-Count')) {
                  r = {
                    total: Number(response.headers.get('X-Total-Count')),
                    items: r
                  };
                }
                return r;
              }
            } else {
              return {_error: json || `Failed with status code ${response.status}`};
            }
          } catch(err) {
            return {_error: `Failed with status code ${response.status}`};
          }
        });
        //return Object.assign([], response.locations);
      });
    //});
  }
}

export default LocationsApi;