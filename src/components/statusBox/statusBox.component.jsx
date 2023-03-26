const StatusBox = ({ status }) => {
  const styles = () => {
    if (status === 'enable') {
      return 'bg-enable'
    }

    if (status === 'disable') {
      return 'bg-disable'
    }

    if (status === 'pending') {
      return 'bg-pending'
    }
  }

  return (
    <div className={`px-3 py-1 w-fit text-white font-bold rounded-md ${styles()}`}>
      {status}
    </div>
  )
}

export default StatusBox
