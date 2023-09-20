import { useNavigate } from "react-router-dom"

interface CreateInfo {
    name: string;
}

const CreateNew = () => {
    const navigate = useNavigate()
    const handleCreate = async (values: CreateInfo) => {
        console.log(`Successfully Created New Category:`, values)
        const apiUrl = "https://mock-api.arikmpt.com/api/category/create"
      
        try {
            const response = await fetch (apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            console.log(response)
            const data = await response.json()
      
            if (response.ok){
                navigate('/');
            } else {
                alert(data.errors)
            }
        } catch (error) {
            alert("Failed to Create New Category...!")
        }
      
      }
      
}

export default CreateNew