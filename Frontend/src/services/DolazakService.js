import { HttpService } from "./HttpService";

async function get() {
    try {
        const odgovor = await HttpService.get('/Dolazak');
        return odgovor.data;
    } catch (e) {
        console.error(e);
        return null; // Osiguraj se da vraćaš nešto u slučaju greške
    }
}

async function obrisi(dolazak) {
    const { clan, sastanak } = dolazak;
    return await HttpService.delete(`/Dolazak`, { data: { clan, sastanak } })
        .then((odgovor) => {
            return { greska: false, poruka: odgovor.data };
        })
        .catch(() => {
            return { greska: true, poruka: 'Dolazak se ne može obrisati!' };
        });
}

async function dodaj(dolazak) {
    return await HttpService.post('/Dolazak', dolazak)
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
                    return { greska: true, poruka: 'Dolazak se ne može dodati!' };
            }
        });
}

async function promjena(dolazak) {
    return await HttpService.put('/Dolazak', dolazak)
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
                    console.log(poruke);
                    return { greska: true, poruka: poruke };
                default:
                    return { greska: true, poruka: 'Dolazak se ne može promjeniti!' };
            }
        });
}

export default {
    get,
    obrisi,
    dodaj,
    promjena
};
