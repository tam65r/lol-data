const dataDragonVersion = "13.22.1";

export const urls = {
    championDetails: {
        url: 'https://ddragon.leagueoflegends.com/cdn/'+ dataDragonVersion +'/data/en_US/champion/',
        request: {
            method: 'GET'
        }
    },
    champions: {
        url: 'https://ddragon.leagueoflegends.com/cdn/'+ dataDragonVersion +'/data/en_US/champion.json',
        request: {
            method: 'GET'
        }
    }
}