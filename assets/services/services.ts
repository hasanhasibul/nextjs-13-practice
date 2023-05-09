import axios from "axios";

export const getData = async (url: string) => {
    const res = await axios.get(url)
    return res
}