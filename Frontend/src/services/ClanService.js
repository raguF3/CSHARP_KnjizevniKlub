import { HttpService } from "./HttpService";

async function get() {
    try {
        const odgovor = await HttpService.get('/Clan'); 
        return odgovor.data;
    } catch (e) {
        console.error(e);
        return null; 
    }
}

async function getBySifra(sifra) {
    return await HttpService.get('/Clan/' + sifra)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: 'Ne postoji član!' };
        });
}

async function dodaj(clan) {
    return await HttpService.post('/Clan', clan) 
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch((e) => {
            switch (e.status) {
                case 400:
                    let poruke = '';
                    for (const kljuc in e.response.data.errors) {
                        poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                    }
                    return { greska: true, poruka: poruke };
                default:
                    return { greska: true, poruka: 'Član se ne može dodati!' };
            }
        });
}


async function promjena(sifra, clan) {
    return await HttpService.put('/Clan/' + sifra, clan)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch((e) => {
            console.error(e);
            return { greska: true, poruka: 'Član se ne može promijeniti!' };
        });
}

async function obrisi(clan) {
    return await HttpService.delete(`/Clan`, { data: { ime: clan.ime, prezime: clan.prezime, email: clan.email } })
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: 'Član se ne može obrisati!' };
        });
}


export default {
    get,
    getBySifra,
    dodaj,
    promjena,
    obrisi
};
