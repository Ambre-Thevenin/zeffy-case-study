import {  Donation, DonationRow } from "./DonationRow"

export const DonationsList = ({ donations }: {donations?: Donation[]}) => {
    return (
        <div className="donationsListContainer">
            {donations?.map((donation, index) => {
             return <DonationRow donation={donation} key={index} />
            })}    
        </div>
    )
}