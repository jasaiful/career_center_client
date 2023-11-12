import { useState, useEffect } from 'react';
import axios from 'axios';

const MyBids = () => {
    const [bids, setBids] = useState([]);

    useEffect(() => {
        // Fetch bids for the logged-in user
        const fetchBids = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/myBids`); // Replace with your API endpoint
                setBids(response.data);
            } catch (error) {
                console.error('Error fetching bids:', error);
            }
        };

        fetchBids();
    }, []); // Fetch bids when the component mounts

    const handleComplete = async (bidId) => {
        try {
            // Update the bid status to complete
            await axios.patch(`http://localhost:5000/myBids/${bidId}`, { status: 'complete' }); // Replace with your API endpoint
            // Update the local state to reflect the change
            setBids((prevBids) =>
                prevBids.map((bid) =>
                    bid._id === bidId ? { ...bid, status: 'complete' } : bid
                )
            );
        } catch (error) {
            console.error('Error completing bid:', error);
        }
    };

    return (
        <div className='overflow-x-auto'>
            <h2 className='text-4xl text-center font-semibold'>My Bids</h2>
            <table className='table w-full'>
                <thead>
                    <tr>                        
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map((bid) => (
                        <tr key={bid._id}>
                            <td>{bid.jobTitle}</td>
                            <td>{bid.email}</td>
                            <td>{bid.deadline}</td>
                            <td>{bid.status}</td>
                            <td>
                                {bid.status === 'in progress' && (
                                    <button onClick={() => handleComplete(bid._id)}>
                                        Complete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyBids;