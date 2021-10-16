import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './component/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const listItem = [
        {
            id: 1,
            name: "Đặng Quỳnh Phương Thảo",
            imgURL: "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/128373205_2441634009471574_1513291782184851499_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0debeb&_nc_ohc=OmlmDwQHY2UAX-gN2em&_nc_ht=scontent.fsgn3-1.fna&oh=98efcd939e585216882e4c7333d322cb&oe=618DE698"
        },
        {
            id: 2,
            name: "Đặng Quỳnh Phương Thảo",
            imgURL: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/127658858_2441633812804927_7560608243100770806_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_ohc=chAJGtG0DUYAX_F1bUl&_nc_ht=scontent.fsgn8-2.fna&oh=b02a5d09100547ff535383bb567154b4&oe=618BF27F"
        },
        {
            id: 3,
            name: "Đặng Quỳnh Phương Thảo",
            imgURL: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/93324784_2272870279681282_6514439951705178112_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=M9fFEeSPaucAX9thW4V&_nc_oc=AQkDIOZLSYXnX78iYavnkW1Yr3BlK9zOq6olodYybdFANRRzwEi2GMZrfby-mBEJt1w&_nc_ht=scontent.fsgn13-2.fna&oh=7fcb3e7ab5e1d807b09b3127e7ab4ad7&oe=618B0B1B"
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList
                listItem={listItem}
            />
        </div>
    );
}

export default AlbumFeature;