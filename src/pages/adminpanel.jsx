import React from 'react'

const adminpanel = () => {
   return (
      <div>
         <script src="https://cdn.tailwindcss.com"></script>
         <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
         <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


         <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
               <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4">
                     <div className="max-w-full overflow-x-auto">
                        <table className="table-auto w-full">
                           <thead>
                              <tr className="bg-blue-500 text-center">
                                 <th
                                    className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                                 >
                                    ID
                                 </th>
                                 <th
                                    className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                                 >
                                    Users
                                 </th>
                                 <th
                                    className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           bg
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                                 >
                                    Score
                                 </th>

                                 <th
                                    className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                                 >
                                    Remove

                                 </th>
                                 <th
                                    className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           "
                                 >
                                    Add_User
                                 </th>

                                 <th
                                    className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4

                           "
                                 >
                                    Update

                                 </th>

                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-blue-400
                           border-b border-l border-[#E8E8E8]
                           "
                                 >
                                    1
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                 >
                                    Waji
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                 >
                                    80
                                 </td>

                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              inline-block
                              rounded
                              hover:bg-red-700 hover:text-white
                              bg-red-600 text-white
                              "
                                    >
                                       REMOVE
                                    </button>
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              text-white
                              inline-block
                              rounded
                              hover:bg-blue-800 hover:text-white
                              bg-blue-700
                              "
                                    >
                                       ADD
                                    </button>
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              text-white
                              inline-block
                              rounded
                              hover:bg-primary hover:text-white
                              bg-blue-900 
                              "
                                    >
                                       UPDATE
                                    </button>
                                 </td>

                              </tr>
                              <tr>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           
                           text-base
                           py-5
                           px-2
                           bg-blue-400
                           border-b border-l border-[#E8E8E8]
                           "
                                 >
                                    2
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                 >
                                    yasir
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                 >
                                    80
                                 </td>


                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]

                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              text-white
                              inline-block
                              rounded
                              hover:bg-red-700 hover:text-white
                              bg-red-600 
                              "
                                    >
                                       REMOVE
                                    </button>

                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              inline-block
                              rounded
                              hover:bg-blue-800 hover:text-white
                              bg-blue-700 text-white
                              "
                                    >
                                       ADD
                                    </button>

                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              text-white
                              inline-block
                              rounded
                              
                              hover:bg-primary hover:text-white
                              bg-blue-900 
                              "
                                    >
                                       UPDATE
                                    </button>

                                 </td>


                              </tr>
                              <tr>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-blue-400
                           border-b border-l border-[#E8E8E8]

                           "
                                 >
                                    3
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                            
                           "
                                 >
                                    uzair
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                                 >
                                    80
                                 </td>




                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              inline-block
                              rounded
                              hover:bg-red-700 hover:text-white
                              bg-red-600 text-white
                              "
                                    >
                                       REMOVE
                                    </button>
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              text-white
                              inline-block
                              rounded
                              hover:bg-blue-800 hover:text-white
                              bg-blue-700 
                              "
                                    >
                                       ADD
                                    </button>
                                 </td>
                                 <td
                                    className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                                 >
                                    <button
                                       className="
                              border border-primary
                              py-2
                              px-6
                              text-white
                              inline-block
                              rounded
                              hover:bg-primary hover:text-white
                              bg-blue-900 
                              "
                                    >
                                       UPDATE
                                    </button>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </div>
   )
}

export default adminpanel
