import { Button } from 'primereact/button'
import { GrAddCircle } from 'react-icons/gr'
import { CiSearch } from 'react-icons/ci'
import { InputText } from 'primereact/inputtext'
import { Tree } from 'primereact/tree'
import { MyTrips as MyTripsContainer } from 'src/containers'

const MyTrips = () => {
  const filterOptions = [
    {
      key: '0',
      label: 'Status',
      children: [
        {
          key: '0-0',
          label: 'Enable',
        },
        {
          key: '0-1',
          label: 'Disable'
        },
        {
          key: '0-2',
          label: 'Pending'
        }
      ]
    }
  ]

  return (
    <>
      <div className="md:flex ">
        <div className="flex flex-1 gap-5">
          <div className="flex items-center">
            <Button className="w-8 h-8 bg-white rounded-full border-0" icon={GrAddCircle} />
            <label>New</label>
          </div>
          <div>
            <span className="p-input-icon-left">
              <CiSearch className="h-4 w-4" />
              <InputText className="pt-1" />
            </span>
          </div>
        </div>
        <div className="flex-1">
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className='flex-1'>
          <Tree value={filterOptions} />
        </div>
        <div className="flex-3">
          <MyTripsContainer />
        </div>
      </div>
    </>
  )
}

export default MyTrips
