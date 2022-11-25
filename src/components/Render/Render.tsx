interface RenderProps {
  children: JSX.Element | JSX.Element[];
  when: boolean | boolean[];
}
const Render = ({ children, when }: RenderProps) => {
  return (
    <>
      {Array.isArray(children) && typeof when !== "boolean"
        ? children.map((children, i) => when[i] && children)
        : when && children}
    </>
  );
};
export default Render;
