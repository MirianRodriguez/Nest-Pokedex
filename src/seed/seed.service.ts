import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ) {}


  async executeSeed() {
    await this.pokemonModel.deleteMany({}); //delete * from pokemon
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonsToInsert: {name: string, no: number}[] = [];

    //para obtener el id del pokemon desde la url
    data.results.forEach(({name, url}) => {
      const segments = url.split('/');
      //porque sabemos que el id está en el anteultimo segmento
      const no = +segments[segments.length - 2];
      pokemonsToInsert.push({name, no});
    })

    await this.pokemonModel.insertMany(pokemonsToInsert); //una sola inserción en la base de datos
    return 'seed executed'
  }
}
