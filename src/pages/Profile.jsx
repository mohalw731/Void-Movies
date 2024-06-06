import React, { useState } from 'react';
import useUserDeatils from '../Hooks/useUserDeatils';
import Loader from '../components/Loader';
import Nav from '../components/Nav';
import EditBox from '../components/ui/EditBox';


function Profile() {
    const { userDetails, noUserData } = useUserDeatils();

    const getName = () => userDetails?.name || '';
    let name = getName();
    let capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);

    const email = userDetails?.email

    if (noUserData) {
        return <Loader />
    }

    return (
        <div className="row">
            <div className="profile-page">
                <Nav />
                <div className="profile-wrapper">
                    <h1>Welcome back {capitalizedFirstLetter}</h1>
                    <div className="profile-wrapper__box">
                        <div className="profile-wrapper-box__content">
                            <EditBox
                                data={email}
                                title='Email:' />

                            <EditBox
                                title='Name:'
                                data={capitalizedFirstLetter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
