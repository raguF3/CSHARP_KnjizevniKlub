export const RoutesNames = {

    HOME: '/',
    DOLAZAK_PREGLED: '/dolasci',
    CLAN_PREGLED: '/clanovi',
    SASTANAK_PREGLED: '/sastanci',
    KNJIGA_PREGLED: '/knjige'

};



const isProduction = true;
export const APP_URL = isProduction ? "https://raguf3-001-site1.ktempurl.com" : "https://localhost:7064";
export const BACKEND_URL = APP_URL + "/api/v1";
