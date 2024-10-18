import { HttpService } from "./HttpService";

async function get() {
    try {
        const odgovor = await HttpService.get('/Knjiga');
        return odgovor.data;
    } catch (e) {
        console.error(e);
        return null;
    }
}

async function getBySifra(sifra) {
    return await HttpService.get('/Knjiga/' + sifra)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data }; 
        })
        .catch(() => {
            return { greska: true, poruka: 'Ne postoji knjiga!' }; 
        });
}

async function dodaj(knjiga) {
    return await HttpService.post('/Knjiga', knjiga)
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
                    return { greska: true, poruka: 'Knjiga se ne može dodati!' }; 
            }
        });
}

async function promjena(sifra, knjiga) {
    return await HttpService.put('/Knjiga/' + sifra, knjiga)
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
                    return { greska: true, poruka: 'Knjiga se ne može promijeniti!' }; 
            }
        });
}

async function obrisi(sifra) {
    return await HttpService.delete('/Knjiga/' + sifra)
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: 'Knjiga se ne može obrisati!' }; 
        });
}

export default {
    get,
    getBySifra,
    dodaj,
    promjena,
    obrisi
};
