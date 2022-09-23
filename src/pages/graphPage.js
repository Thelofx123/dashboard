
import { Container } from "@mui/system"
import SquareBox from "../component/box"
import { useGetDocsFromFireBase } from "../firebase"
import { useEffect, useState } from "react"
const Chart = () => {

    const { data } = useGetDocsFromFireBase("order")
    const [isloaded, setLoaded] = useState(false)
    const [pro, setPro] = useState()
    const [delivered, setDelivered] = useState(0)
    const [order, setOrder] = useState(0)
    let all = 0
    useEffect(() => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === "Хүргэсэн") {
                all += data[i].price
                setPro(all)
                setDelivered(i + 1)
                setLoaded(true)
            }
            if (data[i].type === "Захиалга") {
                setOrder(i + 1)
                setLoaded(true)
            }
        }
    }, [isloaded, order, delivered, data])

    return (
        <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', justifyContent: 'space-between' }}>

            {isloaded ? <SquareBox data={pro} name={"Орлого"}></SquareBox> : <SquareBox data={0} name={"Орлого"}></SquareBox>}
            {isloaded ? <SquareBox data={delivered} name={"Хүргэсэн"}></SquareBox> : <SquareBox data={0} name={"Хүргэсэн"}></SquareBox>}
            {isloaded ? <SquareBox data={order} name={"Захиалга"}></SquareBox> : <SquareBox data={0} name={"Захиалга"}></SquareBox>}

        </Container>
    )
}
export default Chart