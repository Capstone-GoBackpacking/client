// import { Marker } from "react-leaflet";
// import { MyMap } from "src/containers";
// import { useEffect, useState } from "react";
// import { LOCATIONS } from "src/graphql/locations";
// import { useLazyQuery, useQuery } from "@apollo/client";
// import { InputText } from "primereact/inputtext";
// import { InputTextarea } from "primereact/inputtextarea";
// import { MultiSelect } from "primereact/multiselect";
// import { TAGS } from "src/graphql/tags";
// import { Button } from "primereact/button";

// const ContributeLocation = () => {
//   const [locations, setLocations] = useState([]);
//   const { data: tags } = useQuery(TAGS);
//   const [getLocations] = useLazyQuery(LOCATIONS);
//   const [details, setDetails] = useState({
//     name: "",
//     address: "",
//     description: null,
//     lng: null,
//     lat: null,
//     tags: [],
//   });

//   useEffect(() => {
//     const init = async () => {
//       const { data } = await getLocations();
//       if (data?.locations) {
//         setLocations(data.locations);
//       }
//     };
//     init();
//   }, []);

//   const submit = async () => {
//     if (!target.draft) {
//       await axios.put(`http://localhost:3000/locations/${target.id}`, {
//         name: details.name,
//         address: details.address,
//         description: details.description,
//         lng: details.lng,
//         lat: details.lat,
//         tags: details.tags,
//       });
//     } else {
//       await axios.post("http://localhost:3000/locations", details);
//     }
//     getLocations();
//   };

//   return (
//     <div className="h-screen">
//       <MyMap>
//         {locations &&
//           locations.map((location) => (
//             <Marker
//               key={location.id}
//               position={{ lat: location.lat, lng: location.lng }}
//             ></Marker>
//           ))}
//       </MyMap>
//       <div>
//         <div className="grid">
//           <div className="field col-12">
//             <label>Name</label>
//             <InputText
//               value={details.name}
//               className="w-full"
//               onChange={(e) => changeDetailHandler("name", e.target.value)}
//             />
//           </div>
//           <div className="field col-12">
//             <label>Address</label>
//             <InputText
//               value={details.address}
//               className="w-full"
//               onChange={(e) => changeDetailHandler("address", e.target.value)}
//             />
//           </div>
//           <div className="field col-12">
//             <label>Description</label>
//             <InputTextarea
//               value={details.description}
//               className="w-full"
//               onChange={(e) =>
//                 changeDetailHandler("description", e.target.value)
//               }
//             />
//           </div>
//           <div className="field col-6">
//             <label>Lat</label>
//             <InputText
//               value={details.lat}
//               className="w-full"
//               onChange={(e) => changeDetailHandler("lat", e.target.value)}
//             />
//           </div>
//           <div className="field col-6">
//             <label>Lng</label>
//             <InputText
//               value={details.lng}
//               className="w-full"
//               onChange={(e) => changeDetailHandler("lng", e.target.value)}
//             />
//           </div>
//           <div className="field col-12">
//             <label>Tags</label>
//             <MultiSelect
//               className="w-full"
//               value={details.tags?.map((tag) => tag.LocationTag.tagId)}
//               options={tags.map((item) => ({
//                 label: item.name,
//                 value: item.id,
//               }))}
//               onChange={(e) => changeDetailHandler("tags", e.value)}
//             />
//           </div>
//           <div className="field col-12">{/* <img src={deital}/> */}</div>
//           <div className="justify-content-center flex w-full gap-3">
//             <Button
//               label="Accept"
//               type="success"
//               onClick={submit}
//               severity="success"
//             />
//             <Button
//               label="Clear"
//               type="danger"
//               severity="danger"
//               onClick={() =>
//                 setDetails({
//                   name: "",
//                   address: "",
//                   description: null,
//                   lng: null,
//                   lat: null,
//                   tags: [],
//                 })
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContributeLocation;

const ContributeLocation = () => {
  return <div></div>;
};

export default ContributeLocation;
