import React from 'react'
const options = [
    "Bugs",
    "Critical",
    "Development Issue",
    "Sharing"
]
const ComboBox = (props) => {
    const { errors, register, value } = props
    return (
        <div className='flex mt-5'>
            <label htmlFor="options" className=" text-gray-500 text-lg font-bold md:text-right mb-1 mt-2 md:mb-0 pr-4">Select a Type: </label>
            <select defaultValue={value ?? "Bug"}{...register('noteType', { required: true })} id="options" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-md rounded leading-tight focus:ring-blue-500 w-1/4 focus:outline-none focus:border-blue-500 block p-2.5 mb-1">
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
            {errors.noteType && <p className="text-red-600 flex flex-col">Please choose a note type.</p>}
        </div>
    )
}

export default ComboBox
