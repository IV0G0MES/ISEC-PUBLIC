import "./minicell.css";
function MiniCell({ value, onMiniCellClick }) {
  return (
    <div className="mini-cell bg-danger rounded" onClick={onMiniCellClick}>
      {value === "X" || value === "O" || value === "ov" || value === "xv" ? (
        <img className="jog" alt="" src={"images/" + value + ".png"}></img>
      ) : (
        ""
      )}
    </div>
  );
}
export default MiniCell;
