const axios = require("axios")
const token = "ae20e7e5720fa1f3b0b34d8627a08b22";

const getESGData = async (company) => {
    console.log(token)

    let res;
    try {
        res = await axios.get(`https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization/search?q=${company}&token=${token}`);
    } catch (e) {
        console.log(e)
        return
    }

    const esgData = {
        environment: {
            grade: res.data.environment_grade ?? "",
            level: res.data.environment_level ?? "",
        },
        social: {
            grade: res.data.social_grade ?? "",
            level: res.data.social_level ?? "",
        },
        governance: {
            grade: res.data.governance_grade ?? "",
            level: res.data.governance_level ?? "",
        },
        total: {
            grade: res.data.total_grade ?? "",
            level: res.data.total_level ?? ""
        }
    }

    return esgData
}

export default getESGData