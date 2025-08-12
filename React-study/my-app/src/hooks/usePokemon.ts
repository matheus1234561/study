
import { GetPokemon } from '../service/api'
import { mapPokemon } from '../mappers/pokemonMapper'
import { useQuery } from '@tanstack/react-query'


export function usePokemon(idOrName: string | number | undefined, opts?: { enabled?: boolean }) {
  return useQuery({
    queryKey: ['pokemon', idOrName],
    queryFn: async () => mapPokemon(await GetPokemon(idOrName!) as any),
    enabled: opts?.enabled,
    staleTime: 5 * 60 * 1000,
  })
}