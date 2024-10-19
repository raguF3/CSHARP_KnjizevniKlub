import HttpService from '../services/HttpService';



const SastanakService = {
    async getSastanci() {
        try {
            const response = await HttpService.get('/sastanci'); 
            return response.data; 
        } catch (error) {
            console.error("Greška prilikom dohvata sastanaka: ", error);
            throw error; 
        }
    },

    async getSastanakBySifra(sifra) {
        try {
            const response = await HttpService.get(`/sastanci/${sifra}`);
            return response.data;
        } catch (error) {
            console.error(`Greška prilikom dohvata sastanka sa šifrom ${sifra}: `, error);
            throw error;
        }
    },

    async dodajSastanak(sastanak) {
        try {
            const response = await HttpService.post('/sastanci', sastanak); 
            return response.data;
        } catch (error) {
            console.error("Greška prilikom dodavanja sastanka: ", error);
            throw error;
        }
    },

    async promijeniSastanak(sifra, sastanak) {
        try {
            const response = await HttpService.put(`/sastanci/${sifra}`, sastanak); 
            return response.data;
        } catch (error) {
            console.error(`Greška prilikom ažuriranja sastanka sa šifrom ${sifra}: `, error);
            throw error;
        }
    },

    async obrisiSastanak(sifra) {
        try {
            const response = await HttpService.delete(`/sastanci/${sifra}`); 
            return response.data;
        } catch (error) {
            console.error(`Greška prilikom brisanja sastanka sa šifrom ${sifra}: `, error);
            throw error;
        }
    }
};

export default {
    getSastanci,
    getSastanakBySifra,
    dodajSastanak,
    promijeniSastanak,
    obrisiSastanak
};
