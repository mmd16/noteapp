'use client';
import CardItems from '@/components/CardItems';
import SearchBar from '@/components/SearchBar';
import { StateProviderContext } from '@/context/State';
import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';
import { GrPowerReset } from "react-icons/gr";

const ViewNotesPage = () => {
    const { searchState } = StateProviderContext()
    const [count, setCount] = useState(0);
    const [searchContent, setSearchContent] = useState(null);
    const [listCopy, setListCopy] = useState([]);
    const [list, setList] = useState([]);
    const memoizedItems = useMemo(() => list, [list]);
    useEffect(() => {
        console.log(count)
        axios.get('/api/getAll').then(res => {
            console.log(res)

            setList(res.data)
            setListCopy(res.data)
        })
            .catch(err => {
                console.log(err)
            })
        // const interval = setInterval(() => {
        //     setCount(count + 1);
        // }, 10000);
        // return () => clearInterval(interval);
    }, [count])

    useEffect(() => {
        console.log(searchContent)
        const filterlist = () => {
            if (searchContent === null) {
                setList(listCopy)
            }
            setList(list.filter(i => (i?.title.toLowerCase().includes(searchContent.toLowerCase()))))
        }
        filterlist();
        return () => { setSearchContent(null) }
    }, [searchState])



    return (
        <div className='flex flex-col flex-wrap'>
            <div className='ml-auto'><button onClick={() => setList(listCopy)} className="justify-center align-middle mr-3"><GrPowerReset /></button> </div>
            <div className='mb-10 ml-auto w-1/2'> 
                <div><SearchBar setSearchContent={setSearchContent} /></div>
            </div>
            <div className='ql-editor'>
                <CardItems list={memoizedItems} />
            </div>
        </div>

    )
}

export default ViewNotesPage