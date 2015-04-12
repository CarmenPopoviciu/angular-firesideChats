export class DataService {
    getSpeakers() {
        return fetch('data/speakers.json').then(function(response) {
            return response.json()
        });
    }

    getOrganisers() {
        return fetch('data/organisers.json').then(function(response) {
            return response.json()
        });
    }
}