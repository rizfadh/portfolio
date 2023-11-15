import { CKEditor } from '@ckeditor/ckeditor5-react'
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import {
    Bold,
    Code,
    Italic,
    Strikethrough,
    Subscript,
    Superscript,
    Underline,
} from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { Link } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { Alignment } from '@ckeditor/ckeditor5-alignment'
import {
    Table,
    TableCaption,
    TableCellProperties,
    TableProperties,
    TableToolbar,
} from '@ckeditor/ckeditor5-table'
import { CodeBlock } from '@ckeditor/ckeditor5-code-block'
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent'
import { Font } from '@ckeditor/ckeditor5-font'
import { Highlight } from '@ckeditor/ckeditor5-highlight'

function TextEditor({ value, setValue }) {
    const config = {
        ui: {
            viewportOffset: { top: 100 },
        },
        plugins: [
            Essentials,
            Autoformat,
            Bold,
            Italic,
            Underline,
            Strikethrough,
            Superscript,
            Subscript,
            Code,
            BlockQuote,
            Heading,
            Link,
            List,
            Paragraph,
            Alignment,
            Table,
            TableToolbar,
            TableProperties,
            TableCellProperties,
            TableCaption,
            CodeBlock,
            Indent,
            IndentBlock,
            Font,
            Highlight,
        ],
        heading: {
            options: [
                {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph',
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2',
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3',
                },
            ],
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableProperties',
                'tableCellProperties',
                'toggleTableCaption',
            ],
        },
        toolbar: [
            'undo',
            'redo',
            '|',
            'heading',
            'fontColor',
            'fontBackgroundColor',
            'link',
            'alignment',
            '|',
            'bold',
            'italic',
            'underline',
            {
                label: 'More Formatting',
                icon: 'text',
                items: ['strikethrough', 'superscript', 'subscript', 'code'],
            },
            'highlight',
            '|',
            'bulletedList',
            'numberedList',
            'outdent',
            'indent',
            '|',
            'blockQuote',
            'insertTable',
            'codeBlock',
        ],
    }

    return (
        <CKEditor
            editor={ClassicEditor}
            config={config}
            data={value}
            onChange={(_, editor) => setValue(editor.getData())}
        />
    )
}

export default TextEditor
