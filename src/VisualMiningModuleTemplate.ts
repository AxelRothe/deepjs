import {VisualMiningModule} from "./VisualMiningModule";

interface VisualMiningModuleParameter {
    type: "string" | "number" | "integer" | "array" | "boolean";
    name: string;
    default?: any;
}

class VisualMiningModuleTemplate {
    ID: string;
    parameters: VisualMiningModuleParameter[];

    constructor(options: {
        ID: string;
        parameters: VisualMiningModuleParameter[];
    }) {
        this.ID = options.ID;
        this.parameters = options.parameters;
    }
    build(parameters) : VisualMiningModule {

        //check if supplied parameters match the template. if the parameter is not supplied and it has a default value then use it otherwise throw an error
        let moduleParameters = {};
        for (let parameter of this.parameters) {
            if (parameters[parameter.name]) {
                moduleParameters[parameter.name] = parameters[parameter.name];
            } else if (parameter.default) {
                moduleParameters[parameter.name] = parameter.default;
            } else {
                throw new Error(`Parameter ${parameter.name} is required for module ${this.ID}`)
            }
        }

        return {
            ID: this.ID,
            parameters: moduleParameters
        }
    }

}

export { VisualMiningModuleTemplate };