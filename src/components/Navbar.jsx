const navItens = [
  {
    name: "Serviços",
    link: "#services",
  },
  {
    name: "Sobre",
    link: "#about",
  },
  {
    name: "Galeria",
    link: "#gallery",
  },
  {
    name: "Contato",
    link: "#contact",
  },
  {
    name: "avaliações",
    link: "#reviews",
  },
];

function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <p>Logo</p>
      </div>

      <div className="flex gap-5 text-pink-200">
        {navItens.map((item) => (
          <a href={item.link}>{item.name}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
