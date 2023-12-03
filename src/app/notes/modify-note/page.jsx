'use client'
import ComboBox from "@/components/ComboBox";
import Heading from "@/components/Heading";
import NoteTitle from "@/components/NoteTitle";
import TextEditor from "@/components/TextEditor";
import Loading from "@/components/Loading";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Page = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter()
    const [content, setContent] = useState();
    const [data, setdata] = useState();

    useEffect(() => {
        axios.post('/api/getById', { id: parseInt(props.searchParams.id) }).then(res => {
            console.log(res)
            setContent(res.data.content)
            setdata(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const updateNotes = async (eventData, e) => {
        e.preventDefault()
        eventData.content = content
        eventData.id = data.id
        console.log(eventData)
        await axios.put('/api/updateById', eventData).then(res => {
            console.log(res)
            router.push('/notes')
        })
            .catch(err => {
                console.log(err)
            })
    }

    if (data) {
        return (
            <form onSubmit={handleSubmit(updateNotes)}>
                {console.log(props)}
                <div className='pl-5 flex flex-col'>
                    <Heading>Note Editor</Heading>
                    <NoteTitle register={register} errors={errors} value={data.title} />
                    <TextEditor content={content} setContent={setContent} />
                    <ComboBox register={register} errors={errors} value={data.type} />
                    <button type="submit" className='btn bg-blue-600 text-white font-semibold px-3 py-1 w-24 my-4 ml-auto rounded duration-500'>Update</button>
                </div>
            </form>
        );
    } else {
        return <Loading />
    }


};

export default Page;