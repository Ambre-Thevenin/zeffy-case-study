import { useEffect, useState } from "react";

import { Donation } from "../components/DonationRow";
import { DonationsList } from "../components/DonationsList"
import { Header } from "../components/Header"



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
         <h1>Liste des dons</h1>
         {isLoading ? <p>Loading</p> : <DonationsList donations={data}/>}
        </div>
    )
}