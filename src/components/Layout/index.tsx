import { Sidebar } from '../Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

export const Layout = ({ children, currentPath }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar currentPath={currentPath} />
      {children}
    </div>
  );
};
