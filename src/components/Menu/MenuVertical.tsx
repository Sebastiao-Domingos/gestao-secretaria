export default function MenuVertical() {
  return (
    <div className="flex justify-between py-4">
      <div>
        <div className="w-[300px] border rounded-full flex items-center gap-2 px-2 py-1">
          <span className="material-icons text-slate-300">search</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Pesquisa"
            className="w-auto bg-transparent outline-none /border-b /focus:border-b-purple-300"
          />
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div>
          <button className="hover:bg-purple-600/5 rounded p-1 bg-white">
            <span className="material-icons text-slate-400">notifications</span>
          </button>
        </div>
        <div>
          <button className="p-1 flex justify-start gap-1 items-start hover:bg-purple-600/5 rounded">
            <span className="flex flex-col justify-start">
              <span className="text-[12px] text-purple-400">
                Sebastiao Afonso
              </span>
              <span className="text-[10px] text-left pl-4 text-slate-400">
                Admin
              </span>
            </span>
            <span className="material-icons text-slate-400 text-xl">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
