import { useState, useEffect } from 'react';
import axios from 'axios';

const BidRequest = () => {
    const [bidRequests, setBidRequests] = useState([]);

    useEffect(() => {
        // Fetch bid requests for the logged-in job owner
        const fetchBidRequests = async () => {
            try {
                const response = await axios.get(`https://a11-career-center-server.vercel.app/bidRequests`); // Replace with your API endpoint
                setBidRequests(response.data);
            } catch (error) {
                console.error('Error fetching bid requests:', error);
            }
        };

        fetchBidRequests();
    }, []); // Fetch bid requests when the component mounts

    const handleAccept = async (bidRequestId) => {
        try {
            // Update the bid request status to accepted
            await axios.patch(`https://a11-career-center-server.vercel.app/bidRequests/${bidRequestId}`, { status: 'accepted' }); // Replace with your API endpoint
            // Update the local state to reflect the change
            setBidRequests((prevBidRequests) =>
                prevBidRequests.map((bidRequest) =>
                    bidRequest._id === bidRequestId ? { ...bidRequest, status: 'accepted' } : bidRequest
                )
            );
        } catch (error) {
            console.error('Error accepting bid request:', error);
        }
    };

    const handleReject = async (bidRequestId) => {
        try {
            // Update the bid request status to rejected
            await axios.patch(`https://a11-career-center-server.vercel.app/bidRequests/${bidRequestId}`, { status: 'rejected' }); // Replace with your API endpoint
            // Update the local state to reflect the change
            setBidRequests((prevBidRequests) =>
                prevBidRequests.map((bidRequest) =>
                    bidRequest._id === bidRequestId ? { ...bidRequest, status: 'rejected' } : bidRequest
                )
            );
        } catch (error) {
            console.error('Error rejecting bid request:', error);
        }
    };

    return (
        <div className='overflow-x-auto'>
            <h2 className='text-4xl my-5 text-center font-semibold'>Bid Requests</h2>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Email</th>
                        <th>Deadline</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bidRequests.map((bidRequest) => (
                        <tr key={bidRequest._id}>
                            <td>{bidRequest.jobTitle}</td>
                            <td>{bidRequest.email}</td>
                            <td>{bidRequest.deadline}</td>
                            <td>{bidRequest.price}</td>
                            <td>{bidRequest.status}</td>
                            <td>
                                {bidRequest.status === 'pending' && (
                                    <>
                                        <button onClick={() => handleAccept(bidRequest._id)}>Accept</button>
                                        <button onClick={() => handleReject(bidRequest._id)}>Reject</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BidRequest;