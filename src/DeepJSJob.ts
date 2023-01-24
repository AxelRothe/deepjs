import {VisualMiningModuleTemplate} from "./VisualMiningModuleTemplate";
import {VisualMiningModule} from "./VisualMiningModule";



interface DeepJSJobOptions {
    sources: string[];
    modules: VisualMiningModuleTemplate[];
}

export class DeepJSJob {
    sources: string[];
    modules: VisualMiningModule[];

    constructor(options: DeepJSJobOptions) {
        this.sources = options.sources;
        this.modules = options.modules;
    }

    start() {
        
    }
}