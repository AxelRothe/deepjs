import {VisualMiningModuleTemplate} from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "lower_third_recognition",
    parameters: [
        {
            type: "boolean",
            name: "detect_single_name",
            default: false
        },
        {
            type: "boolean",
            name: "apply_generic",
            default: true
        },
        {
            type: "array",
            name: "name_dictionary_list",
            default: null
        },
        {
            type: "integer",
            name: "min_face_size",
            default: 112
        },
        {
            type: "integer",
            name: "sharpness_threshold",
            default: 40
        },
        {
            type: "boolean",
            name: "only_faces",
            default: true
        },
        {
            type: "array",
            name: "secondary_dictionaries",
            default: null
        }
    ]
});