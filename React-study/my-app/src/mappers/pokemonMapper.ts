// src/mappers/pokemonMapper.ts
import { Pokemon, type PokemonProps, type StatName } from '../domain/pokemon';

type RawAbility = { is_hidden: boolean; ability: { name: string } }
type RawType = { type: { name: string } }
type RawStat = { base_stat: number; stat: { name: StatName } }
type RawMove = {
  move: { name: string }
  version_group_details: Array<{
    level_learned_at: number
    version_group: { name: string }
    move_learn_method: { name: string }
  }>
}
type RawPastTypes = {
  generation: { name: string }
  types: Array<{ type: { name: string }; slot: number }>
}

type RawPokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  abilities: RawAbility[]
  types: RawType[]
  stats: RawStat[]
  sprites: any
  cries?: { latest?: string; legacy?: string }
  moves: RawMove[]
  past_types?: RawPastTypes[]
}

export function mapPokemon(raw: RawPokemon): Pokemon {
  const abilities = (raw.abilities ?? []).map(a => ({
    name: a.ability?.name ?? '',
    isHidden: !!a.is_hidden,
  }))

  const types = (raw.types ?? []).map(t => t.type?.name ?? '').filter(Boolean)

  const stats = (raw.stats ?? []).reduce<Partial<Record<StatName, number>>>((acc, s) => {
    const key = s.stat?.name
    if (key) acc[key] = s.base_stat ?? 0
    return acc
  }, {})

  // sprites/artworks (com fallbacks simples)
  const artwork =
    raw.sprites?.other?.['official-artwork']?.front_default ??
    raw.sprites?.other?.home?.front_default ??
    raw.sprites?.front_default ??
    null

  const shinyArtwork =
    raw.sprites?.other?.['official-artwork']?.front_shiny ??
    raw.sprites?.other?.home?.front_shiny ??
    raw.sprites?.front_shiny ??
    null

  const sprites = raw.sprites?.front_default ?? null

  const cryLatest = raw.cries?.latest ?? null

  const moves =
    (raw.moves ?? []).flatMap(m =>
      (m.version_group_details ?? []).map(vgd => ({
        name: m.move?.name ?? '',
        learnedAt: vgd.level_learned_at ?? 0,
        method: vgd.move_learn_method?.name ?? '',
        versionGroup: vgd.version_group?.name ?? '',
      })),
    ).filter(m => m.name)

  const pastTypes =
    (raw.past_types ?? []).map(pt => ({
      generation: pt.generation?.name ?? '',
      types: (pt.types ?? []).map(t => t.type?.name ?? '').filter(Boolean),
    })) ?? []

  const props: PokemonProps = {
    id: raw.id,
    name: raw.name,
    baseExperience: raw.base_experience,
    heightDecimeters: raw.height,
    weightHectograms: raw.weight,
    types,
    abilities,
    stats,
    artwork,
    shinyArtwork,
    sprites,
    cryLatest,
    moves,
    pastTypes,
  }

  return new Pokemon(props)
}
