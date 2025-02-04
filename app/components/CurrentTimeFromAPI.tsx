'use-client';

import { useEffect, useState } from 'react'; 

export const CurrentTimeFromAPI = () => {
  const [ apiResponse, setApiResponse ] = useState(''); // Set apiResponse state to an empty string by default
  const [ loading, setLoading ] = useState(true); // Set loading state to true by default to show a loading message

    useEffect(() => {
        // Fetch the API response
        fetch('/api/currentTime')
        .then(res => res.json())
        .then(data => {
            setApiResponse(data.message); // Set the apiResponse state to the message from the API
            setLoading(false); // Set loading state to false to hide the loading message
        });
    },
    []);

    return (
        <div className='pt-4'>
            The message from the API is: <strong>{apiResponse}</strong>
        </div>
    );
}
