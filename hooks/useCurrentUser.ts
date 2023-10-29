import useSWR, { type SWRResponse } from "swr"

import fetcher from "@/libs/fetcher"

const useCurrentUser = (): SWRResponse => {
  const { data, error, isLoading, mutate, isValidating }: SWRResponse = useSWR("/api/current", fetcher)
  return { data, error, isLoading, mutate, isValidating }
}

export default useCurrentUser
