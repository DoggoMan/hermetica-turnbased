import React, { FC, useState } from 'react'

interface Props {
  details?: string
}

const ErrorBoundary: FC<Props> = ({ details }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div>
      <p>Uhoh, something went kaput!.</p>
      {details && (
        <>
          <button onClick={() => setShowDetails((prev) => !prev)}>
            {showDetails ? 'Show less' : 'Show more'}
          </button>
          {showDetails && <p>Details: {JSON.stringify(details)}</p>}
        </>
      )}
    </div>
  )
}

export default ErrorBoundary
