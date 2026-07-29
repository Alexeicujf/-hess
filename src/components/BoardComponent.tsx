import { CellComponent } from "./CellComponent";

export const BoardComponent = () => {
  const boardSize = Array.from({ length: 8 }, (_, index) => index); // здесь мы создаем массив из 8 индексов ?
  return (
    <div className="board">
      {boardSize.map((row) => {
        return boardSize.map((col) => {
          const isWhite = (row + col) % 2 === 0;
          return (
            <CellComponent
              key={`${row}-${col}`}
              row={row}
              col={col}
              isWhite={isWhite}
            />
          );
        });
      })}
    </div>
  );
};
