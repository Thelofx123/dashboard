import Accord from "./accordation"

const AccordWrap = ( {data, type, orderList }) => {

  return (

     <Accord data={data} type={type} orderList={orderList}  sx={{marginTop:'10px'}} /> 

  )
}

export default AccordWrap