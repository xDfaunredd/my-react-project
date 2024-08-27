const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

export { BookList, favouriteBooks };
