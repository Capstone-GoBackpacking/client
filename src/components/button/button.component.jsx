import { VscLoading } from "react-icons/vsc";

const Button = ({ type, className, name, onClick, loading = false }) => {
  const styles = () => {
    if (type === "primary") {
      return "bg-primary";
    }

    if (type === "secondary") {
      return "bg-secondary";
    }
  };

  return (
    <button
      className={`flex items-center gap-1 justify-center text-white font-bold rounded-md cursor-pointer hover:scale-110 ease-linear duration-500 ${styles()} ${className}`}
      onClick={() => onClick()}
    >
      {loading && <VscLoading className="animate-spin" />}
      {name}
    </button>
  );
};

export default Button;
