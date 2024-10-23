import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';
import ClanService from '../services/ClanService'; 
import KnjigaService from '../services/KnjigaService'; 
import SastanakService from '../services/SastanakService';
import DolazakService from '../services/DolazakService';
import useLoading from '../hooks/useLoading';

export default function NadzornaPloca() {
  const [podaci, setPodaci] = useState([]);
  const { showLoading, hideLoading } = useLoading();

  async function getPodaci() {
    showLoading();
    try {
      // Dohvati broj članova
      const clanovi = await ClanService.dohvatiClanove();
      // Dohvati broj knjiga
      const knjige = await KnjigaService.dohvatiKnjige();
      // Dohvati broj sastanaka
      const sastanci = await SastanakService.dohvatiSastanke();
      // Dohvati broj dolazaka
      const dolasci = await DolazakService.dohvatiDolaske();

      // Pripremi podatke za kružni grafikon
      const podaciGrafikon = [
        {
          y: clanovi.length,
          name: 'Broj članova',
        },
        {
          y: knjige.length,
          name: 'Broj knjiga',
        },
        {
          y: sastanci.length,
          name: 'Broj sastanaka',
        },
        {
          y: dolasci.length,
          name: 'Broj dolazaka',
        },
      ];
      
      setPodaci(podaciGrafikon);
    } catch (error) {
      console.error("Greška pri dohvaćanju podataka:", error);
    } finally {
      hideLoading();
    }
  }

  useEffect(() => {
    getPodaci();
  }, []);

  return (
    <Container className='mt-4'>
      {podaci.length > 0 && (
        <PieChart
          highcharts={Highcharts}
          options={{
            ...fixedOptions,
            series: [
              {
                name: 'Statistika',
                colorByPoint: true,
                data: podaci,
              },
            ],
          }}
        />
      )}
    </Container>
  );
}

const fixedOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Statistika Književnog Kluba',
    align: 'left',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    enabled: false,
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
};
