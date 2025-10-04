import axios from "axios"
import { useEffect, useState } from "react"

const MonthlyShowExpAndInc = ()=>{

    const [allexpense,setAllExpense] = useState(null);
    const [allIncome,setAllIncome] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{

            const res = await axios.get("http://localhost:3000/getExpensedata",{
                withCredentials:true
            })

            const {date,userId,_v,_id,...rest} = res?.data?.data[0];
            const allExpense = {
                ...rest
            }
            
            console.log(allExpense);
        }

        fetchData();
    },[])

    return(
        <>
        </>
    )
}

export default MonthlyShowExpAndInc;