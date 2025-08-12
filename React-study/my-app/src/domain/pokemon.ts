// src/domain/pokemon.ts
export type StatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

export type PokemonProps = {
  id: number
  name: string
  baseExperience: number
  heightDecimeters: number
  weightHectograms: number
  types: string[]                     // ex: ['fairy']
  abilities: { name: string; isHidden: boolean }[]
  stats: Partial<Record<StatName, number>> // ex: { speed: 35, hp: 70, ... }
  artwork: string | null              // official artwork
  sprites: string | null               // front_default (fallback rápido)
  shinyArtwork: string | null
  cryLatest: string | null
  moves: Array<{ name: string; learnedAt: number; method: string; versionGroup: string }>
  pastTypes: Array<{ generation: string; types: string[] }>
}

export class Pokemon {
  public readonly props: PokemonProps;

  constructor(props: PokemonProps) {
    this.props = props;
  }

  get displayName() {
    return this.props.name[0].toUpperCase() + this.props.name.slice(1)
  }

  get sprites(){
    return this.props.sprites ? [this.props.sprites] : []
  }

  // exemplo de conveniência: calcula peso/altura em unidades “reais”
  get heightMeters() { return this.props.heightDecimeters / 10 }
  get weightKg() { return this.props.weightHectograms / 10 }
}
