import { VisualMiningModuleTemplate } from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "face_recognition",
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
        {
            type: "boolean",
            name: "cluster_unknowns",
            default: false
        },
        {
            type: "boolean",
            name: "index_unknowns",
            default: false
        },
        {
            type: "number",
            name: "face_detection_scale",
            default: 600
        },
        {
            type: "boolean",
            name: "enable_top_k",
            default: false
        },
        {
            type: "integer",
            name: "top_k",
            default: 3
        }
    ]
});
