import { VisualMiningModuleTemplate } from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "object_scene_recognition",
    parameters: [
        {
            type: "string",
            name: 'model',
            default: 'general-c'
        },
        {
            type: "number",
            name: 'min_confidence',
            default: 70
        },
        {
            type: "number",
            name: 'language',
            default: 0 // 0 = english, 1 = german
        }
    ]
});