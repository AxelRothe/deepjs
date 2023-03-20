import { VisualMiningModuleTemplate } from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "face_attributes",
    parameters: [
        {
            type: "string",
            name: "model",
            default: "celebrities"
        },
        {
            type: "number",
            name: "max_distance",
            default: 1.0
        },
    ]
});
