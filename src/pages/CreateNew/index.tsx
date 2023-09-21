import { useNavigate } from "react-router-dom"
import {  CreateInfo } from "../../types";
import { CreateNew as CreateNewComponent } from "../../components";


const CreateNew = () => {
    const navigate = useNavigate()

    const handleCreate = async (values: CreateInfo) => {
        console.log(`Successfully Created New Category:`, values)
        const apiUrl = import.meta.env.VITE_REACT_APP_CREATE_URL;
      
        try {
            const response = await fetch (apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(values)
            })
            if (response.ok) {
                console.log(response)
                await response.json()
                navigate('/');  
            } else {
                console.log("Failed to create new category")
                return
            }
   
        } catch (error) {
            console.error(error)
            alert("Failed to Create New Category...!")
        }  
      }

    return (
        <CreateNewComponent onSubmit={handleCreate} />
    )    
}

export default CreateNew