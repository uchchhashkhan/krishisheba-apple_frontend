import axios from 'axios';

const baseUrl ='http://127.0.0.1:8000';

export const getPredictionData = async (file) => {
    try{
        var url= baseUrl + '/predictApple'
        console.log(url);
        var formData = new FormData();
formData.append("file", file);
        const {data} = await axios.post(url, formData);
        return data;
    }catch(error){
        throw error;
    }
}