import { Rows } from "../types/rows";

const Modal = ({ rows, setRows, setProceed }: Rows) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if(Number(e.target.value ) > 10 ) window.alert("uaudoiusifusidof")
    setRows(Number(e.target.value));
  };
  return (
    <div className="w-full flex h-screen items-center justify-center bg-black opacity-80">
      <div className="w-[450px] h-[450px] bg-gray-300 flex items-center rounded-2xl flex-col  pt-9 p-5 gap-40">
        <h1 className="font-medium text-xl font-mono">Set The grid Length</h1>
        <div className="flex w-full gap-4">
          <input type="number" min={1} max={10} value={rows} onChange={handleChange} className="border rounded-3xl pl-5 text-2xl w-full p-3" />
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300  text-white flex items-center justify-center py-3 px-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => setProceed && setProceed(true)} disabled={rows > 10 || rows < 1}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
