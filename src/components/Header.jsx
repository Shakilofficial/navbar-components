const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
    </header>
  );
};

export default Header;
