export interface Pokemon {
    id?: number;
    name: string;
    url: string;
    image?: string;
    weight?: number;
    height?: number;
    types?: PokemonType[];
    stats?: PokemonStat[];
    sprites?: PokemonsSprite[];
    abilities?: PokemonAbility[];
    base_experience?: number;
    moves?: PokemonMove[];
}

export interface PokemonMove {
    move: PokemonMoveMove;
    version_group_details: any[];
  }
  
  export interface PokemonMoveMove {
    name: string;
    url: string;
  }

export interface PokemonAbility {
    ability: PokemonAbilityAbility;
    is_hidden: boolean;
    slot: number;
  }
  
  export interface PokemonAbilityAbility {
    name: string;
    url: string;
  }
export interface PokemonsSprite{
    back_shiny: string;
    front_shiny: string;
    other: PokemonsSpriteOther;
}

export interface PokemonsSpriteOther{
    dream_world: any;
    'official-artwork': PokemonsSpriteOfficial;
}

export interface PokemonsSpriteOfficial{
    front_default: string;
}

export interface PokemonType {
    slot: number;
    type: PokemonTypeType;
}

export interface PokemonTypeType {
    name: string;
    url: string;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: PokemonStatStat;
}

export interface PokemonStatStat {
    name: string;
    url: string;
}