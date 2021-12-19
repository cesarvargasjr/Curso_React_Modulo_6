interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const cor = props.cor ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            bg-green-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}

/* bg-gradient-to-r from-${cor}-400 to-${cor}-700 */
/* bg-${cor}-600 */
/* bg-green-600 */