export class DataService {
    getOrganisers() {
        return fetch('data/organisers.json').then(function(response) {
            return response.json()
        });
    }
}