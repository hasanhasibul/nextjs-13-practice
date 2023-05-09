
import { getData } from "@/assets/services/services"
const page = async () => {
  const res = await getData('https://jsonplaceholder.typicode.com/posts')
  return (
    <div>
      {
        res?.data?.map((item: any) => <div className="p-4 border rounded">
          <h2>{item?.title}</h2>
          <p>{item?.body}</p>
        </div>)
      }
    </div>
  )
}

export default page