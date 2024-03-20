const UsersTable = ({
  users,
  totalUsers,
  currentPage,
  totalPages,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  handlePageChange
}) => {
  return (
    <div className="w-full">
      <div className="rounded-md">
        <div className="relative overflow-x-auto">
            <div className="mb-4 flex gap-4">
                <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} />
                <p className="text-lg text-light-1"> To</p>
                <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            S/N
                        </th>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date of Birth
                        </th>
                    </tr>
                </thead>
                 <tbody>
                    {users.map((user, index)=>(
                     <tr key={index} className="border-b text-white">
                        <td className="px-6 py-4">
                        {index + 1}
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                           {user.firstname}
                        </th>
                        <td className="px-6 py-4">
                           {user.lastname}
                        </td>
                        <td className="px-6 py-4">
                           {user.email}
                        </td>
                        <td className="px-6 py-4">
                           {user.phone_number}
                        </td>
                        <td className="px-6 py-4">
                            {user.date_of_birth}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-white dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-blue1 dark:text-white">{currentPage}</span> of <span className="font-semibold text-gray-500 dark:text-white">{totalPages}</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{currentPage}</a>
                    </li>
                    <li>
                     <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>

      </div>
    </div>
  );
};

export default UsersTable;
