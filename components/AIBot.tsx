
export default function AIBot() {

    return (
        <div>
            <div className="text-xl">
                Have a question about me? Ask my AI. It will try its best!
            </div>
            <div className="flex gap-10 pt-5">
                <input
                    type="text"
                    className="px-4 py-3 border border-slate-500 rounded-full bg-black"
                    placeholder="ask me a question"
                />
                <button
                    className="bg-transparent hover:bg-blue-500
                    text-blue-700 font-semibold
                    hover:text-white py-2 px-4 border
                    border-blue-500 hover:border-transparent
                    rounded"
                    type="submit"
                >
                    ask
                </button>
            </div>
        </div>
    )
}
