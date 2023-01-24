import {VisualMiningModuleTemplate} from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "landmark_recognition",
    parameters: [
        {
            type: "string",
            name: "model",
            default: "general-b",
        },
        {
            type: "number",
            name: "min_similarity",
            default: 0.75,
        },
    ]
});