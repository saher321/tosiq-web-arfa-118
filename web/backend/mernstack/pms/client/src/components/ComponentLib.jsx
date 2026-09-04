
<input type="text" placeholder="" className="" />

export const InputField = (props) => {
    const { type, placeholder, className, ...otherProps } = props
    return (
        <input
        { ...otherProps }
        type={type}
        placeholder={placeholder}
        className={`${className ?? ''} py-2 px-3 rounded w-full bg-gray-200 border border-gray-300 focus:outline-amber-600 `}
        />
    )
}

export const SimpleButton = (props) => {
    const { text, className, ...otherProps } = props
    return (
        <button
        { ...otherProps }
        className={`${className ?? ''} cursor-pointer hover:shadow-lg py-2 px-3 rounded bg-mist-950 text-slate-100 border border-gray-800 `}
        >
            {text}
        </button>
    )
}

export const SelectInput = (props) => {
    const { data = [], className, ...otherProps } = props

    return (
        <select
        { ...otherProps }
        className={`${className ?? ''} py-2 px-3 rounded w-full bg-gray-200 border border-gray-300 focus:outline-amber-600 `}
        >
            {
                data.length == 0 ?
                <option disabled>No option provided yet</option> :
                
                <>
                <option defaultValue={""} disabled>Choose one option</option>
                {data.map((data,i) => {
                    return (
                        <option key={i} value={data.id}>{data.text}</option>
                    )
                })}
                </>
            }
        </select>
    )

}

export const Divider = () => {
    return (
        <div className='my-3 w-full h-[1px] bg-gray-300'></div>
    )
}
