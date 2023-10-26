import { League } from "../../app/interfaces/public-api";

export class Leagues {
    static data: League[] = [
        {
            id: 39,
            name: 'Premier League',
            country: 'England',
            flag: 'https://media-4.api-sports.io/flags/gb.svg'
        },
        {
            id: 140,
            name: 'La Liga',
            country: 'Spain',
            flag: 'https://media-4.api-sports.io/flags/es.svg'
        },
        {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            flag: 'https://media-4.api-sports.io/flags/fr.svg'
        },
        {
            id: 78,
            name: 'Bundesliga',
            country: 'Germany',
            flag: 'https://media-4.api-sports.io/flags/de.svg'
        },
        {
            id: 135,
            name: 'Serie A',
            country: 'Italy',
            flag: 'https://media-4.api-sports.io/flags/it.svg'
        },
    ]
}