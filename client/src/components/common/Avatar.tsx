import { MouseEventHandler } from 'react';
import useAuth from '../../hooks';

interface AvatarProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  bgColor?: String;
}

const Avatar = ({ onClick, bgColor }: AvatarProps) => {
  const [user] = useAuth();
  return (
    <div
      className={`w-11 h-11 rounded-[50%] ${
        bgColor !== 'white' ? `bg-main-color` : 'bg-[white]'
      } flex justify-center items-center cursor-pointer`}
      onClick={onClick}
    >
      <p className="text-lg font-bold text-main-color">
        {user.fullName
          ?.split(' ')
          .map((e, i, arr) => {
            if (i === 0 || i === arr.length - 1) return e.charAt(0).toUpperCase();
          })
          .join('')}
      </p>
    </div>
  );
};

export default Avatar;
