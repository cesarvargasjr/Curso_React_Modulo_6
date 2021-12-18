interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    const cor = props.cor ?? 'gray'

    return (
        <button className={`
            bg-green-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}

/* bg-${cor}-600 */
/* bg-gradient-to-r from-${cor}-400 to-${cor}-700 */
/* bg-green-600 */