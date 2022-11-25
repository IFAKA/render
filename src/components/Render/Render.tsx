interface conditionals {
  [key: string]: boolean;
}

interface RenderProps {
  children: JSX.Element | JSX.Element[];
  when: conditionals;
}
const Render = ({ children, when }: RenderProps) => {
  return (
    <>
      {Array.isArray(children)
        ? children.map((children) => when[children.type.name] && children)
        : when[children.type.name] && children}
    </>
  );
};
export default Render;
