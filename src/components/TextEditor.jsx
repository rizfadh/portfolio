import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

function TextEditor({ init, name }) {
    const editorRef = useRef(null)
    return (
        <Editor
            apiKey={import.meta.env.VITE_TINYMCE_KEY}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={init}
            textareaName={name}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                ],
                toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor link | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                block_formats:
                    'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6; Preformatted=pre',
            }}
        />
    )
}

export default TextEditor
