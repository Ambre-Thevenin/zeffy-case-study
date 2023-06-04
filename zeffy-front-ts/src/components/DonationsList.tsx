import {  Donation, DonationRow } from "./DonationRow"
import './DonationsList.css'

export const DonationsList = ({ donations }: {donations?: Donation[]}) => {
    return (
        <div className="donationsListContainer">
            {donations?.map((donation, index) => {
             return <DonationRow donation={donation} key={index} />
            })}    
        </div>
    )
}