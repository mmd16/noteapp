'use client'
import { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

const TextEditor = (props) => {
    const { content, setContent} = props;
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ font: [] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ color: [] }, { background: [] }],
                    [{ script: "sub" }, { script: "super" }],
                    ["blockquote", "code-block"],
                    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                    [
                        { indent: "-1" },
                        { indent: "+1" },
                        { align: [] },
                    ],
                    [{ direction: "rtl" }],
                    ["link", "image", "video"],
                    ["clean"],
                ],
            },
        }),
        []
    );

    return <ReactQuill theme="snow" modules={modules} value={content} onChange={e => setContent(e)} />;
}

export default TextEditor
