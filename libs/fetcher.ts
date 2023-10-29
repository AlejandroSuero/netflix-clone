import axios from "axios"

// eslint-disable-next-line @typescript-eslint/promise-function-async
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default fetcher
