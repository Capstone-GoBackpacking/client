import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { article } from "src/utils/format";
import { useNavigate } from "react-router-dom";

const Child = ({ target, ckey, name, onTarget, hasChild, childs, path }) => {
  const navigate = useNavigate();
  const isTarget = target === ckey;

  return (
    <div className="mt-2 pl-5">
      <div
        onClick={() => {
          onTarget(ckey);
          if (!hasChild) {
            navigate(path);
          }
        }}
      >
        <div className="flex items-center cursor-pointer">
          <i
            className={`bx bxs-right-arrow mr-4 text-xs text-typera-primary trasition-transform duration-300 ${
              isTarget && "rotate-90"
            }`}
          ></i>
          <p
            className={`text-sm font-extramedium ${isTarget && "text-active"}`}
          >{`${name} (${childs?.length || 0})`}</p>
        </div>
      </div>
      {isTarget && childs && hasChild && (
        <div>
          <ul>
            {childs.map((child) => (
              <li key={child._id}>
                <div className="flex items-center cursor-pointer relative">
                  <i className="bx bxs-crown absolute text-sm ml-3"></i>
                  <p className="text-sm ml-9 my-1 text-primary font-extramedium">
                    {child.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const View = ({
  target,
  ckey,
  name,
  icon,
  hasChild,
  onTarget,
  childs,
  path,
}) => {
  const navigate = useNavigate();

  const isTarget = target === ckey;
  const [childTarget, setChildTarget] = useState(null);

  const handleChangeTarget = (key) => {
    if (childTarget !== key) {
      setChildTarget(key);
    }
    if (childTarget === key) {
      setChildTarget(null);
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          onTarget(ckey);
          if (!hasChild) {
            navigate(path);
          }
        }}
      >
        <div
          className={`flex items-center py-3 px-5 hover:bg-gray-secondary cursor-pointer rounded-md ${
            isTarget && "text-primary"
          }`}
        >
          <img
            src={`src/assets/images/icons/${icon}`}
            alt={icon}
            className="w-5"
          />
          <p className="mx-2 font-bold text-base leading-6">{name}</p>
          {hasChild && (
            <i
              className={`bx bx-chevron-right text-xl trasition-transform duration-300 ${
                isTarget && "rotate-90"
              }`}
            ></i>
          )}
        </div>
      </div>
      {hasChild && isTarget && (
        <div>
          <div className="relative mb-4">
            <AiOutlineSearch
              size={25}
              className="absolute pl-2 inset-y-0 h-full text-gray-thirt"
            />

            <input
              type="text"
              className="py-2 text-xs text-black pl-10 border-purple-100 rounded shadow-sm resize-none w-full placeholder-purple-200 focus:outline-none focus:ring-0 focus:border-typera-primary"
              placeholder={`Find ${article(name)} ${name}`}
            />
          </div>
          {childs &&
            childs.map((child) => (
              <Child
                key={child._id}
                ckey={child.key}
                name={child.name}
                onTarget={(e) => handleChangeTarget(e)}
                target={childTarget}
                childs={child.childs}
                hasChild={true}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default View;
