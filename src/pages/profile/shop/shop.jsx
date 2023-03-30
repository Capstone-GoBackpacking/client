import { BsFillBoxSeamFill } from 'react-icons/bs'
import { MyEquipments } from 'src/containers'

const Shop = () => {
  return (
    <div>
      <div>
        <span className="flex gap-2 items-center"><BsFillBoxSeamFill /> Equipments: <span>2</span></span>
      </div>
      <div className="mt-5">
        <MyEquipments />
      </div>
    </div>
  )
}

export default Shop
