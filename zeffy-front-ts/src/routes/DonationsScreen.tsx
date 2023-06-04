import { useEffect, useState } from "react";
import { DonationsList } from "../components/DonationsList"
import { Header } from "../components/Header"
import { Donation } from "../components/DonationRow";

const mockedData = [
    {
        "id": "d00e6c3a-404c-4dde-a546-a53520f1dddb",
        "type": "Charge",
        "refundedAmount": 0,
        "donation": {
            "id": "33753852-2e03-498a-bafd-256c8d410400",
            "firstName": "G",
            "lastName": "F",
            "createdAtUtc": 1684766860371,
            "amount": 3000,
            "thankYouComment": null,
            "isAnonymous": true,
            "companyName": null,
            "__typename": "DonationObject"
        },
        "__typename": "TransactionWithDonationObject"
    },
    {
        "id": "7325f7b2-a574-46a3-ba3e-d2ff6703f997",
        "type": "Charge",
        "refundedAmount": 0,
        "donation": {
            "id": "b6533276-200f-486e-9f35-dd33c54c12e8",
            "firstName": "J",
            "lastName": "L",
            "createdAtUtc": 1684766054440,
            "amount": 5000,
            "thankYouComment": null,
            "isAnonymous": false,
            "companyName": null,
            "__typename": "DonationObject"
        },
        "__typename": "TransactionWithDonationObject"
    },
]


const getData = async () => {
        const response  = await fetch('http://localhost:8080/donations', { method: 'GET', cache: "default"});
        const donations = await response.json();
        return donations;
    }



export const DonationsScreen = () => {

    const [data, setData] = useState<Donation[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const fetchedData = await getData();
            console.log(fetchedData);
            const parsedData = fetchedData.map((entry: any) => ({ id: entry.id, firstName: entry.donation.firstName, lastName: entry.donation.lastName, date: entry.donation.createdAtUtc, amount: entry.donation.amount}))
            setData(parsedData);
            setIsLoading(false);
        }

        fetchData();
        
    }, [])


    return (
        <div>
         <Header />
         {isLoading ? <p>Loading</p> : <DonationsList donations={data}/>}
        </div>
    )
}