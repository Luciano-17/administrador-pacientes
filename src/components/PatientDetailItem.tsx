type PatientDetailItemProps = {
    label: string
    data: string
}

const PatientDetailItem = ({label, data} : PatientDetailItemProps) => {
  return (
        <p className="font-bold mb-2 text-gray-700 uppercase">
            {label}: {''}
            <span className="font-normal normal-case">{data}</span>
        </p>
    )
}

export default PatientDetailItem