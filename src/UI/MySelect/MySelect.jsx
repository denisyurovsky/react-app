export const MySelect = ({options, defaultValue, onChange}) => {
    return (
        <select onChange={(event) => onChange(event.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {options.map((item) => {
            return <option key={item.value} value={item.value}>{item.name}</option>
        })}
      </select>
    )
}