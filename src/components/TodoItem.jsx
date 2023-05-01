const TodoItem = ({ itemProp }) => {
  return (
    <>
      <input type="checkbox" />
      {itemProp.title}
    </>
  );
};
export default TodoItem;
