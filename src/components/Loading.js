import React from 'react'

const Loading = ({isLoading}) => {
    return (
        <div>
            {isLoading && <div>Loading...</div>}
        </div>
    )
}

export default Loading
