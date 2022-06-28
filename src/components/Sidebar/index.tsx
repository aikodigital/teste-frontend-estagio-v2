import classNames from 'classnames';
import { FiMap, FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AikoLogo from '../../assets/img/aiko.png';
import { Tooltip } from '../Tooltip';

const navLinks = [
  {
    icon: <FiTruck />,
    name: 'Equipamentos',
    path: '/equipments',
  },
  {
    icon: <FiMap />,
    name: 'Mapa',
    path: '/',
  },
];

interface SidebarProps {
  currentPath: string;
}

export const Sidebar = ({ currentPath }: SidebarProps) => {
  return (
    <header className="w-32 h-screen bg-white">
      <img
        src={AikoLogo}
        className="relative w-16 h-6 mx-auto mt-4"
        alt="Logotipo Aiko Digital"
      />

      <nav className="mt-36">
        <ul className="flex flex-col w-full">
          {navLinks.map((item, index) => (
            <li key={String(index + 1)}>
              <Tooltip message={item.name}>
                <Link
                  to={item.path}
                  className={classNames(
                    currentPath === item.path && 'bg-primary-500 text-white',
                    currentPath !== item.path && 'bg-white text-primary-500',
                    'w-full text-2xl py-8 flex items-center justify-center'
                  )}
                >
                  {item.icon}
                </Link>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
