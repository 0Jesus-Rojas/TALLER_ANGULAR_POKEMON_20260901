import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  name: string;
  image: string;
}

interface PokemonApiResponse {
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Por defecto consulta "ditto" tal como indica el API solicitado.
  getPokemon(name: string = 'ditto'): Observable<Pokemon> {
    const query = name.trim().toLowerCase();
    return this.http
      .get<PokemonApiResponse>(`${this.baseUrl}/${query}`)
      .pipe(
        map((res) => ({
          name: res.name,
          image:
            res.sprites.other?.['official-artwork']?.front_default ??
            res.sprites.front_default ??
            '',
        })),
      );
  }
}
