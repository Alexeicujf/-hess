interface CellProps {
  row: number;
  col: number;
  isWhite: boolean;
}
export const CellComponent: React.FC<CellProps> = ({ row, col, isWhite }) => {
  return (
    <div
      key={`${row}-${col}`}
      className={`cell ${isWhite ? "white" : "negro"}`}
    >
      {row} : {col}
    </div>
  );
};
