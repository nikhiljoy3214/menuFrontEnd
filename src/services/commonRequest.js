import axios from "axios";


// API STRUCTURE

export const commonRequest = async (method, url, body) => {
    let requestConfig = {
        method,
        url,
        data: body
    }
    return await axios(requestConfig).then(result => {
        return result
    }).catch(err => {
        return err
    })
}

