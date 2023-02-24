import { DeepJS } from '../dist/index.js'
import dotenv from 'dotenv'
dotenv.config()

const { DEEPVA_API_KEY } = process.env

console.log(process.env)

const deep = new DeepJS({
    apiKey: process.env.DEEPVA_API_KEY,
});

deep.checkAuthorization().then((response) => {
    console.log(response);

    const sources = [
        "https://demo.deepva.com/demo1.jpg"
    ]

    const modules = [
        DeepJS.modules.object_scene_recognition.build({
            model: 'general-c',
            min_confidence: 50,
            language: 1
        })
    ]

    deep.createJob(sources, modules).then((response) => {
        console.log("Job created : " + response.id);

        deep.waitForJob(response.id).then((response) => {
            console.log(response);
        })

    }).catch((error) => {
        console.log(error);
    })

}).catch((error) => {
    console.log(error);
});

