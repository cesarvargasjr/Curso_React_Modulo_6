export default function Title(props) {
    return (
        <div className="flex flex-col justify-center rounded-md">
            {/* TÍTULO */}
            <h1 className="
                bg-blue-800 
                text-white
                py-4 
                text-3xl
                font-bold 
                text-center 
                rounded-md">
                {props.children}
            </h1>
            {/* <hr className="border-2 border-blue-600" /> */} {/* DIVISÓRIA DO TÍTULO */}
        </div>
    )
}

/* 
px-5 
bg-blue-800 
text-white
rounded-md */