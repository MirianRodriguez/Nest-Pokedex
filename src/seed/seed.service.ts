import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {


  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    const {data} = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    //para obtener el id del pokemon desde la url
    data.results.forEach(({name, url}) => {
      const segments = url.split('/');
      //porque sabemos que el id está en el anteultimo segmento
      const no = +segments[segments.length - 2];
      console.log({name, no})
    })
    return data.results;
  }
}
