import { trpc } from '../utils/trpc'

export default function Home() {
const { data } =  trpc.healthCheck.useQuery()

  return (
    <div className='text-3xl'>Status {data?.status ?? "Loading"}</div>
  )
}
