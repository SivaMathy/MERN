import React, { useEffect, useState } from 'react';
import '../styles/profile.scss';
import sampleImg from '../assets/google.svg';

export default function Profile() {
    const [userData, setUserData] = useState(null);

    const fetchCurrentUser = async () => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            console.error("Access Token is Required");
            return;
        }

        try {
            const response = await fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setUserData(data); // Setting user data
            console.log("Fetched data:", data); // Log fetched data
        } catch (error) {
            console.error("Failed to fetch current user details:", error);
        }
    };

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    // Use another useEffect to log userData when it changes
    useEffect(() => {
        console.log("User data updated:", userData);
    }, [userData]);

    return (
        <div className='Profile'>
            <div className="wrapper">
                <div className="img-wrapper">
                    <img src={userData ? userData.image : 'Loading...'} className='profilePic' alt="Profile" />
                    <p className='username h3-style'>{userData ? userData.username : 'Loading...'}</p>
                </div>
                <div className="content-wrapper">
                    <div className="details-wrapper">
                        <label className='h3-style label'>First Name :</label>
                        <p className='detail h3-style'>{userData ? userData.firstName : 'Loading...'}</p>
                    </div>
                    <div className="details-wrapper">
                        <label className='h3-style label'>Last Name :</label>
                        <p className='detail h3-style'>{userData ? userData.lastName : 'Loading...'}</p>
                    </div>
                    <div className="details-wrapper">
                        <label className='h3-style label'>Age :</label>
                        <p className='detail h3-style'>{userData ? userData.age : 'Loading...'}</p>
                    </div>
                    <div className="details-wrapper">
                        <label className='h3-style label'>Email :</label>
                        <p className='detail h3-style'>{userData ? userData.email : 'Loading...'}</p>
                    </div>
                    <div className="details-wrapper">
                        <label className='h3-style label'>Phone Number :</label>
                        <p className='detail h3-style'>{userData ? userData.phone : 'Loading...'}</p>
                    </div>
                    <div className="details-wrapper">
                        <label className='h3-style label'>Date Of Birth :</label>
                        <p className='detail h3-style'>{userData ? userData.birthDate : 'Loading...'}</p>
                    </div>
                    <div className="details-wrapper">
                        <label className='h3-style label'>Role :</label>
                        <p className='detail h3-style'>{userData ? userData.role : 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
