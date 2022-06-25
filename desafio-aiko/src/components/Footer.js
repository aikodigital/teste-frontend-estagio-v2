export const Footer = () => {
  return (
    <footer className="bg-black text-center lg:text-left">
      <div
        className="text-gray-300 text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {`© 2022 Aiko Digital: `}
        <a className="text-gray-300" href="https://tailwind-elements.com/">
          Teste frontend estágio v2
        </a>
      </div>
    </footer>
  );
};
