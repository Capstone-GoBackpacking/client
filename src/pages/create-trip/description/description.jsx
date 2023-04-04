import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch, useSelector } from "react-redux";
import createTripSelector from "src/redux/reducers/create-trip/create-trip.selector";
import { setValue } from "src/redux/reducers/create-trip/create-trip.reducer";

const Description = () => {
  const { name, description } = useSelector(createTripSelector);
  const dispatch = useDispatch();

  const handleSetValue = (key, value) => {
    dispatch(setValue({ key, value }));
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <div className="flex flex-col gap-3 md:gap-5">
        <div>
          <label htmlFor="name" className="font-bold">Name Your Trip</label>
          <InputText
            id="name"
            className="w-full"
            value={name}
            onChange={(e) => handleSetValue('name', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="font-bold">Description</label>
          <InputTextarea
            autoResize
            rows={5}
            className="w-full"
            value={description}
            onChange={(e) => handleSetValue('description', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
