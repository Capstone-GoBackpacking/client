import { InputText } from "primereact/inputtext"
import { InputTextarea } from 'primereact/inputtextarea'

const Description = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <div className="flex flex-col gap-3 md:gap-5">
        <div>
          <label htmlFor="name" className="font-bold">Name Your Trip</label>
          <InputText id="name" className="w-full" />
        </div>
        <div>
          <label htmlFor="description" className="font-bold">Description</label>
          <InputTextarea autoResize rows={5} className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Description
