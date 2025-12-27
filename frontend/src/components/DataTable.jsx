

const DataTable = ({items}) =>{
    
    return(
        <>
            <table className="table-auto md:table-fixed w-full">
                <thead className="">
                    <tr>
                        <th className="border bg-slate-500 w-3/4">Usuario</th>
                        <th className="border bg-slate-500">Cantidad de Posts</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length === 0 && (
                        <tr>
                            <td colSpan={2} className="text-center py-4">
                                No hay datos
                            </td>
                        </tr>
                    )}

                    {items.map((item, index) => (
                        <tr 
                            key={index}
                            className={"odd:bg-gray-300 even:bg-white hover:bg-blue-100 transition"}
                        >
                            <td className="border px-4 py-2">
                                {item.name}
                            </td>
                            <td className="border px-4 py-2 text-center">
                                {item.postCount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default DataTable