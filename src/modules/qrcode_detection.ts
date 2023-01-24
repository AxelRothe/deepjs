import { VisualMiningModuleTemplate } from "../VisualMiningModuleTemplate";

export default new VisualMiningModuleTemplate({
    ID: "qrcode_detection",
    parameters: [
        {
            type: "number",
            name: 'speed_mode',
            default: 'general-c'
        },
        {
            type: "boolean",
            name: 'stop_on_detection',
            default: false
        }
    ]
});