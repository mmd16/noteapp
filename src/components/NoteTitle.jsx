import React from 'react'

const NoteTitle = (props) => {
    const { register, errors, value } = props;
    return (
        <div className="md:flex mt:20 md:items-center mb-6">
            <div>
                <label className=" text-gray-500 text-lg font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                    Note Title:
                </label>
            </div>
            <div className="md:w-2/3">
                <input {...register('title', { required: true })} className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="Please Fill in Note Title" defaultValue={value ?? ""} />
                {errors.title && <p className="text-red-600">Please enter the note title.</p>}
            </div>
        </div>
    )
}

export default NoteTitle
