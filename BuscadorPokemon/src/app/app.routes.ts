import { Routes } from '@angular/router'
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { PetililComponent } from './components/petilil/petilil.component';
import { GreavardComponent } from './components/greavard/greavard.component';
import { RowletComponent } from './components/rowlet/rowlet.component';
import { SylveonComponent } from './components/sylveon/sylveon.component';
import { LitleoComponent } from './components/litleo/litleo.component';
import { ChandelureComponent } from './components/chandelure/chandelure.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import { PokemonListaComponent } from './components/pokemon-lista/pokemon-lista.component';

export const routes: Routes = [
    { path: '', redirectTo: 'registro', pathMatch: 'full' },
    { path: 'registro', component: RegistroUsuarioComponent },
    { path: 'buscador', component: BuscadorPokemonComponent },
    { path: 'Petilil', component: PetililComponent },
    { path: 'Greavard', component: GreavardComponent },
    { path: 'Rowlet', component: RowletComponent },
    { path: 'Sylveon', component: SylveonComponent },
    { path: 'Litleo', component: LitleoComponent },
    { path: 'Chandelure', component: ChandelureComponent },
    { path: 'Pokemon/:name', component: PokemonDetallesComponent },
    { path: 'PokemonLista', component: PokemonListaComponent },
    { path: '**', redirectTo: 'registro'}
];