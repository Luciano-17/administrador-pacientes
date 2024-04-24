const Error = ({children} : {children: React.ReactNode}) => {
    return (
        <p className="text-center my-2 bg-red-100 text-red-800 border-l-4 border-red-800 font-bold p-1 uppercase text-sm">
            {children}
        </p>
    )
}

export default Error