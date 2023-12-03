'use client'
import ComboBox from "@/components/ComboBox";
import Heading from "@/components/Heading";
import NoteTitle from "@/components/NoteTitle";
import TextEditor from "@/components/TextEditor";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter()
    const [content, setContent] = useState(null);

    const createNotes = async (data, e) => {
        e.preventDefault()
        data.content = content
        console.log(data)
        await axios.post('/api/create', data).then(res => {
            console.log(res)
            router.push('/notes')
        })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <form onSubmit={handleSubmit(createNotes)}>
            <div className='pl-5 flex flex-col'>
                <Heading>Note Editor</Heading>
                <NoteTitle register={register} errors={errors} />
                <TextEditor content={content} setContent={setContent} />
                <ComboBox register={register} errors={errors} />
                <button type="submit" className='btn bg-blue-600 text-white font-semibold px-3 py-1 w-24 my-4 ml-auto rounded duration-500'>Create</button>
            </div>
        </form>
    );
};

export default Page;