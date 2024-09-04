import Image from "next/image";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        height="30"
        width="30"
      />
    );
  }
  return (
    <IconContext.Provider
      value={{ color: 'white'}}
    >
      <div>
        <FaUserCircle size={24} />
      </div>
    </IconContext.Provider>
  );
};

export default Avatar;
