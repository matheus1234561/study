export async function GetPokemon(idOrName: number | string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
  if (!res.ok) throw new Error(`PokeAPI ${res.status}`)
  return (await res.json()) as unknown
}