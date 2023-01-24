import {VisualMiningModuleTemplate} from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "dataset_creation",
    parameters: [
        {
            type: "string",
            name: "dataset_id",
            default: "null"
        },
        {
            type: "boolean",
            name: "detect_single_name",
            default: "false"
        },
        {
            type: "boolean",
            name: "apply_generic",
            default: "true"
        },
        {
            type: "array",
            name: "name_dictionary_list",
            default: "null"
        },
        {
            type: "integer",
            name: "min_face_size",
            default: "112"
        },
        {
            type: "integer",
            name: "sharpness_threshold",
            default: "40"
        }
    ]
})