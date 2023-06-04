import './DonationRow.css';

export type Donation = {
    id: string;
    lastName: string;
    firstName: string;
    amount: number;
    date: Date;
}

export const DonationRow = ({ donation } : { donation: Donation}) => {
    const { lastName, firstName, amount } = donation;

    return (
        <div className='donationRowContainer'>
            <div className='donationRowCell'><p className="donationAmount">${amount}</p></div>
            <div className='donationRowCell'><p className='donationDetails'> by {firstName} {lastName}</p></div>
        </div>
    )

}