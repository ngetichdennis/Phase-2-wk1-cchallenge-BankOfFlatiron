import React, { useState } from "react"
function TableDetails({onAddTransaction}){
    //useState hook for the form data
    const [formData,setFormData]=useState({
        date:"",
        description:"",
        category:"",
        amount:"",
    })
    //handle input changes
    function handleInputChange(event){
        const {name,value}=event.target
        
        setFormData({...formData,[name]:value,})
    }
    //handle Form submission
    function handleSubmit(event){
        //preventing browser default
        event.preventDefault()
        //converting amount to a number
        const amount=Number(formData.amount);
        onAddTransaction({...formData,amount})
        //resetting the form data state
        setFormData({
            date: "",
            description: "",
            category:"",
            amount: "",
          });
          fetch("http://localhost:8001/transactions",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
                }).then((response)=> response.json())
                .then((data)=>console.log(data))
         
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            name="date"
            placeholder="Enter Date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            />
            <br/>
        
            <input
            name="description"
            placeholder="Description"
            type="text"
            value={formData.description}
            onChange={handleInputChange}
            />
            <br/>
            <input
            name="category"
             placeholder="Enter Category"
             type="text"
            value={formData.category}
            onChange={handleInputChange}
           />
           <br/>
            <input
            name="amount"
            placeholder="Enter Amount"
            type="text"
            value={formData.amount}
            onChange={handleInputChange}
            />
            <br/>
            <button type="submit">ADD TRANSACTION</button>
        </form>

    )

}
export default TableDetails;