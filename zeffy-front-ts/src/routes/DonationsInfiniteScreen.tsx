import { useEffect, useState } from "react";
import { DonationsList } from "../components/DonationsList"
import { Header } from "../components/Header"
import { Donation } from "../components/DonationRow";


const getData = async () => {
        const response  = await fetch('http://localhost:8080/donations', { method: 'GET', cache: "default"});
        const donations = await response.json();
        return donations;
    }



export const DonationsInfiniteScreen = () => {

    const [data, setData] = useState<Donation[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const fetchedData = await getData();
            const parsedData = fetchedData.map((entry: any) => ({ id: entry.id, firstName: entry.donation.firstName, lastName: entry.donation.lastName, date: entry.donation.createdAtUtc, amount: entry.donation.amount}))
            setData(parsedData.slice(0,10));
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