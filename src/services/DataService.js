export class DataService {
    getOrganisers() {
        return fetch('organisers.json').then(function(response) {
            return response.json()
        });
    }
}