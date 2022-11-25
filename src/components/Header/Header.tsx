const Header = () => {
  return (
    <div className="max-w-xl w-full mb-5 mt-2">
      <h3 className="text-xl font-bold">Conditional rendering solution</h3>
      <div>
        A clean way to render components without ternaries or early returns.
      </div>
      <div>
        Conditions should be created in the same order that the components are
        placed.
      </div>
      <span>It works with direct childrens. You can check the code </span>
      <a
        target="_blank"
        href="https://github.com/IFAKA/render/blob/main/src/components/Render/Render.tsx"
        className="hover:underline hover:cursor-pointer font-semibold"
      >
        here
      </a>
    </div>
  );
};
export default Header;
