import { InputNumber } from "primereact/inputnumber";
import { MyMap } from "src/containers";
import { useMutation, useQuery } from "@apollo/client";
import { TRIPTYPES } from "src/graphql/trip-types";
import TripType from "src/components/tripType/tripType.component";
import { useRef, useState } from "react";
import { Button, TripTemplate } from "src/components";
import { LOCATIONS } from "src/graphql/locations";
import { Marker, Popup } from "react-leaflet";
import { CREATE_TRIP, GENERATE_TEMPLATE } from "src/graphql/trips";
import L from "leaflet";
import markerIconSVG from "/assets/images/icons/map-marker.svg";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

const markerIcon = new L.Icon({
  iconUrl: markerIconSVG,
  iconSize: [30, 30],
});

const GenerateTrip = () => {
  const navigate = useNavigate();
  const { data } = useQuery(TRIPTYPES);
  const [generateTemplate] = useMutation(GENERATE_TEMPLATE);
  const [createTrip] = useMutation(CREATE_TRIP);
  const { data: locationData } = useQuery(LOCATIONS);
  const [generateInput, setGenerateInput] = useState({
    type: "",
    expectDistance: 0,
    currentLocation: "",
  });
  const [templates, setTemplates] = useState([]);
  const toastRef = useRef();

  const onSelected = (id) => {
    setGenerateInput((state) => ({ ...state, type: id }));
  };

  const handleGenerateTemplate = async () => {
    try {
      const { data } = await generateTemplate({
        variables: {
          input: generateInput,
        },
      });
      if (data?.generateTemplate.length > 0) {
        toastRef.current.show({
          severity: "info",
          summary: "Success",
          detail: "Generated Templates",
        });
        setTemplates(data.generateTemplate);
      } else {
        toastRef.current.show({
          severity: "",
          summary: "Success",
          detail: "Generated Templates",
        });
      }
    } catch (error) {}
  };

  const handleCreateFromTemplate = async (id) => {
    const template = templates.find((template) => template.id === id);
    try {
      const { data } = await createTrip({
        variables: {
          input: {
            typeId: template.type.id,
            locationEndId: template.locationEnd.id,
            locationStartId: template.locationStart.id,
            slot: template.slot,
            timeStart: new Date(Number(template.timeStart)),
            timeEnd: new Date(Number(template.timeEnd)),
            name: template.name,
          },
        },
      });
      if (data) {
        toastRef.current.show({
          severity: "success",
          summary: "Success",
          detail: "Generate New Trip",
        });
        setTimeout(() => {
          navigate(`/trips/${data.createTrip.id}`);
        }, 1000);
      }
    } catch (error) {}
  };

  return (
    <div className="m-auto flex w-11/12 py-10">
      <Toast ref={toastRef} />
      <div className="flex-1">
        <div className="m-auto w-11/12">
          <div className="mt-5">
            <label className="font-medium">Current Location</label>
            <div className="mt-4 h-80">
              <MyMap>
                {locationData &&
                  locationData.locations.map((location) => (
                    <Marker
                      eventHandlers={{
                        click: () =>
                          setGenerateInput((state) => ({
                            ...state,
                            currentLocation: location.id,
                          })),
                      }}
                      icon={markerIcon}
                      key={location.id}
                      position={{ lat: location.lat, lng: location.lng }}
                    >
                      {location.id === generateInput.currentLocation && (
                        <Popup>{location.name}</Popup>
                      )}
                    </Marker>
                  ))}
              </MyMap>
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-4 block font-medium">Distance</label>
            <InputNumber
              min={0}
              className="w-full"
              onChange={(e) =>
                setGenerateInput((state) => ({
                  ...state,
                  expectDistance: e.value,
                }))
              }
            />
          </div>
          <div className="mt-5">
            <label className="font-medium">Type Of Trip</label>
            <div className="mt-4 grid grid-cols-2 gap-10">
              {data?.types &&
                data.types.map((item) => (
                  <TripType
                    className="text-xs"
                    key={item.id}
                    id={item.id}
                    selected={generateInput.type === item.id}
                    onSelected={onSelected}
                    name={item.name}
                    icon={item.icon}
                  />
                ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Button
              type="primary"
              name="Generate"
              className="px-10 py-2"
              onClick={handleGenerateTemplate}
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="m-auto w-11/12">
          <div className="flex flex-col gap-5">
            {templates.map((template) => (
              <TripTemplate
                key={template.id}
                ckey={template.id}
                name={template.name}
                fromName={template.locationStart.name}
                fromPosition={{
                  lat: template.locationStart.lat,
                  lng: template.locationStart.lng,
                }}
                toName={template.locationEnd.name}
                toPosition={{
                  lat: template.locationEnd.lat,
                  lng: template.locationEnd.lng,
                }}
                distance={template.distance.toFixed(2)}
                type={template.type.name}
                slot={template.slot}
                timeStart={template.timeStart}
                timeEnd={template.timeEnd}
                onCreate={handleCreateFromTemplate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateTrip;
