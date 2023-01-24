import {EventEmitter} from 'events';
import DeepJSOptions from "./DeepJSOptions";
import API from "./API";

import { advanced_diversity_analysis, dataset_creation, face_recognition, landmark_recognition, object_scene_recognition, qrcode_detection, lower_third_recognition } from "./modules";
import {VisualMiningModule} from "./VisualMiningModule";

class DeepJS extends EventEmitter {

    static modules = {
        advanced_diversity_analysis,
        dataset_creation,
        face_recognition,
        landmark_recognition,
        object_scene_recognition,
        qrcode_detection,
        lower_third_recognition
    }

    private api : API;

    constructor(DeepJSOptions: DeepJSOptions) {
        super();

        //check if user has a deepva token
        if (!DeepJSOptions.apiKey && !process.env.DEEPVA_KEY) {
            throw new Error("DeepVA not available. No Api Key found")
        }

        this.api = new API({
            API_KEY : DeepJSOptions.apiKey || process.env.DEEPVA_KEY || "<MISSING>",
            API_URL : DeepJSOptions.apiUrl || process.env.DEEPVA_URL || "https://api.deepva.com/api/v1",
            API_AUTH_PREFIX : DeepJSOptions.apiAuthPrefix || process.env.DEEPVA_AUTH_PREFIX || "Key"
        })
    }

    async checkAuthorization() : Promise<any> {
        return await this.api.checkAuthorization()
    }


    async createJob(sources : string[], modules : VisualMiningModule[]) : Promise<any> {

        //create dict of modules
        const modulesDict = {};
        modules.forEach((module) => {
            modulesDict[module.ID] = module.parameters
        })

        const jobData = {
            sources,
            modules: modulesDict
        }

        console.log(JSON.stringify(jobData))

        return await this.api.post("/jobs/", jobData)
    }

    waitForJob(jobId : string, interval : number = 1000) : Promise<any> {
            return new Promise((resolve, reject) => {
                const intervalId = setInterval(async () => {
                    const job = await this.getJob(jobId)
                    if (job.state === "completed") {
                        clearInterval(intervalId)

                        //get results
                        const results = await this.getJobResults(jobId)
                        resolve(results)
                    }
                }, interval)
            })
    }

    async getJob(jobId : string) : Promise<any> {
        return await this.api.get(`/jobs/${jobId}`)
    }

    async getJobResults(jobId : string) : Promise<any> {
        return await this.api.get(`/jobs/${jobId}/detailed-results/?limit=99999`)
    }
}

export default DeepJS;