import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Hobby } from "src/components";
import { ASIGN_HOBBIES } from "src/graphql/accounts";
import { HOBBIES } from "src/graphql/hobbies";

const HobbiesContainer = () => {
  const { id } = useParams();
  const [checked, setChecked] = useState([]);
  const [asignHobbies] = useMutation(ASIGN_HOBBIES);
  const navigate = useNavigate();
  const { data: hobbies } = useQuery(HOBBIES);

  const handleCheck = (id) => {
    if (checked.includes(id)) {
      setChecked(checked.filter((check) => check !== id));
    } else {
      setChecked((state) => [...state, id]);
    }
  };

  const submit = async () => {
    if (checked.length > 0) {
      console.log(checked);
      const { data } = await asignHobbies({
        variables: {
          input: {
            id,
            hobbies: checked,
          },
        },
      });
      if (data.asignHobbies.id) {
        navigate("/login");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-10 flex flex-col items-center">
        <h2 className="font-bold text-3xl">Add Your Interests</h2>
        <span className="text-stone-500">Please select at least one</span>
      </div>
      <div className="border-solid border-[1px] border-[#eeeeee] w-4/5 mb-10"></div>
      <div className="flex flex-wrap w-3/4">
        {hobbies?.hobbies.map((hobby) => (
          <Hobby
            key={hobby.id}
            id={hobby.id}
            name={hobby.name}
            checked={checked.includes(hobby.id)}
            onCheck={handleCheck}
          />
        ))}
      </div>
      <div className="border-solid border-[1px] border-[#eeeeee] w-4/5 mt-10"></div>
      <div>
        <button
          onClick={submit}
          className="cursor-pointer absolute right-60 float-right flex mt-10 px-5 py-4 bg-primary justify-center items-center rounded-full w-48 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HobbiesContainer;
